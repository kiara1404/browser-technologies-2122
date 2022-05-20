console.log('are we connected?')

var fieldset;
var element = document.getElementById('studentId')
var isValid;



// element.addEventListener('keyup', function (e) {
//     e.preventDefault()
//     isValid = element.checkValidity()
//     //  console.log(isValid)
//     if (isValid == true) {
//         fieldset = document.querySelector('fieldset:nth-child(2)');
//         fieldset.classList.add('show')
//     }
// });


function showEl(element, fieldset) {
    element.addEventListener('keyup', function (e) {
        e.preventDefault()
        isValid = element.checkValidity()
        //  console.log(isValid)
        if (isValid == true) {
            fieldset.classList.add('show')
        }
    });
}

element = document.querySelector('#studentId');
fieldset = document.querySelector('#wafs');
showEl(element, fieldset)

element = document.querySelector('#inzicht-wafs');
fieldset = document.querySelector('#css');
showEl(element, fieldset)

element = document.querySelector('#inzicht-css');
fieldset = document.querySelector('#pwa');
showEl(element, fieldset)

element = document.querySelector('#inzicht-pwa');
fieldset = document.querySelector('#bt');
showEl(element, fieldset)

element = document.querySelector('#inzicht-bt');
fieldset = document.querySelector('#rtw');
showEl(element, fieldset)

element = document.querySelector('#inzicht-rtw');
fieldset = document.querySelector('#hcd');
showEl(element, fieldset)

element = document.querySelector('#inzicht-hcd');
fieldset = document.querySelector('#submit');
showEl(element, fieldset)


