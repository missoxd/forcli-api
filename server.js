var express = require('express');
var bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})