const mongoose = require('mongoose')

module.exports = mongoose.model('Media', {
    title: String,
    description: String,
    url: String,
    type: { type: String },
    slug: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})
