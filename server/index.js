const express = require('express')
const app = express()
let bodyParser = require('body-parser')
const fs = require("fs");
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
        fs.writeFile("./uploads/hello.txt", `<style>${formData}</style>`, function(error) {

            if (error) throw error; // если возникла ошибка
            console.log("Асинхронная запись файла завершена. Содержимое файла:");
            let data = fs.readFileSync("./uploads/hello.txt", "utf8");
            console.log(data); // выводим считанные данные
        });
        //res.send('ok')
    })
app.listen(4000)