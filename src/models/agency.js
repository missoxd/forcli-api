const mongoose = require('mongoose')
const media = require('./media')

module.exports = mongoose.model('Agency', {
    name: String,
    medias : [media.schema]
})