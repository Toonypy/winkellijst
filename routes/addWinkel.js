/**
 * Created by Toon on 5/08/2015.
 */
var express = require('express');
var router = express.Router();

var Winkel = require('../models/winkel');

/* POST een nieuwe winkel. */
router.post('/', function(req, res) {
    var winkel = new Winkel({
        naam: req.body.winkelNaam
    });

    winkel.save(function (err) {
        if (err) {
            console.log("Error bij opslaan winkel: " + err);
            throw err;
        }
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(winkel));
});

module.exports = router;
