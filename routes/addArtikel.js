/**
 * Created by Toon on 5/08/2015.
 */
var express = require('express');
var router = express.Router();

var Artikel = require('../models/artikel');

/* POST een nieuw artikel. */
router.post('/', function(req, res) {
    var artikel = new Artikel({
        naam: req.body.artikelNaam,
        winkel: req.body.artikelWinkel
    });

    artikel.save(function (err) {
        if (err) {
            console.log("Error bij opslaan artikel: " + err);
            throw err;
        }
    });

    console.log(artikel + " toegevoegd");

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(artikel));
});

module.exports = router;
