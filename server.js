const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const mongoose = require('mongoose')
const { buildSchema } = require('graphql');

const agencyService = require('./src/services/agency');

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/forcli');

let schema = buildSchema(`
    type Query {
        agency(id: String!): Agency
        agencies: [Agency]
    },
    type Mutation {
        createAgency(name: String!): Agency
        createMedia(
            agencyId: String!, 
            title: String!
        ): Media
    },
    type Agency {
        id: String
        name: String
        medias: [Media]
    },
    type Media {
        id: String
        title: String
        description: String
        url: String
        type: String
        slug: String
		comments: [Comment]
		pins: [Pin]
    },
    type Comment {
        comment: String!
        name: String
	},
	type Pin {
		x: Int
		y: Int
        comments: [Comment]
    }
`)

var root = {
    agency: agencyService.getAgency,
    agencies: agencyService.getAgencies,
    createAgency: agencyService.createAgency,

    media: mediaService.getMedia,
    medias: mediaService.getMedias,
    createMedia: mediaService.createMedia,

	// comment: comment.getComment,
    // comments: comment.getComments,
    // createComment: comment.createComment
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})