const mongoose = require('mongoose');

const SpotsSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [Strings],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Spots', SpotsSchema)