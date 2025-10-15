import { NextResponse } from 'next/server'
import { cookies as nextCookies } from 'next/headers'
import { dbConnect } from '../../../Lib/connection'
import User from '../../../Modeles/Usermodel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const dynamic = 'force-dynamic'
const JWT_SECRET = process.env.JWT_SECRET


export async function POST(req) {
  try {
    await dbConnect()
    const { Email, Password } = await req.json()

    if (!Email || !Password) {
      return NextResponse.json({ message: 'Email and Password are required' }, { status: 400 })
    }

    const user = await User.findOne({ Email })
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const isMatch = await bcrypt.compare(Password, user.Password)
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    const token = jwt.sign(
      {
        id: user._id,
        Email: user.Email,
        Firstname: user.Firstname,
        employeeID: user.employeeID,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    )

    const res = NextResponse.json({
      message: 'Login successful',
      user: { employeeID: user.employeeID },
    }, { status: 200 })

    res.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, 
      path: '/',
    })

    return res

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Login error', error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const cookieStore = await nextCookies() 
    const token = cookieStore.get('token')?.value

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    return NextResponse.json({ message: 'Token verified', user: decoded }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: 'Invalid or expired token', error: err.message }, { status: 403 })
  }
}


export async function DELETE() {
  const res = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 })

  res.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0, 
  })

  return res
}
