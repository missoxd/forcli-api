const express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql');

const app = express()
app.use(bodyParser.json())

var root = {
    message: () => 'Hello World!'
}

var schema = buildSchema(`
    type Query {
        message: String
    }
`)

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})