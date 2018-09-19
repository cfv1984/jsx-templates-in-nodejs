const assert = require('assert');
const {img} = require('../../src');
const renderer = require('../../src/renderer');

const object = img({src:'void.jpg', alt:'This is an example'});

const expected = '<img src="void.jpg" alt="This is an example"/>';
const actual   = renderer(object);

const test = () => assert(actual === expected, "The image tag was not correctly rendered. Result was: "+actual);
module.exports = test;