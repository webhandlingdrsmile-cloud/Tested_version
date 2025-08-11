import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now } 
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
