const attributeParser = require('./attributeParser');

module.exports = (attributes = {}) => Object.keys(attributes)
    .map(attr => attributeParser(attributes, attr))
    .join(' ');
