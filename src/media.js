const md5 = require('md5')
const mongoose = require("mongoose")
const { addMediaToAgency } = require('./agency')
const Comment = require('./comment')


module.exports = {

    model,

    createMedia: async (args) => {
        args.slug = md5(args.url)
        let media = await new model(args).save()
        addMediaToAgency(args.agencyId, media._id)
        return media
    },

    getMedia: ({ id }) => {
        return model.findOne({id}, (err, data) => data);
    },
    
    getMedias: () => {
        return model.find()
    }

}