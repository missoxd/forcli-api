var model = require('../models/agency');

module.exports = {

    create : function (args) {
        return new model(args).save();
    },

    getById: function (id) {
        return model.findById(id).exec()
    },

    getAll : function () {
        return model.find().exec()
    },

    save : function (model) {
        return model.save();
    }

}