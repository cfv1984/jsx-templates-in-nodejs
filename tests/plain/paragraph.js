const diff   = (first,second) => require('diff').diffChars(first, second).map(({value}) => value).filter(v => v);
const assert    = require('assert');
const {p, span} = require('../../src');
const render    = require('../../src/renderer');

const object = p({class:"sorgo"}, [
    "This is a test text",
    span({}, ["With some complexity"]),
    "and then some more text"
]);

const expected = require('fs')
    .readFileSync(__dirname + '/../references/paragraph.html')
    .toString();
const actual   = render(object, { shouldFormat:true });

module.exports = () => assert(actual === expected, "Generated Paragraph is not equal to reference");