const {all} = require('./lists/tags');
const tag = require('./tag');

const tags = {}; 

const getFactoryFor = (name) => (attributes=null,children=[]) => tag(
    name, 
    attributes === null? {} : attributes, 
    ...children
);

all.forEach(name => tags[name] = getFactoryFor(name));

module.exports = tags;