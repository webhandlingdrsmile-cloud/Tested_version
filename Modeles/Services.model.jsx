
import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
Service:{type:String},
Description:{type:String},
Image:{type:String},

});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
