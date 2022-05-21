console.log('are we connected?')


const form = document.querySelector('form');
const inputs = document.getElementsByTagName('input');
const textareas = document.getElementsByTagName('textarea');
const errorMsg = document.querySelector('.error');
const submit = document.querySelector('button[type=submit]');


function addInvalidBorder() {
    if (form.checkValidity() === false) {
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

