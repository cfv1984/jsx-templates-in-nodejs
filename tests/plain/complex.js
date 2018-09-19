const assert = require('assert');
const {html, head, meta, title, body, main, div} = require('../src');
const render = require('../src/renderer');


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

const actual = render(object);
const expected = '<html lang="en"><head><meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta http-equiv="X-UA-Compatible" content="ie=edge"/> <title>Document</title></head> <body class="document-body"><main class="container"><div>Hola</div></main></body></html>';


module.exports = () => assert(actual === expected, "Generated HTML document is not generated correctly. Generated is: "+actual);