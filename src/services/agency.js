const agencyRepository = require('../repositories/agency')

let self = module.exports = {

    getAgency: function ({ id }) {
        return agencyRepository.getById(id)
    },

    getAgencies: function () {
        return agencyRepository.getAll()
    },

    createAgency: function (args) {
        return agencyRepository.create(args)
    }
}