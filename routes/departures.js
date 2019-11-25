var express = require('express');
var router = express.Router();
var departuresCtrl = require('../controllers/departures');

router.post('/flights/:id/departures', departuresCtrl.create);


module.exports = router;