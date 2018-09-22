var express = require('express');
var bodyParser = require('body-parser');

const app = express()

var schema = buildSchema(`
    type Query {
        agency(id: Int!): Agency
        agencies: [Agency]
    },
    type Mutation {
        createAgency(name: String!): Agency
        createMedia(
            agencyId: Int!, 
            title: String!
        ): Media
    },
    type Agency {
        id: String
        name: String
        medias: [Media]
    },
    type Media {
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
`);

var root = {
    agency: agency.getAgencyForGraph,
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