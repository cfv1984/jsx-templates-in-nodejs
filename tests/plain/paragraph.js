const assert = require('assert');
const {p, span} = require('../../src');
const renderer = require('../../src/renderer');

const object = p({}, [
    "This is a test text",
    span({}, ["With some complexity"]),
    "and then some more text"
]);

const expected = '<p>This is a test text <span>With some complexity</span> and then some more text</p>';
const actual   = renderer(object);

const test = () => assert(actual === expected, "The paragraph tag was not correctly rendered. Result was: "+actual);
module.exports = test;