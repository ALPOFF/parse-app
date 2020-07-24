const express = require('express')
const app = express()
const docx = require('docx')
let bodyParser = require('body-parser')
const fs = require("fs");
let cors = require('cors')
const officegen = require('officegen')
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}))

app.use(cors()) // Use this after the variable declaration

app.get('/', function(req, res) {
        res.send('Hello World')
    })
    .post('/form', function(req, res) {
        let docx = officegen('docx')

        // Create a new paragraph:



        let pObj = docx.createP()
        fs.readFile("./uploads/edit.txt", "utf8", (error, data) => {
            let ddd = data

            console.log(ddd[0])

            pObj.addText(ddd[0], {
                font_face: 'Arial',
                font_size: 12
            })
        })




        // We can even add images:

        // Let's generate the Word document into a file:

        let out = fs.createWriteStream('example.docx')

        out.on('error', function(err) {
            console.log(err)
        })

        // Async call to generate the output file:
        docx.generate(out)


        // fs.readFile("./uploads/edit.txt", "utf8", (error, data) => {

        //     console.log('12211221:', data.split("\n")[1])


        //     const doc = new docx.Document();
        //     doc.addSection({
        //         children: [
        //             data.split("\n").forEach(i => {
        //             	console.log(i)
        //                 new docx.Paragraph({


        //                     children: [new docx.TextRun({
        //                         text: i,
        //                         bold: false,
        //                         font: {
        //                             name: "Arial"
        //                         },
        //                         size: 24
        //                     })],
        //                 })
        //             })
        //         ],
        //     });

        //     docx.Packer.toBuffer(doc).then(buffer => {
        //         fs.writeFileSync("My Document.docx", buffer);

        //         console.log("Document created successfully");
        //     });

        // })



    })

// let advType = req.body.advType;
// let advCat = req.body.advCat;
// let checkBorder = req.body.checkBorder;
// let advText = req.body.advText;
// let phone = req.body.phone;

// const adv = [{
//     id: 0,
//     data: "НЕДВИЖИМОСТЬ",
//     optData: [{
//         id: 0,
//         txt: "ПРОДАЮ"
//     }, {
//         id: 1,
//         txt: "КУПЛЮ"
//     }, {
//         id: 2,
//         txt: "СДАЮ"
//     }, {
//         id: 3,
//         txt: "МЕНЯЮ"
//     }]
// }, {
//     id: 1,
//     data: "АВТОРЫНОК",
//     optData: [{
//         id: 0,
//         txt: "Продаю"
//     }, {
//         id: 1,
//         txt: "АВТОЗАПЧАСТИ"
//     }, {
//         id: 2,
//         txt: "КУПЛЮ"
//     }]
// }, {
//     id: 2,
//     data: "ВСЯКАЯ ВСЯЧИНА",
//     optData: [{
//         id: 0,
//         txt: "ПРОДАЮ"
//     }, {
//         id: 1,
//         txt: "КУПЛЮ"
//     }]
// }, {
//     id: 3,
//     data: "УСЛУГИ"
// }, {
//     id: 4,
//     data: "РАБОТА",
//     optData: [{
//         id: 0,
//         txt: "Требуются"
//     }, {
//         id: 1,
//         txt: "Ищу работу"
//     }]
// }, {
//     id: 5,
//     data: "ЖИВОТНЫЕ"
// }, {
//     id: 6,
//     data: "РАЗНОЕ"
// }, {
//     id: 7,
//     data: "ПРИМУ В ДАР"
// }];

// let templateBorderTrue = `<pstyle:В рамке>`;
// let advFinalText = `${advText} Тел.: ${phone}`;
// let advFinal = checkBorder ? `${templateBorderTrue}${advFinalText}` : advFinalText

// console.log('phone:', phone);
// console.log('checkBorder:', checkBorder);
// console.log('advType:', advType);
// console.log('advCat:', advCat);
// console.log('advText:', advText);


