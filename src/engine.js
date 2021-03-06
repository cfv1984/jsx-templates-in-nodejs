const Renderer   = require('../src/renderer/index');
const defaultOptions = {
    shouldFormat: true
};

const isDefined  = (obj) => typeof (obj) !== 'undefined';
const isCallable = (obj) => isDefined(obj) && obj instanceof Function;

module.exports = (cfg = defaultOptions) => {
    return function (fileName, vars = {}, callback) {
        let contents;
        let output;

        try {
            contents = require(fileName);
        }
        catch (e) {
            callback(e);
            return;
        }

        const renderable = isCallable(contents) ? contents(vars) : contents;

        if(!renderable){
            callback(new Error("The passed template is not a valid one"));
            return;
        }

        output = Renderer(renderable, { shouldFormat: cfg.shouldFormat });
        callback(null, output);
    };
};