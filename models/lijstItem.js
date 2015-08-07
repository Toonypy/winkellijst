var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lijstItemSchema = new Schema({
    artikel: {
        type: Schema.ObjectId,
        ref: 'artikel'
    },
    aantal: Number,
    eenheid: String,
    notitie: String,
    check: Boolean
});

var LijstItem = mongoose.model('LijstItem', lijstItemSchema);

module.exports = LijstItem;
