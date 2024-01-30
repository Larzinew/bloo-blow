const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const appointmentSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  serviceType: {
    type: String,
    enum: ['Wash and Style','Updo','Braiding','Curling','Straightening',
    'Deep Conditioning', 'Scalp Treatment','Hair Cut', 'Hair Coloring', 'Extensions','Makeup Application'], 
  },
  duration: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  // Add more fields as needed for your specific requirements
  // For example: location, duration, stylist, etc.
});
module.exports = mongoose.model('Appointment',appointmentSchema)