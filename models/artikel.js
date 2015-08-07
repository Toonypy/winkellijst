var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artikelSchema = new Schema({
    naam: {
        type: String,
        required: true
    },
    winkel: {
        type: Schema.ObjectId,
        ref: 'winkel'
    }
});

var Artikel = mongoose.model('Artikel', artikelSchema);

module.exports = Artikel;