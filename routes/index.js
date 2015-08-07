var express = require('express');
var router = express.Router();

var LijstItem = require('../models/lijstItem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Winkellijst'});
});

module.exports = router;