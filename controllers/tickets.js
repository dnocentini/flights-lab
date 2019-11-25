var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function create(req, res) {
    let newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    }
    Ticket.create(newTicket, function (err, ticket) {
        if (err) res.send(err)
        console.log(ticket)
        res.redirect(`/flights/${req.params.id}`);
    })
}

function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id, title: 'New Ticket'});
};

