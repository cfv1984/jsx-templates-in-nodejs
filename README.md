# jsx-templates-in-nodejs

Small library enabling NodeJS users to draw templates in JSX without most of the hassle required by other alternatives. 

# Requirements
- [Babel][1]
- [Babel register hook][3]
- [JSX transform][2]

## Usage

Setup a .babelrc like so: 

```json
{
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {
            "pragma": "JSXTemplates"
          }]
    ]
}
```

Then setup your register hook like so: 
```js
  require("@babel/register");
```

Then simply require your JSX files like so: 

```jsx
// views/profilePage.jsx

const {Transform} = require('jsx-templates-in-nodejs');
const UserHeader = require('./profile/Header');
const ProfileDetails = require('./profile/Details');
const defaults = {id: -1};

module.exports = ({id} = defaults) => <div>
  <UserHeader for={id} />
  <ProfileDetails for={id} />
  <p>Whaaaaaaaaaaat</p>
</div>;
```

```js
// express route handler

const { Renderer } = require('jsx-templates-in-nodejs');
const profilePage = require("views/profile");

app.get('/users/:id', (req, res) => {
  res.send(
    Renderer(
      // note: this assumes profilePage is a function that returns the JSX for the requested page
      profilePage({ 
      id: req.params.id
    }), {shouldFormat: true}    
    )
  );
});
```

## [Express][4] template engine

There is also an express template engine, developed in order to prevent the boilerplate above.

To use it simply do: 

```jsx
const { Engine } = require('jsx-templates-in-nodejs');

const app = express();

app.set('views', './views');
app.engine('jsx', Engine());
app.set('view engine', 'jsx');

app.get('/users/:id', function (req, res) {
    res.render('profile', { 
      // This will be received in the first argument of the function contained in the JSX template file described above
      id: req.params.id,
    });
});
```



[1]: https://babeljs.io/docs
[2]: https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
[3]: https://babeljs.io/docs/en/babel-register
[4]: http://expressjs.com/en/guide/using-template-engines.html