const _ = require('lodash')
const agencyRepository = require('../repositories/agency')
const mediaRepository = require('../repositories/media')

let self = module.exports = {

    getMedia: function ({ id }) {
        return mediaRepository.getById(id).then((data) => {
            return self.transform(data)
        })
    },

    getMedias: function ({ agencyId }) {
        return agencyRepository.getById(agencyId).then((agency) => {
            console.log(agency)
            return mediaRepository.getByIds(agency.medias).then(function (data) {
                return _.map(data, function (media) {
                    return self.transform(media)
                })
            })
        })        
    },

    createMedia: function (args) {
        return mediaRepository.create(args).then((media) => {
            return agencyRepository.getById(args.agencyId).then((agency) => {
                agency.medias.push(media._id)
                agencyRepository.save(agency)
                return self.transform(media)
            })
        })
    },

    transform: function (media) {
        media.id = media._id.toString()
        return media
    }
}