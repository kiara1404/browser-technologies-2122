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
app.get('/wafs', renderWafs)
app.get('/css', renderCSS)
app.get('/pwa', renderPWA)
app.get('/bt', renderBT)
app.get('/rtw', renderRTW)
app.get('/hcd', renderHCD)
app.get('/complete', renderCompletePage)
app.get('/end', renderEndPage)

app.post('/complete', postCompletePage)
app.post('/end', postEndPage)
app.post('/wafs', postWafs)
app.post('/css', postCSS)
app.post('/pwa', postPWA)
app.post('/bt', postBT)
app.post('/rtw', postRTW)
app.post('/hcd', postHCD)

function index(req, res) {
    res.render('pages/index')
}
function renderWafs(req, res){
    res.render('pages/wafs')
}
function renderCSS(req, res) {
    res.render('pages/css')
}
function renderPWA(req, res) {
    res.render('pages/pwa')
}
function renderBT(req, res) {
    res.render('pages/bt')
}
function renderRTW(req, res) {
    res.render('pages/rtw')
}
function renderHCD(req, res) {
    res.render('pages/hcd')
}

function postWafs(req, res) {
    res.render('pages/wafs')
}
function postCSS(req, res) {
    res.render('pages/css')
}
function postPWA(req, res) {
    res.render('pages/pwa')
}
function postBT(req, res) {
    res.render('pages/bt')
}
function postRTW(req, res) {
    res.render('pages/rtw')
}
function postHCD(req, res) {
    res.render('pages/hcd')
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