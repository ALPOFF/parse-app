const express = require('express')
const app = express()
let bodyParser = require('body-parser')

let cors = require('cors')
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}))

app.use(cors()) // Use this after the variable declaration

app.get('/', function(req, res) {
        res.send('Hello World')
    })
    .post('/form', function(req, res) {
    	let formData = req.body.formData;
    	console.log('formData:', formData);
        res.send('ok')
    })
app.listen(4000)