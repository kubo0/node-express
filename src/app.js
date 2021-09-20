const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona działa!")
    res.render('index', {
        pageTitle: 'Strona główna'
    });
});

app.get('/omnie', (req, res) => {
    //res.send("Strona działa!")
    res.render('omnie', {
        pageTitle: 'O mnie'
    });
});

app.get('/kontakt', (req, res) => {
    //res.send("Strona działa!")
    res.render('kontakt', {
        pageTitle: 'Kontakt'
    });
});

app.listen(5100, () => {
    console.log("Serwer działa! POG");
});