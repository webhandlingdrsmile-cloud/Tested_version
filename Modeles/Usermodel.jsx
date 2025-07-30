import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      required: [true, 'Firstname is required'],
      trim: true,
    },
    Lastname: {
      type: String,
      required: [true, 'Lastname is required'],
      trim: true,
    },
    Email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    employeeID: {
      type: String,
      required: [true, 'Employee ID is required'],
      unique: true,
      uppercase: true,
      trim: true,
      match: [/^EMP\d{4,6}$/, 'Employee ID must follow the pattern EMP0001'],
    },
    Phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
    },
    Password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    resetOTP: {
      type: Number,
    },
    resetOTPExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
