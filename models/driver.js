// models/driver.js

const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
  driver_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  vehicle_no: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  phone_model: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Player = mongoose.model('driver', DriverSchema)
