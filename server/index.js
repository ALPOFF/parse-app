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
        let advType = req.body.advType;
        let advCat = req.body.advCat;
        let checkBorder = req.body.checkBorder;
        let advText = req.body.advText;
        let phone = req.body.phone;

        const adv = [{
                "НЕДВИЖИМОСТЬ": ["ПРОДАЮ", "КУПЛЮ", "СДАЮ", "МЕНЯЮ"]
            }, {
                "АВТОРЫНОК": ["Продаю", "АВТОЗАПЧАСТИ", "КУПЛЮ"]
            }, {
                "ВСЯКАЯ ВСЯЧИНА": ["ПРОДАЮ", "КУПЛЮ"]
            }, "УСЛУГИ", {
                "РАБОТА": ["Требуются", "Ищу работу"]
            }, "ЖИВОТНЫЕ",
            "РАЗНОЕ", "ПРИМУ В ДАР"
        ]

        let templateBorderTrue = `<pstyle:В рамке>`;
        let advFinalText = `${advText} + ' Т. ' + ${phone}`;

        let advFinal = checkBorder ? `${templateBorderTrue} + ${advFinalText}` : advFinalText

        console.log('phone:', phone);
        console.log('checkBorder:', checkBorder);
        console.log('advType:', advType);
        console.log('advCat:', advCat);
        console.log('advText:', advText);
        // fs.writeFile("./uploads/hello.txt", `<style>${phone}</style>`, function(error) {

        //     if (error) throw error; // если возникла ошибка
        //     let data = fs.readFile("./uploads/hello.txt", "utf8");
        //     console.log(data); // выводим считанные данные
        // });
        fs.readFile("./uploads/edit.txt", "utf8", (error, data) => {
            if (error) throw error; // если возникла ошибка
            console.log(data.indexOf('<pstyle:Подзаголовок 2>КУПЛЮ'))
        });
        //res.send('ok')
    })
app.listen(4000)