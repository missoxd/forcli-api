const _ = require('lodash')
const agencyRepository = require('../repositories/agency')

let self = module.exports = {

    getAgency: function ({ id }) {
        return agencyRepository.getById(id).then((data) => {
            return self.transform(data) 
        })
    },

    getAgencies: function () {
        return agencyRepository.getAll().then(function (data) {
            return _.map(data, function (agency) {
                return self.transform(agency)
            })
        })
    },

    createAgency: function (args) {
        return agencyRepository.create(args).then((data) => {
            return self.transform(data)
        })
    },

    transform: function (agency) {
        agency.id = agency._id.toString()
        return agency
    }
}