// fs.readFile("./uploads/edit.txt", "utf8", (error, data) => {
//     let subtitle1 = `<pstyle:Подзаголовок 1>${adv[advType].data}`; //подзаголовок 1
//     let startPart = data.substring(0, data.indexOf(subtitle1) + subtitle1.length);

//     if (adv[Number(advType) + 1] == undefined) {
//         if (advCat != undefined) {
//             if (adv[advType].optData[Number(advCat) + 1] == undefined) {
//                 let result = data + advFinal;
//                 fs.writeFile("./uploads/edit.txt", result, (error) => {
//                     if (error) throw error; // если возникла ошибка
//                 });
//             } else {
//                 let subtitle2 = `<pstyle:Подзаголовок 2>${adv[advType].optData[advCat].txt}`; //подзаголовок 2
//                 let subtitle2next = `<pstyle:Подзаголовок 2>${adv[advType].optData[Number(advCat)+1].txt}`; //подзаголовок 2 next
//                 let middlePart = data.substring(data.indexOf(subtitle1) + subtitle1.length);
//                 let startPartIn = middlePart.substring(0, middlePart.indexOf(subtitle2next))
//                 let lastPartIn = middlePart.substring(middlePart.indexOf(subtitle2next))
//                 let newMiddlePartIn = startPartIn + advFinal + '\n' + lastPartIn;
//                 let result = startPart + newMiddlePartIn

//                 fs.writeFile("./uploads/edit.txt", result, (error) => {
//                     if (error) throw error; // если возникла ошибка
//                 });
//             }

//         } else if (advCat === undefined) {
//             let result = data + advFinal;
//             fs.writeFile("./uploads/edit.txt", result, (error) => {
//                 if (error) throw error; // если возникла ошибка
//             });
//         } else {
//             console.log('some error')
//         }
//     } else {

//         let subtitle1next = `<pstyle:Подзаголовок 1>${adv[Number(advType)+1].data}`; //подзаголовок 1 next
//         let lastPart = data.substring(data.indexOf(subtitle1next));
//         let middlePart = data.substring(data.indexOf(subtitle1) + subtitle1.length, data.indexOf(subtitle1next));
//         if (advCat != undefined) {
//             if (adv[advType].optData[Number(advCat) + 1] == undefined) {
//                 let newMiddlePart = middlePart + advFinal;
//                 let result = startPart + newMiddlePart + '\n' + lastPart;
//                 fs.writeFile("./uploads/edit.txt", result, (error) => {
//                     if (error) throw error; // если возникла ошибка
//                 });
//             } else {
//                 let subtitle2 = `<pstyle:Подзаголовок 2>${adv[advType].optData[advCat].txt}`; //подзаголовок 2
//                 let subtitle2next = `<pstyle:Подзаголовок 2>${adv[advType].optData[Number(advCat)+1].txt}`; //подзаголовок 2 next
//                 let startPartIn = middlePart.substring(0, middlePart.indexOf(subtitle2) + subtitle2.length);
//                 let lastPartIn = middlePart.substring(middlePart.indexOf(subtitle2next));
//                 let middlePartIn = middlePart.substring(middlePart.indexOf(subtitle2) + subtitle2.length, middlePart.indexOf(subtitle2next));
//                 let newMiddlePartIn = middlePartIn + advFinal;
//                 let resultIn = startPartIn + newMiddlePartIn + '\n' + lastPartIn;
//                 let result = startPart + resultIn + lastPart;

//                 fs.writeFile("./uploads/edit.txt", result, (error) => {
//                     if (error) throw error; // если возникла ошибка
//                 });
//             }

//         } else if (advCat === undefined) {
//             let newMiddlePart = middlePart + advFinal;
//             let result = startPart + newMiddlePart + '\n' + lastPart;
//             fs.writeFile("./uploads/edit.txt", result, (error) => {
//                 if (error) throw error; // если возникла ошибка
//             });
//         } else {
//             console.log('some error')
//         }
//     }
// });
// //res.send('ok')
// })
app.listen(4000)