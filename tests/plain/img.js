const diff   = (first,second) => require('diff').diffChars(first, second).map(({value}) => value).filter(v => v);
const assert = require('assert');
const {img}  = require('../../src/tags');
const render = require('../../src/renderer');

const object = img({src:'void.jpg', alt:'This is an example'});

const expected = require('fs')
    .readFileSync(__dirname + '/../references/img.html')
    .toString();

const actual   = render(object, { shouldFormat:true });

module.exports = () => assert(actual === expected, "Generated IMG is not equal to reference");