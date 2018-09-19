const plain = require('./plain');
const assert = require('assert');

const results = {
    plain: plain(),
    js: jsx()
}

console.log("All tests pass");