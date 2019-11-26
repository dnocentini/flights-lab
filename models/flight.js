const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SEA'
  },
  arrival: {
    type: Date
  }
}, { timestamps: true });

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: true,
    max: 9999,
    min: 10,
  },
  departs: {
    type: Date
  },
  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  destinations: [destinationSchema]
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);