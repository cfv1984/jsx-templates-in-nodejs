require("@babel/register");
const Renderer = require('./src/renderer');
const Tags     = require('./src');
const Magic    = require('./src/node');

Magic.Tags = Tags;
Magic.Renderer = Renderer;

module.exports = Magic;

