const {model, Schema} = require('mongoose');

const bershka = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

module.exports = model('bershka', bershka);