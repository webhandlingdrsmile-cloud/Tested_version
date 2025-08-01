import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    Designation: {
      type: String,
      required: [true, 'Designation is required'],
      trim: true,
    },
    Image: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);
