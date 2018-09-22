const mongoose = require("mongoose")

const comments = {

    createComment: async function (args) {
        let comment = await new model(args).save()

        return comment;
    },

    getComment: function(args) { 
        var id = args.id;
        return comment.findOne({id}, (err, data) => data);
    },
    
    getComments: function(args) {
        return comment.find();
    },

    model: model,
}

module.exports = comments;