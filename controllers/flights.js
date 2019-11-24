var Flight = require('../models/flight');

module.exports = {
  index,
  create,
  new: newFlight,
  show
};

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log('FLIGHT: ', flight);
    res.render('flights/show', { title: ` Flight # ${flight._id}`, flight });
  });
};

function newFlight(req, res) {
  res.render('flights/new', { title: 'New Flight' });
};

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render('flights/new', { title: 'New Flight' });
    console.log(flight);
    res.redirect('flights');
  });
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights', { title: 'All Flights', flights });
  });
};