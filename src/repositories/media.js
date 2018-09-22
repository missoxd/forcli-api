var model = require('../models/media');

module.exports = {

    create : function (args) {
        return new model(args).save();
    },

    getById: function (id) {
        return model.findById(id).exec()
    },

    getAll : function () {
        return model.find().exec()
    }

}