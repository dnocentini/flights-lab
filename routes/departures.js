var express = require('express');
var router = express.Router();
var departuresCtrl = require('../controllers/departures');

router.post('/flights/:id', departuresCtrl.create);


module.exports = router;