const mongoose = require('mongoose')
const comment = require('./comment')

module.exports = mongoose.model('Media', {
    title: String,
    description: String,
    url: String,
    type: { type: String },
    slug: String,
    comments: [comment.schema]
})
