import { NextResponse } from 'next/server';
import { dbConnect } from '../../../Lib/connection';
import User from '../../../Modeles/Usermodel';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { email, otp, newPassword } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    if (!otp || typeof otp !== 'number' || otp < 100000 || otp > 999999) {
      return NextResponse.json({ message: 'Invalid OTP' }, { status: 400 });
    }

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ Email: email });
    if (!user || user.resetOTP !== otp || !user.resetOTPExpiry || user.resetOTPExpiry < new Date()) {
      return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 400 });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    user.Password = hashed;
    user.resetOTP = undefined;
    user.resetOTPExpiry = undefined;
    await user.save();

    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error resetting password:', err);
    return NextResponse.json({ message: 'Internal server error', error: err.message }, { status: 500 });
  }
}
