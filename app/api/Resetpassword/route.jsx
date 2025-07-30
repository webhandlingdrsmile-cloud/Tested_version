import { NextResponse } from 'next/server';
import { dbConnect } from '../.././/../Lib/connection'; // adjust path if needed
import User from '../../../Modeles/Usermodel';
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    const { email, otp, newPassword } = await req.json();

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // ✅ Validate other inputs
    if (!otp || typeof otp !== 'number' || otp < 100000 || otp > 999999) {
      return NextResponse.json({ message: 'Invalid OTP format' }, { status: 400 });
    }

    if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 6) {
      return NextResponse.json({ message: 'Password must be at least 6 characters' }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ Email: email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    if (
      user.resetOTP !== otp ||
      !user.resetOTPExpiry ||
      user.resetOTPExpiry < new Date()
    ) {
      return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.Password = hashedPassword;
    user.resetOTP = undefined;
    user.resetOTPExpiry = undefined;

    await user.save();

    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error resetting password:', err);
    return NextResponse.json({ message: 'Error resetting password', error: err.message }, { status: 500 });
  }
}
