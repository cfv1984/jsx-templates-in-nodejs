const Tag = (name, attributes = null, children = null, meta = {}) => ({
    name,
    attributes: attributes !== null ? attributes : {},
    children: children instanceof Array ? children : [children],
    meta
})

module.exports = Tag;