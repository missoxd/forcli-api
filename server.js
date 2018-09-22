const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql');

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

var data = [
    {
        id: 1,
        name: 'Arpina',
        medias: [
            {
                id: 1,
                title: 'teste1',
                description: 'teste2'
            }
        ]
    }
]

var getAgency = function(args) { 
    var id = args.id;
    return data.filter(course => {
        return course.id == id;
    })[0];
}

var getAgencies = function(args) {
    return data;
}

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