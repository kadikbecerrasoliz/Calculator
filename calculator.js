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
    // Getting all the numbers
    let numbers = inputArr.replaceAll(' ', '').split(/\+|\x|\-|\//);

    // Getting all the operators
    let operators = inputArr.replace(/[0-9]|\.|\s+/g, '').split('');

    // Doing the operations

    // Division
    let division = operators.indexOf('/');
    while(division != -1) {
        numbers.splice(division, 2, numbers[division] / numbers[division + 1]);
        operators.splice(division, 1);
        division = operators.indexOf('/');
    }

    // Multiplication
    let multiplication = operators.indexOf('x');
    while(multiplication != -1) {
        numbers.splice(multiplication, 2, numbers[multiplication] * numbers[multiplication + 1]);
        operators.splice(multiplication, 1);
        multiplication = operators.indexOf('x');
    }

    // Sum
    let sum = operators.indexOf('+');
    while(sum != -1) {
        numbers.splice(sum, 2, numbers[sum] + numbers[sum + 1]);
        operators.splice(sum, 1);
        sum = operators.indexOf('+');
    }

    // Subs
    let subs = operators.indexOf('-');
    while(subs != -1) {
        numbers.splice(subs, 2, numbers[subs] - numbers[subs + 1]);
        operators.splice(subs, 1);
        subs = operators.indexOf('-');
    }

    // Clear the previous input and replace it with the result
    clearInput(numbers[0]);
});

resetButton.addEventListener('click', function() {
    clearInput();
});

function clearInput(result = '') {
    inputForm.innerHTML = result;
    inputArr = result;
}