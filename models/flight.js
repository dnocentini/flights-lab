const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
      type: Number,
      required: true,
      max: 9999,
      min: 10,
    },
    departs: {
      type: Date,
      default:  Date.now() + (366*24*60*60*1000)
    }
});      

module.exports = mongoose.model('Flight', flightSchema);