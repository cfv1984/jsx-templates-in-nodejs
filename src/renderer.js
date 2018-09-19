const attributes = require('./lists/attributes');
const { selfClosing: selfClosingTags } = require('./lists/tags');

const log      = (...args) => console.log(
    "\n=======================\n",
    ...args,
    "\n=======================\n"
)

const defaultOptions = { shouldFormat: false };

const isSelfClosing = (tag) => {
    if (!tag) throw new Error("undefined tag");
    return tag.constructor === String && selfClosingTags.includes(tag);
}

const attributeBuilder = (map, key) => map[key] === Boolean(map[key]) ? value = map[key] : `${key}="${map[key]}"`;

const stringifyAttributes = (attributes = {}) => Object.keys(attributes)
    .map(attr => attributeBuilder(attributes, attr))
    .join(' ');

const stringifyChildren = (children = [], options = defaultOptions) => children
    .map(child => renderer(child, options))
    .join(' ');

const format = (html) => require('pretty')(html, { ocd: true });

const renderer = (input, options = defaultOptions) => {
    if (input.constructor === String) return input;

    const { name, attributes = {}, children = [], meta = {} } = input;

    let stringifiedAttributes = stringifyAttributes(attributes);
    let stringifiedChildren   = stringifyChildren(children, options);
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