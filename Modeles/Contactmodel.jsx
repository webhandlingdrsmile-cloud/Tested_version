import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    Name: { type: String },
    Email: { type: String },
    Needs: { type: String },
    Phone: { type: Number },
    Message: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: false } 
  }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
