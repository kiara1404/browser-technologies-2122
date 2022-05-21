console.log('are we connected?')


const form = document.querySelector('form');
const errorMsg = document.querySelector('.error')
const submit = document.querySelector('button[type=submit]')

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


submit.addEventListener('click', () => {
    isValid()
})

form.addEventListener('keyup', () => {
    removeErrorMsg()
})

