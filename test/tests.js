import './example.test.js';

import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

const test = Qunit.test;

test ('add function should take 22 and 10 and return 32', (expect)=>{
    const expected = 32;
    const actual = add(22, 10);
    expect.equal(actual, expected);
});