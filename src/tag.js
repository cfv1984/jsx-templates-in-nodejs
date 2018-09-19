const Tag = (name, attributes = null, ...children) => ({
    name,
    attributes: attributes !== null ? attributes : {},
    children
})

module.exports = Tag;