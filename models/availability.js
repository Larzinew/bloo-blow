const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const availabilitySchema = new Schema({
    date: {
      type: Date,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  });
  module.exports = mongoose.model('Availability',availabilitySchema)