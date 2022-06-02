console.log('are we connected?')


var form = document.querySelector('form');
var inputs = document.getElementsByTagName('input');
var textareas = document.getElementsByTagName('textarea');
var errorMsg = document.querySelector('.error');
var submit = document.querySelector('button[type=submit]');
var markup = `    
    <p>Je kan helaas nog niet verder.</p>
    <p>Je bent vergeten om alle velden in te vullen.</p>`



if (hasFormValidation()) {
    // need to check for support for checkValidility
    errorMsg.insertAdjacentHTML('afterbegin', markup)


    submit.addEventListener('click', function (e) {
        isValid()
        addInvalidBorder()
    })


    form.addEventListener('keyup', () => {
        removeErrorMsg()
        removeInvalidBorder()
    })
}
else {
    checkInputs();
}


function hasFormValidation() {

    return (typeof document.createElement('input').checkValidity == 'function');

};

function addInvalidBorder() {
    // need to check for support for checkValidility
    if (form.checkValidity() === false) {
        // ik gebruik een for loop want deze wordt beter ondersteund dan een .forEach()
        for (let i = 0; i < inputs.length; i += 1) {
            inputs[i].classList.add('invalid')
        }
        for (let i = 0; i < textareas.length; i += 1) {
            textareas[i].classList.add('invalid')
        }
    }
}

function isValid() {
    if (form.checkValidity() === true) {
        form.submit()
    } else {
        // need to check for support for  classList
        errorMsg.classList.add('show')
    }
}

function removeErrorMsg() {
    errorMsg.classList.remove('show')
}
function removeInvalidBorder() {
    for (var i = 0; i < inputs.length; i += 1) {
        inputs[i].classList.remove('invalid')
    }
    for (var i = 0; i < textareas.length; i += 1) {
        textareas[i].classList.remove('invalid')
    }

}

// Lotte  heeft mij geholpen met deze functie : https://github.com/lottekoblens/browser-technologies-2122/blob/main/public/scripts/main.js
function checkInputs() {

    submit.addEventListener('click', function (e) {

        console.log('test')
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                e.preventDefault()
                alert('Nog niet alle velden zijn ingevuld')
            }
        }
        for (var i = 0; i < textareas.length; i++) {
            if (textareas[i].value.length == 0) {
                e.preventDefault()
                alert('Nog niet alle velden zijn ingevuld')
            }
        }

    })
}
