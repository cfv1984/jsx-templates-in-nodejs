const allValidAttributes = [
    'accept', 'accept-charset', 'accesskey', 'action',
    'align', 'allow', 'alt', 'async', 'autocapitalize',
    'autocomplete', 'autofocus', 'autoplay', 'bgcolor',
    'border', 'buffered', 'challenge', 'charset',
    'checked', 'cite', 'class', 'code', 'codebase',
    'color', 'cols', 'colspan', 'content', 'contenteditable',
    'contextmenu', 'controls', 'coords', 'crossorigin', 'data',
    'datetime', 'decoding', 'default', 'defer', 'dir',
    'dirname', 'disabled', 'download', 'draggable', 'dropzone',
    'enctype', 'for', 'form', 'formaction', 'headers', 'height',
    'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon',
    'id', 'importance ', 'integrity', 'ismap', 'itemprop',
    'keytype', 'kind', 'label', 'lang', 'language', 'lazyload ',
    'list', 'loop', 'low', 'manifest', 'max', 'maxlength',
    'minlength', 'media', 'method', 'min', 'multiple', 'muted',
    'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping',
    'placeholder', 'poster', 'preload', 'radiogroup', 'readonly',
    'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox',
    'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'slot',
    'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset',
    'start', 'step', 'style', 'summary', 'tabindex', 'target',
    'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap'
];

const attributeBuilder = (map, key) => map[key] === Boolean(map[key]) ? value = map[key] : `${key}="${map[key]}"`;

const stringifyAttributes = (attributes = {}) => Object.keys(attributes)
    .map(attr => attributeBuilder(attributes, attr))
    .join(' ');

const stringifyChildren = (children = [], shouldFormat = false) => children
    .map(child => renderer(child, shouldFormat))
    .join(' ');

const format = (html) => require('pretty')(html, { ocd: true });

const renderer = (node, { shouldFormat } = { shouldFormat: false }) => {
    if (node.constructor === String) return node;

    const { name, attributes = {}, children = [], meta = {} } = node;
    let stringifiedAttributes = stringifyAttributes(attributes);
    let stringifiedChildren = stringifyChildren(children, shouldFormat);
    const attributeSpace = stringifiedAttributes.length ? ' ' : '';

    if (name instanceof Function) {
        const output = name(attributes, children, meta);
        return shouldFormat ? format(output) : output;
    }

    let stringified = meta.isSelfClosing ?
        `<${name}${attributeSpace}${stringifiedAttributes}/>`
        : `<${name}${attributeSpace}${stringifiedAttributes}>${stringifiedChildren}</${name}>`;

    if (shouldFormat) {
        return format(stringified);
    }

    return stringified;
}

module.exports = renderer;