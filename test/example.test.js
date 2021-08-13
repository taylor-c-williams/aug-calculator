

import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test ('add function should take 22 and 10 and return 32', (expect)=>{
    const expected = 32;
    const actual = add(22, 10);
    expect.equal(actual, expected);
});
test ('subtract should take 10 and 3 and return 7', (expect)=>{
    const expected = 7;
    const actual = subtract(10, 3);
    expect.equal(actual, expected);
});
test ('multiply should take 6 and 10 and return 60', (expect)=>{
    const expected = 60;
    const actual = multiply(6, 10);
    expect.equal(actual, expected);
});

test ('divide function should take 10 and 2 and return 5', (expect)=>{
    const expected = 5;
    const actual = divide(10, 2);
    expect.equal(actual, expected);    
});