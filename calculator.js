'use strict';

const inputForm = document.querySelector('.input');
const resetButton = document.querySelector('#reset');
const equalButton = document.querySelector('#equal');

const buttons = document.querySelectorAll('.button');

let inputArr = inputForm.innerHTML;

[...buttons].forEach(function(el) {
    el.addEventListener('click', function() {
        let currentChar = this.innerHTML;
        let maxPos = inputArr.length - 1;
        let lastChar = inputArr[maxPos];

        if(this.className.includes('operator')) {

            if(!inputArr) return;

            if(lastChar == '/' || lastChar == 'x' || lastChar == '+' || lastChar == '-') {
                inputForm.innerHTML = inputArr.substring(0, maxPos) + currentChar + ' ';
            }

            if(parseInt(lastChar)) {
                inputForm.innerHTML = inputForm.innerHTML + ' ' + currentChar + ' ';
            }
        }

        if(this.id == 'dot') {
            if(!inputArr) return;

            if(lastChar == '/' || lastChar == 'x' || lastChar == '+' || lastChar == '-') return;

            if(lastChar == '.') return;

            inputForm.innerHTML += currentChar;
        }

        if(this.className == 'button number') inputForm.innerHTML += currentChar;

        inputArr = inputForm.innerHTML.trim();
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