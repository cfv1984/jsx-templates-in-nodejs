const assert = require('assert');
const {html, head, meta, title, body, main, div} = require('../../src/tags');
const render = require('../../src/renderer');

const object = html({ lang:'en'}, [
    head({}, [
        meta({ "charset":"UTF-8" }),
        meta({ "name":"viewport", "content": "width=device-width, initial-scale=1.0" }),
        meta({ "http-equiv":"X-UA-Compatible", "content":"ie=edge" }),
        title({}, ["Document"])     
    ]),     
    body({"class":"document-body"}, [
        main({"class":"container"}, [
            div({}, ["Hola"])
        ])
    ])
]);

const expected = require('fs')
    .readFileSync(__dirname + '/../references/complex.html')
    .toString().replace(/\r/g,''); //oddly enough, reading this on windows shows \rs that are not there in the original
const actual = render(object, { shouldFormat:true });

module.exports = () => assert(actual === expected, "Generated Complex Document is not equal to reference");