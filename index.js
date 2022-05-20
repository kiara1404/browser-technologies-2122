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

function index(req, res) {
    res.render('index')
}

function server() {
    console.log('The server is running succesfully! 🎉');
}

// port of server
app.listen(port, server);