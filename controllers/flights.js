var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
  index,
  create,
  new: newFlight,
  show
};

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render('flights/show', { title: 'Flight Details', flight, tickets });
    });
  });
};

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
};

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var flight = new Flight(req.body);

  flight.save(function (err) {
    if (err) {
      console.log(err);
      return res.render('flights/new', { title: 'Add Flight' });
    }
    
    res.redirect('flights');
  });
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights', { title: 'All Flights', flights });
  });
};