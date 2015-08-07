/**
 * Created by Toon on 5/08/2015.
 */
var express = require('express');
var router = express.Router();

var Winkel = require('../models/winkel');

/* GET winkels en return in json. */
router.get('/', function(req, res) {
    Winkel.find({}, function (err, w) {
      if (err) throw err;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(w));
    });
});

module.exports = router;
