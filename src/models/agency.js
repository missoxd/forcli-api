const mongoose = require('mongoose')

module.exports = mongoose.model('Agency', {
    name: String,
    medias : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }]
})