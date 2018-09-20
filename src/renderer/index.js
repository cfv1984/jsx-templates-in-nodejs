const stringifyAttributes = require('./stringifyAttributes');
const isSelfClosing       = require('./isSelfClosing');
const defaultOptions      = require('./defaultOptions');
const format              = require('./format');

const renderChildren = (children = [], options = defaultOptions) => children
    .map(child => renderer(child, options))
    .join(' ')

const renderer = (input, options = defaultOptions) => {
    if (input.constructor === String) return input;

    const { name, attributes = {}, children = [] } = input;
    let stringifiedAttributes = stringifyAttributes(attributes);
    let stringifiedChildren   = renderChildren(children, options);
    const attributeSpace      = stringifiedAttributes.length ? ' ' : '';
    let output;

    if (input instanceof Array) {
        output = input.map(member => renderer(member, options));
    }

    else if (name instanceof Function) {
        output = renderer(name(attributes, children));
        return options.shouldFormat ? format(output) : output;
    }

    else {
        output = isSelfClosing(name) ?
            `<${name}${attributeSpace}${stringifiedAttributes}/>`
            : `<${name}${attributeSpace}${stringifiedAttributes}>${stringifiedChildren}</${name}>`;
    }

    return options.shouldFormat ? format(output) : output;
};

module.exports = renderer;