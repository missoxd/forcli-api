const mongoose = require("mongoose")
const { addMediaToAgency } = require('./agency')
const { schema: commentSchema } = require('./comment')

const model = mongoose.model("Media", {
    title: String,
    description: String,
    url: String,
    type: { type: String },
    slug: String,
    comments: [commentSchema]
})

module.exports = {

    model,

    createMedia: async function (args) {
        let media = await new model(args).save()
        addMediaToAgency(args.agencyId, media._id)
        return media
    },

    getMedia: ({ id }) => {
        return Media.findOne({id}, (err, data) => data);
    },
    
    getMedias: () => {
        return Media.find()
    }

}