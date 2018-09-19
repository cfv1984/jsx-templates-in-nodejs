const assert = require('assert');
const jsx    = require('./sources/img');
const render = require('../../src/renderer');

const expected = require('fs')
    .readFileSync(__dirname + '/../references/img.html')
    .toString().replace(/\r/g,''); //oddly enough, reading this on windows shows \rs that are not there in the original
    const actual   = render(jsx(), { shouldFormat:true });

module.exports = () => assert(actual === expected, "Generated IMG is not equal to reference");