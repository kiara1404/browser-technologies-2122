const express = require('express');
const app = express();
const fs = require('fs')
require('dotenv').config();
const port = process.env.PORT || 1000;

// set templating engine
app.set('view engine', 'ejs');

//where the templates are stored
app.set('views', './views');

// public folder location
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing
app.get('/', index)
app.get('/wafs', renderWafs)
app.get('/css', renderCSS)
app.get('/pwa', renderPWA)
app.get('/bt', renderBT)
app.get('/rtw', renderRTW)
app.get('/hcd', renderHCD)
app.get('/end', renderEndPage)


// POST
app.post('/end', postEndPage)
app.post('/wafs', postWafs)
app.post('/css', postCSS)
app.post('/pwa', postPWA)
app.post('/bt', postBT)
app.post('/rtw', postRTW)
app.post('/hcd', postHCD)



const dataFromEnqete = (req) => {
    return {
        "docent1": req.body.docent1,
        "docent2": req.body.docent2,
        "startPeriode": req.body['start-periode'],
        "eindPeriode": req.body['eind-periode'],
        "beoordeling": req.body.beoordeling,
        "moeilijkheid": req.body.moeilijkheid,
        "moeilijkheidToelichting": req.body['moeilijkheid-toelichting'],
        "uitleg": req.body.uitleg,
        "uitlegToelichting": req.body['uitleg-toelichting'],
        "inzicht": req.body.inzicht,
        "inzichtToelichting": req.body['inzicht-toelichting']
    }
}

let stringData;


function index(req, res) {
    fs.readFile('public/json/student.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/index', { student: surveyData })
    })
}

function renderWafs(req, res) {
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

    const student = {
        "name": req.body.name,
        "studentId": req.body.studentId
    }
    stringData = JSON.stringify(student);
    console.log(stringData)

    fs.writeFile('public/json/student.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/wafs')
};

function postCSS(req, res) {
    const wafs = dataFromEnqete(req);
    stringData = JSON.stringify(wafs)

    fs.writeFile('public/json/wafs.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/css')
}


function postPWA(req, res) {
    const css = dataFromEnqete(req);
    stringData = JSON.stringify(css)

    fs.writeFile('public/json/css.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/pwa')
}


function postBT(req, res) {
    const pwa = dataFromEnqete(req);
    stringData = JSON.stringify(pwa)

    fs.writeFile('public/json/pwa.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/bt')
}


function postRTW(req, res) {
    const bt = dataFromEnqete(req);
    stringData = JSON.stringify(bt)

    fs.writeFile('public/json/bt.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/rtw')
}

function postHCD(req, res) {
    const rtw = dataFromEnqete(req);
    stringData = JSON.stringify(rtw)

    fs.writeFile('public/json/rtw.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('pages/hcd')
}


function renderEndPage(req, res) {
    res.render('end')
}
function postEndPage(req, res) {
    const hcd = dataFromEnqete(req);
    stringData = JSON.stringify(hcd)

    fs.writeFile('public/json/hcd.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('end')
}


function server() {
    console.log('The server is running succesfully! 🎉');
}

// port of server
app.listen(port, server);