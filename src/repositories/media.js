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
    },

    save : function (model) {
        return model.save();
    },

    getByIds: function (ageciesIds) {
        return model.where("_id").in(ageciesIds).exec()    
    }

}