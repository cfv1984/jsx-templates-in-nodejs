const paragraph = require('./paragraph');
const img = require('./img');
const complex = require('./complex');
const withComponent = require('./with-component');

module.exports = () => {
    img();
    paragraph();
    complex();
    withComponent();
}