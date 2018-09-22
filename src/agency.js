const mongoose = require("mongoose")
const Media = require("./media")

const agencies = {}

agencies.model = Agency

agencies.getAgency = async ({ _id }) => {
    return await Agency.findById(_id)
}

agencies.getAgencyForGraph = async function (args) {
    let agency = await this.getAgency(args)
    agency.id = agency._id.toString()
    return agency
}

agencies.createAgency = async (args) => {
    let agency = await new Agency(args).save()
    return await agencies.getAgencyForGraph(agency)
}
    
agencies.getAgencies = (args) => {
    return Agency.find()
}
    
agencies.addMediaToAgency = (agencyId, mediaId) => {
    let agency = agencies.getAgency(agencyId)
    agency.medias.push(mediaId)
    agency.save()
}

module.exports = agencies


/*

Repository:
create
getById
getAll
addMedia

Services:


*/