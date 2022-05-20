console.log('are we connected?')

var fieldset;
var studentIdField = document.getElementById('studentId')
var isValid;
var submitBtn = document.querySelector('.submit')
var textArea;


studentIdField.addEventListener('keyup', function (e) {
    e.preventDefault()
    isValid = studentIdField.checkValidity()
    //  console.log(isValid)
    if (isValid == true) {
        fieldset = document.querySelector('fieldset:nth-child(2)');
        fieldset.classList.add('show')
    }
});

textArea = document.querySelector('textarea:last-of-type');

textArea.addEventListener('keyup', function (e) {
    e.preventDefault()
    isValid = textArea.checkValidity()
    if (isValid == true) {
        fieldset = document.querySelector('fieldset:nth-child(3)');
        fieldset.classList.add('show')
    }

})


