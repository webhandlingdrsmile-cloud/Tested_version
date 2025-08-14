import mongoose from 'mongoose';

const SubServiceSchema = new mongoose.Schema({
  SubName: { type: String, required: true },
  SubDescription: { type: String, required: true },
  SubImage: { type: String, required: true }
});

const ServiceSchema = new mongoose.Schema({
  Service: { type: String, required: true },
  Description: { type: String, required: true },
  Image: { type: String, required: true },
  SubServices: [SubServiceSchema], 
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
