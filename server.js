const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql');
const { getAgencies, getAgency } = require('./src/agency');

const app = express()
app.use(bodyParser.json())

var schema = buildSchema(`
    type Query {
        agency(id: Int!): Agency
        agencies: [Agency]
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
    agency: getAgency,
    agencies: getAgencies
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})