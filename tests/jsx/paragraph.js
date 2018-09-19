const assert = require('assert');
const jsx    = require('./sources/paragraph');
const render = require('../../src/renderer');

const expected = require('fs')
    .readFileSync(__dirname + '/../references/paragraph.html')
    .toString().replace(/\r/g,''); //oddly enough, reading this on windows shows \rs that are not there in the original
const actual   = render(jsx(), { shouldFormat:true });

module.exports = () => assert(actual === expected, "Generated Paragraph is not equal to reference");