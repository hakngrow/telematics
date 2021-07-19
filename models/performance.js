// models/peformance.js

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
  },
  duration: {
    type: mongoose.Decimal128,
    required: true,
  },
  speeding: {
    type: mongoose.Decimal128,
    required: true,
  },
  distraction: {
    type: mongoose.Decimal128,
    required: true,
  },
  braking: {
    type: mongoose.Decimal128,
    required: true,
  },
  cornering: {
    type: mongoose.Decimal128,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Performance = mongoose.model('performance', PerformanceSchema)
