var Flight = require('../models/flight');

module.exports = {
  index
};

function index(req, res) {
  Flight.find({}).sort('departs').exec(function (err, flights) {
    console.log(new Date());
    res.render('flights/index', {
      flights,
      currentDate: new Date()
    });
  });
};