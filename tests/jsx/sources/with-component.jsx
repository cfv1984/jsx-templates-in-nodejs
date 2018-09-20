const JSXTemplates = require('../../../src/tag');

const Label = (props, children) => <span 
        class={props.class} 
        data-contrived-example={props['data-contrived-example']}
    >
        {children}<strong>With bold text</strong>
    </span>;

module.exports = () => <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
    </head>
    <body class="document-body">
        <main class="container">
            <div>Hola</div>
            <Label class="label" data-contrived-example="value">Look ma, a label</Label>
        </main>
    </body>
</html>;