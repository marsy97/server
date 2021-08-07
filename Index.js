const server = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { words } = require("./Rijeci");
const { middle } = require('./First/FirstMiddle')
const { NewWords } = require('./BodyParser/NewWords')
const { HardWords } = require('./HardWords/HardWords')
let mapaRijeci = new Map()
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(function (req, res, next) {

    next()
})




app.get('/rijec', (req, res) => {
    const length = words.length - 1;
    console.log("poziva")
    const randomIndex = Math.floor(Math.random() * length);
    res.send({ success: true, rijec: words[randomIndex] });
});

app.get('/hardWords/:word', (req, res, next) => {
    HardWords(req, res, next, mapaRijeci);
})


app.post('/initializeData', (req, res, next) => {

    NewWords(req, res, next, mapaRijeci);
 res.send("success")

})




app.listen(5000, () => {

    console.log("slusam na 5000");

})


/*
 npm init
 npm express
 npm nodemon
 npm cors
 */