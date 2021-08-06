const server = require('http');
const express = require('express')
const app = express();
const cors = require('cors');
const { words } = require("./Rijeci");
const { middle } = require('./First/FirstMiddle')
app.use(cors({
    origin: '*'
}));




app.get('/rijec', (req, res) => {
    const length = words.length - 1;
    console.log("poziva")
    const randomIndex = Math.floor(Math.random() * length);
    res.send({ success: true, rijec: words[randomIndex] });
});


app.listen(5000, () => {

    console.log("slusam na 5000");

})


/*
 npm init
 npm express
 npm nodemon
 npm cors
 */