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
  time: {
    type: String,
    enum: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
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