var Flight = require('../models/flight');

module.exports = {
  index,
  create,
  new: newFlight
};

function newFlight(req, res) {
  res.render('flights/new');
};

function create(req, res) {
	//if (req.body.departs === '') delete req.body.departs;
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if(err) return res.render('flights/new');
            //remove later in development
            console.log(flight);
            //redirect to new.ejs
  res.redirect('flights');
  });
};

function index(req, res) {
	Flight.find({}, function(err, flights) {
		res.render('flights/index', { flights });
	});
};