import { NextResponse } from 'next/server';
import { dbConnect } from '../../../Lib/connection';
import User from '../../../Modeles/Usermodel';
import nodemailer from 'nodemailer';

// Create a reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,      // your email
    pass: process.env.EMAIL_PASS,      // app password or email password
  },
});

export async function POST(req) {
  try {
    const { email } = await req.json();
    await dbConnect();

    const user = await User.findOne({ Email: email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 min

    user.resetOTP = otp;
    user.resetOTPExpiry = expiry;
    await user.save();

    // Send email with OTP
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Password Reset',
      html: `
        <p>Hello ${user.Firstname},</p>
        <p>Your OTP for password reset is: <strong>${otp}</strong></p>
        <p>This OTP is valid for 10 minutes.</p>
        <br/>
        <p>Regards,<br/>Flipmaxx Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'OTP sent to your email' });
  } catch (err) {
    console.error('Email sending error:', err);
    return NextResponse.json({ message: 'Error sending OTP', error: err.message }, { status: 500 });
  }
}
