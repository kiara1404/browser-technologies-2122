const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 1000;

// set templating engine
app.set('view engine', 'ejs');

//where the templates are stored
app.set('views', './views');

// public folder location
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//routing
app.get('/', index)
app.get('/complete', renderCompletePage)
app.post('/complete', postCompletePage)
app.get('/end', renderEndPage)
app.post('/end', postEndPage)

function index(req, res) {
    res.render('index')
}
function renderCompletePage(req, res) {
    res.render('complete')
}
function postCompletePage(req, res) {
    res.render('complete')
}

function renderEndPage(req, res) {
    res.render('end')
}
function postEndPage(req, res) {
    res.render('end')
}
function server() {
    console.log('The server is running succesfully! 🎉');
}

// port of server
app.listen(port, server);