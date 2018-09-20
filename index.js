require("@babel/register");
const Renderer = require('./src/renderer');
const Tags     = require('./src/tags');
const Magic    = require('./src/node');
const Engine   = require('./src/engine');

Magic.Tags     = Tags;
Magic.Renderer = Renderer;
Magic.Engine   = Engine;

module.exports = Magic;

