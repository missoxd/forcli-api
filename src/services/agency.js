const agencyRepository = require('../repositories/agency')

module.exports = {

    getAgency: function (args) {
        return this.transform(agencyRepository.getById(args.id))
    },

    getAgencies: function () {
        return agencyRepository.getAll().map((agency) => {
            this.transform(agency)
        })
    },

    createAgency: function (args) {
        let agency = agencyRepository.create(args)
        return this.transform(agency)
    },

    transform: function (agency) {
        agency.id = agency._id.toString()
        return agency
    }

}