'use strict';

const inputForm = document.querySelector('.input');
const resetButton = document.querySelector('#reset');
const equalButton = document.querySelector('#equal');

const buttons = document.querySelectorAll('.button');

let inputArr;

[...buttons].forEach(function(el) {
    el.addEventListener('click', function() {
        if(this.className.includes('operator')) {
            inputForm.innerHTML = inputForm.innerHTML + ' ' + this.innerHTML + ' ';
        } else {
            inputForm.innerHTML += this.innerHTML;
        }
    });
})

equal.addEventListener('click', function() {
    clearInput();
});

resetButton.addEventListener('click', function() {
    clearInput();
});

function clearInput() {
    inputForm.innerHTML = '';
    inputArr = '';
}