const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql');
const agency = require('./src/agency');
const comment = require('./src/comment');
const mongoose = require('mongoose');

const app = express()
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/forcli');


var schema = buildSchema(`
    type Query {
        agency(id: Int!): Agency
        agencies: [Agency]
    },
    type Mutation {
        createAgency(id: Int!, name: String!): Agency
        createMedia(
            agencyId: Int!, 
            title: String!
        )
    },
    type Agency {
        id: Int
        name: String
        medias: [Media]
    },
    type Media {
        id: Int
        title: String
        description: String
        url: String
        type: String
        slug: String
		comments: [Comment],
		pins: [Pin],
    },
    type Comment {
		mediaId: Int
		pinId: Int
        comment: String!
        name: String
	}
	type Pin {
        id: Int
		x: Int,
		y: Int,
        comments: [Comment]
    }
`);

var root = {
    agency: agency.getAgency,
    agencies: agency.getAgencies,
	comment: comment.getComment,
    comments: comment.getComments,
    createComment: comment.createComment,
    createAgency: agency.createAgency
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})