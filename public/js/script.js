console.log('are we connected?')


const form = document.querySelector('form');
const inputs = document.getElementsByTagName('input');
const textareas = document.getElementsByTagName('textarea');
const errorMsg = document.querySelector('.error');
const submit = document.querySelector('button[type=submit]');
const markup = `    
    <p>Je kan helaas nog niet verder.</p>
    <p>Je bent vergeten om alle velden in te vullen.</p>`

// need to check for support for checkValidility
errorMsg.insertAdjacentHTML('afterbegin', markup)

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
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].classList.remove('invalid')
    }
    for (let i = 0; i < textareas.length; i += 1) {
        textareas[i].classList.remove('invalid')
    }

}

submit.addEventListener('click', () => {
    isValid()
    addInvalidBorder()
})

form.addEventListener('keyup', () => {
    removeErrorMsg()
    removeInvalidBorder()
})

// Lotte  heeft mij geholpen met deze functie : https://github.com/lottekoblens/browser-technologies-2122/blob/main/public/scripts/main.js
function checkInputs() {
    form.addEventListener('submit', (e) => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length == 0) {
                e.preventDefault()
                alert('Nog niet alle velden zijn ingevuld')
            }
        }
        for (let i = 0; i < textareas.length; i++) {
            if (textareas[i].value.length == 0) {
                e.preventDefault()
                alert('Nog niet alle velden zijn ingevuld')
            }
        }
    })
}
checkInputs();