const mongoose = require("mongoose");
const Media = require("./media");

const Agency = mongoose.model("Agency", {
    id: Number,
    name: String,
    medias : [Media.schema]
})

const agencies = {

    saveAgency: async function (agency) {
        agencyDb = new Agency(agency)
        await agencyDb.save()
        return agencyDb
    },

    getAgency: function(args) { 
        var id = args.id;
        return Agency.findOne({id}, (err, data) => data);
    },
    
    getAgencies: function(args) {
        return Agency.find();
    },

    model: Agency,
}

module.exports = agencies;