const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const appointmentSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    enum: ['Wash and Style','Updo','Braiding','Curling','Straightening',
    'Deep Conditioning', 'Scalp Treatment','Hair Cut', 'Hair Coloring', 'Extensions','Makeup Application'], 
    required: true,
  },
});
module.exports = mongoose.model('Appointment',appointmentSchema)