const paragraph     = require('./plain/paragraph');
const img           = require('./plain/img');
const complex       = require('./plain/complex');

module.exports = () => {
    try{
        paragraph();
        img();
        complex();
        return;
    }
    catch(error){
        return error.message;
    }
}