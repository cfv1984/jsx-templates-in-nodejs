const { selfClosing } = require('../lists/tags');

module.exports = (tag) => {
    if (!tag) throw new Error("Undefined tag");
    return tag.constructor === String && selfClosing.includes(tag);
};