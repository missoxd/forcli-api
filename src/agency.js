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
    }
}

const teste =  {
    id: 1,
    name: 'Arpina ' + new Date(),
    medias : [
        {
            id: 2,
            comments: [
                {
                    id: 1,
                }
            ]  
        }
    ]
}
agencies.saveAgency(teste);

module.exports = agencies;