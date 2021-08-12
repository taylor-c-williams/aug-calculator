import { add, subtract, multiply, divide } from './utils.js';

const numberOne = document.getElementById('input1');
const numberTwo = document.getElementById('input2');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

const solution = document.getElementById('solution');

addButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = add(x, y);
    solution.textContent = sum;
});
subtractButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = subtract(x, y);
    solution.textContent = sum;
});
multiplyButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = multiply(x, y);
    solution.textContent = sum;
});
divideButton.addEventListener('click', ()=> {
    const x = Number(numberOne.value);
    const y = Number(numberTwo.value);
    const sum = divide(x, y);
    solution.textContent = sum;
});