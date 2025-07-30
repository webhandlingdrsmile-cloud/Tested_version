import { NextResponse } from 'next/server'
import { dbConnect } from '../../../Lib/connection'
import User from '../../../Modeles/Usermodel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { cookies } from 'next/headers'

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

    
    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    const res = NextResponse.json({
      message: 'Login successful',
      user: {
        employeeID: user.employeeID,
      },
    }, { status: 200 })

    res.headers.set('Set-Cookie', cookie)
    return res

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Login error', error: error.message }, { status: 500 })
  }
}

export async function GET() {
  const token = cookies().get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return NextResponse.json({ message: 'Token verified', user: decoded }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 403 })
  }
}

export async function DELETE() {
  const expiredCookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  })

  const res = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 })
  res.headers.set('Set-Cookie', expiredCookie)
  return res
}
