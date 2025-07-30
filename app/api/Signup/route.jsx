import { NextResponse } from 'next/server'
import { dbConnect } from '../../../Lib/connection'
import User from '../../../Modeles/Usermodel' 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req) {
  try {
    const { Firstname, Lastname, Email, Password, Phone, employeeID } = await req.json()

    await dbConnect()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{10}$/
    const empIDRegex = /^EMP\d{4,6}$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/

    if (!Firstname || !Lastname || !Email || !Password || !Phone || !employeeID) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    if (!emailRegex.test(Email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 })
    }

    if (!phoneRegex.test(Phone)) {
      return NextResponse.json({ message: 'Phone must be 10 digits' }, { status: 400 })
    }

    if (!empIDRegex.test(employeeID)) {
      return NextResponse.json({ message: 'Invalid employee ID format' }, { status: 400 })
    }

    if (!passwordRegex.test(Password)) {
      return NextResponse.json({
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      }, { status: 400 })
    }
    const existingUser = await User.findOne({ $or: [{ Email }, { employeeID }] })
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 })
    }
    const hashedPassword = await bcrypt.hash(Password, 12)
    const newUser = await User.create({
      Firstname,
      Lastname,
      Email,
      Password: hashedPassword,
      Phone,
      employeeID,
    })
    const token = jwt.sign(
      { id: newUser._id, email: newUser.Email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return NextResponse.json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        Firstname: newUser.Firstname,
        Lastname: newUser.Lastname,
        Email: newUser.Email,
        employeeID: newUser.employeeID,
      },
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
