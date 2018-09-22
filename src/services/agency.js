const _ = require('lodash')
const agencyRepository = require('../repositories/agency')

let service = {

    getAgency: function (args) {
        return this.transform(agencyRepository.getById(args.id))
    },

    getAgencies: function () {
        let that = this
        console.log(this)
        return _.map(agencyRepository.getAll(), function (agency) {
             that.transform(agency)
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

module.exports = service;