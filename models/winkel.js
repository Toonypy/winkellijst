var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var winkelSchema = new Schema({
    naam: {
        type: String,
        required: true,
        unique: true
    },
    kleur: String
});

var Winkel = mongoose.model('Winkel', winkelSchema);

module.exports = Winkel;