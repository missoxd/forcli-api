const mongoose = require("mongoose");

const schema = {
    id: Number,
    title: String,
    description: String,
    url: String,
    type: { type: String },
    slug: String,
    comments: [{
        id: Number,
        comment: String,
        name: String, 
    }]            

}

module.exports = mongoose.model("Media", schema)