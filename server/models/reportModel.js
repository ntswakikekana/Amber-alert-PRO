import mongoose from 'mongoose';
import User from '../models/userModel.js'

const reportSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  missingAge: { type: Number, required: [true, 'Please provide an age'] },
  description: {
    hairColor: { type: String },
    eyeColor: { type: String },
    height: { type: String },
    weight: { type: String },
    race: { type: String },
    gender: { type: String },
    otherDetails: { type: String }
  },
  circumstances: { type: String },
  missingFrom: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    coordinates: {
      longitude: { type: Number },
      latitude: { type: Number }
    }
  },
  missingDate: { type: Date, required: [true, 'Please provide a missing date'] },

  status: {  // active, inactive
    type: String,
    required: true,
    default: 'active',
    enum: ['active', 'resolved', 'inactive']
  },
  imageUrl: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });


const Report = mongoose.model('Report', reportSchema);

export default Report;
