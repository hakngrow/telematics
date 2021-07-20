// models/peformance.js

const { json } = require('body-parser');
const mongoose = require('mongoose')

const PerformanceSchema = new mongoose.Schema({
  driver_id: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  distance: {
    type: mongoose.Decimal128,
    required: true,
    get: getDecimal
  },
  duration: {
    type: Number,
    required: true,
  },
  speeding: {
    type: mongoose.Decimal128,
    required: true,
    get: getDecimal
  },
  distraction: {
    type: mongoose.Decimal128,
    required: true,
    get: getDecimal
  },
  braking: {
    type: mongoose.Decimal128,
    required: true,
    get: getDecimal
  },
  cornering: {
    type: mongoose.Decimal128,
    required: true,
    get: getDecimal
  },
  updated_date: {
    type: Date,
    default: Date.now,
  }
})

PerformanceSchema.set('toObject', { getters: true });
PerformanceSchema.set('toJSON', { getters: true });

function getDecimal(value) {
  if (typeof value !== 'undefined') {
     return parseFloat(value.toString());
  }
  return value;
}

module.exports = Performance = mongoose.model('performance', PerformanceSchema)
