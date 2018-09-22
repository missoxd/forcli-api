const _ = require('lodash')
const agencyRepository = require('../repositories/agency')

let self = module.exports = {

    getAgency: function (args) {
        return self.transform(agencyRepository.getById(args.id))
    },

    getAgencies: async function () {
        return _.map(await agencyRepository.getAll(), function (agency) {
            return self.transform(agency)
        })
    },

    createAgency: function (args) {
        let agency = agencyRepository.create(args)
        return self.transform(agency)
    },

    transform: function (agency) {
        agency.id = agency._id.toString()
        return agency
    }
}