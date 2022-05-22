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

let stringData;
const dataFromEnqete = (req) => {
    return {
        "docent1": req.body.docent1,
        "docent2": req.body.docent2,
        "startPeriode": req.body.startPeriode,
        "eindPeriode": req.body.eindPeriode,
        "beoordeling": req.body.beoordeling,
        "moeilijkheid": req.body.moeilijkheid,
        "moeilijkheidToelichting": req.body.moeilijkheidToelichting,
        "uitleg": req.body.uitleg,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": req.body.inzicht,
        "inzichtToelichting": req.body.inzichtToelichting
    }
}




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
    fs.readFile('public/json/wafs.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/wafs', { wafs: surveyData })
    })
}

function renderCSS(req, res) {
    fs.readFile('public/json/css.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/css', { css: surveyData })
    })
}
function renderPWA(req, res) {
    fs.readFile('public/json/pwa.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/pwa', { pwa: surveyData })
    })
}
function renderBT(req, res) {
    fs.readFile('public/json/bt.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/bt', { bt: surveyData })
    })
}

function renderRTW(req, res) {
    fs.readFile('public/json/rtw.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/rtw', { rtw: surveyData })
    })
}

function renderHCD(req, res) {
    fs.readFile('public/json/hcd.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/hcd', { hcd: surveyData })
    })
}


function postWafs(req, res) {
    const student = {
        "name": req.body.name,
        "studentId": req.body.studentId
    }
    stringData = JSON.stringify(student);
    console.log(stringData)

    fs.writeFile('public/json/student.json', stringData, (err, data) => {
        if (data) {
            string = JSON.parse(data)
        }
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/wafs.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/wafs', { wafs: surveyData })
    })
};

function postCSS(req, res) {
    const wafs = dataFromEnqete(req);
    stringData = JSON.stringify(wafs)

    fs.writeFile('public/json/wafs.json', stringData, (err, data) => {
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/css.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/css', { css: surveyData })
    })
}


function postPWA(req, res) {
    const css = dataFromEnqete(req);
    stringData = JSON.stringify(css)
    console.log(stringData)

    fs.writeFile('public/json/css.json', stringData, (err, data) => {
        if (data) {
            string = JSON.parse(data)
        }
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/pwa.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/pwa', { pwa: surveyData })
    })
}


function postBT(req, res) {
    const pwa = dataFromEnqete(req);
    stringData = JSON.stringify(pwa)

    fs.writeFile('public/json/pwa.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/bt.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/bt', { bt: surveyData })
    })
}


function postRTW(req, res) {
    const bt = dataFromEnqete(req);
    stringData = JSON.stringify(bt)

    fs.writeFile('public/json/bt.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/rtw.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/rtw', { rtw: surveyData })
    })
}

function postHCD(req, res) {
    const rtw = dataFromEnqete(req);
    stringData = JSON.stringify(rtw)

    fs.writeFile('public/json/rtw.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    fs.readFile('public/json/hcd.json', 'utf8', function (err, data) {
        if (err) throw err;
        let surveyData;
        if (data) {
            surveyData = JSON.parse(data)
        }
        res.render('pages/hcd', { hcd: surveyData })
    })
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