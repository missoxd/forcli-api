const mongoose = require("mongoose");


const Media = mongoose.model("Media", {id: Number});

const Agency = mongoose.model("Agency", {
    id: Number,
    name: String,
    medias : [{
        id: Number,
        title: String,
        description: String,
        url: String,
        type: String,
        slug: String,
        comments: [{
            id: Number,
            comment: String,
            name: String, 
        }]            
    }]
})


const agencies = {

    saveAgency : function (agency) {
        agencyDb = new Agency(agency);
        agencyDb.save().then(() => console.log('MIIIIUUUU'))
    },

    getAgency: function(args) { 
        var id = args.id;
        return Agency.find().filter(course => {
            return course.id == id;
        })[0];
    },
    
    getAgencies: function(args) {
        return Agency.find();
    }
}

const teste =  {
    id: 1,
    name: 'Arpina ' + new Date(),
    medias : [{
        id: 2              
    }]
}
agencies.saveAgency(teste);

module.exports = agencies;