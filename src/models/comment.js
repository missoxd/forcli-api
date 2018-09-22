const mongoose = require('mongoose')

module.exports = mongoose.model('Comment', {
    comment: String,
    name: String
})