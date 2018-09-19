const assert = require('assert');
const jsx    = require('./sources/with-component');
const render = require('../../src/renderer');

const actual = render(jsx(), { shouldFormat:true });

const expected = require('fs')
    .readFileSync(__dirname + '/../references/with-component.html')
    .toString().replace(/\r/g,''); //oddly enough, reading this on windows shows \rs that are not there in the original

module.exports = () => assert(actual === expected, "Generated Componentized Document is not equal to reference");