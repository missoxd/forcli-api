const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql');
const agency = require('./src/agency');
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
    },
    type Agency {
        id: Int
        name: String,
        medias: [Media]
    },
    type Media {
        id: Int
        title: String
        description: String
        url: String
        type: String
        slug: String
        comments: [Comment]
    },
    type Comment {
        id: Int
        comment: String
        name: String
    }
`);

var root = {
    agency: agency.getAgency,
    agencies: agency.getAgencies,
    createAgency: agency.saveAgency
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})