const isBoolean       = (obj) => obj === Boolean(obj);
const attributeParser = (map, key) => isBoolean(map[key]) ? value = map[key] : `${key}="${map[key]}"`;

module.exports = attributeParser;