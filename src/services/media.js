const md5 = require('md5')
const agencyRepository = require('../repositories/agency')
const mediaRepository = require('../repositories/media')

module.exports = {

    getMedia: function ({ id }) {
        return mediaRepository.getById(id)
    },

    getMedias: function ({ agencyId }) {
        return agencyRepository.getById(agencyId).then((agency) => {
            return mediaRepository.getByIds(agency.medias)
        })        
    },

    createMedia: function (args) {
        args.slug = md5(args.title + Date.now())
        return mediaRepository.create(args).then((media) => {
            return agencyRepository.getById(args.agencyId).then((agency) => {
                agency.medias.push(media._id)
                agencyRepository.save(agency)
                return media
            })
        })
    }
}