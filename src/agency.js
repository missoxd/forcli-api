const mongoose = require("mongoose")
const Media = require("./media")

const Agency = mongoose.model("Agency", {
    id: Number,
    name: String,
    medias : [Media.schema]
})

const agencies = {

    model: Agency,

    createAgency: async (agency) => {
        return await new Agency(agency).save()
    },

    getAgency: ({ id }) => {
        return Agency.findOne({ id }, (err, data) => data)
    },
    
    getAgencies: (args) => {
        return Agency.find()
    },
    
    addMediaToAgency: (agencyId, mediaId) => {
        let agency = getAgency(agencyId)
        agency.medias.push(mediaId)
        agency.save()
    }
}

module.exports = agencies;