My test react app. At first I repeated code from [Video](https://www.youtube.com/watch?v=sBws8MSXN7A&t), then I just did different things like - replace classes with hooks, create my own components and experiments. 

All examples in code, the sequence of actions can be tracked by commits!

### `DECEMBER 2019`

### `learning difficulty level: 2 of 10`

Down below something like "learning documentation"


# Default documentation


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    npm start

ins opened in onFocus browser:
 [http://localhost:3000](http://localhost:3000)

### Tests:

    npm test

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build for project:

    npm run build


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<hr>

# Learn about

## Like in this.Video

### For thinking:
- you have to learn JS for work React
    - classes, destructuring, forEach, map, filter, ArrowFunctions, Fetch API, Promises.
- React is not just library it's framework (official it is library)!
- React use JSX to work with DOM (html), JS and css
- React consists of components
- Each component have state and can share states
- No need to refresh the page

<hr>

To simplify work with this library will allow the VSCode (Visual Studio Code), especially for me, because on my work I forced to use the phpstorm (old version) and it bad working with js syntax.

<hr>

### For fast work with React need use some snippets, exactly fits:

    ES7 React/Redux/GraphQL/React-Native snippets

Search and install in extensions VSCode

### Some command in code (use Tab) when created new element (component):

`rce` (Tab) - Fast create Class component (never use again)

`rfc` (Tab) - Fast create Function

<hr>
To autocomlete html in code enable setting in VSCode:

    "html.autoClosingTags": true

<hr>

To create the project:

    npx create-react-app react-test-app
    cd react-test-app
    npm start

<hr>


In index.html  

`<div id="root"></div>` 

this outputs the React's stuff

<hr>

In index.js imports the main component and all code to index.html

<hr>

To call state elements need to:

`this.state.someElement`

<hr>

To use other components need to import component:

`import SomeComponent from './components/SomeComponent'`

, then use them in render(return) like this 


`<SomeComponent/>`

<hr>

To transfer the element into the component need to create the attribute:

`<SomeComponent someElement={this.state.someElement}  />`

Now `someElement` is prop in `SomeComponent`

Can pass even functions

To call props need to:

`this.props.someElement`

Not need redefine a prop as a state or something in a recipient component 

(In Vue.js need)

<hr>

When use .map method in array functions need to set `key` for inner element 

<hr>

To validation in code need use: `import PropTypes from 'prop-types'`

<hr>

styles in JSX like styles in HTML, but instead `'-'` is written uppercase next attribute word, like:

`backgroundColor`

And one more rule - double braces:

`<someJsxElement style={{bacgroundC....}}>`

Or 

`<someJsxElement style={this.styleSJE}>`

`styleSJE = {bacgroundC....}`

Clear why!

And can use function with logic instead object

`<someJsxElement style={this.styleSJE()}>`
<hr>

## Why need arrow functions?

Because!

In classes we created custom methods and they do not have acces to the class, but arrow function HAVE access.

`someNotArrowFunc(e){...}`

To have acces need 
`<elem onChange={this.someNotArrowFunc.bind(this,el)}>`
to method.

If we have arrow function (but no parameters):

`someArrowFunc = (e) => {...}`

`<elem onChange={this.someArrowFunc}`

    //todo need to check!!

If have parameters:


`someArrowFunc = (e) => {...}`

`<elem onChange={this.someArrowFunc.bind(this, e)}`

`THIS` is always the first parameter!
<hr>
 Props can convert into constants in components to simplify and shortening code.

 `const myElem = this.props.myElem`

or if we have an object with propserties `id` and `name`:

 `const { id, name } = this.props.myObjectElement`
<hr>

To generate `id` should use `uuid`

    npm i uuid

`import uuid from 'uuid'`

To genegete `id` to:

`id: uuid.v4()`
 
<hr>

To use components like pages in one page application should use `react-router-dom`

    npm i react-router-dom

Create page like creating simple function but in different folder like `pages`, but in this functions should use `<React.Fragment>` instead of wrapping standart `<div>` in the `return{...over here...}`

in App.js have to 

`import { BrowserRouter as Router, Route } from 'react-router-dom'`

And need to wrap everything in `return{` in App.js with `<Router>`

Each route content need to wrap with 
`<Route exaxt path="/someurl or just /" render={props =>(
    <React.Fragment>
    some content
    </React.Fragment>
)}  />`

`exact` use when use `/` or lower url path to not show content in url `example/secondurl/`  previous url content `example/`. 

or if it is a component 
`<Route path="/somecomponenturl" component={SomeComponent} />`

<hr>

To move over this pages should use `import { Link } from 'react-router-dom' ` in some `<Header>` or `App.js` 

To create links need to do:

`<Link to="/">Home</link>`

`<Link to="/someurl">My some url</link>`

This works with `Router` in `App.js`

<hr>

    https://jsonplaceholder.typicode.com/

This is site with json examples for working with API whithout backend
<hr>

Simple method work with API is `axios`

    npm i axios

To use `axios` in code should:

`componentDidMount() {
    axios.get('some_long_url_with_json_return').then(res => console.log(res.data))
}`

don't forget `import axios from 'axios'`  



<hr>

# Refactor components (classes to functions)

I used hints from this links:

[React official introducing hooks](https://reactjs.org/docs/hooks-intro.html)

[Many samples](https://scotch.io/tutorials/5-ways-to-convert-react-class-components-to-functional-components-w-react-hooks)

To understand why functions better then classes i was listening podcasts

[React podcast](https://reactpodcast.simplecast.fm/)

and specifically

[React Courses with Tyler McGinnis](https://shoptalkshow.com/episodes/377/)

in a nutshell answer is - classes can't do what can do functions, and element `this` unpredictably work in Java Script. All this javascript programming language features. 

<hr>

To show difference 
[Watch](https://github.com/Vittozich/react-test-app/commit/7c919a8b653d74826b111d9071c227729213d82e)



I started refactoring in lower elements. At first in `TodoItem.js` , then `Todos.js` and and so on.

Notice, when I refactor one component, other still working with this component. Half of them can be classes and others can be functions and it still works well.

Small problems occurred in the file `App.js` but all interchangeably.

<hr>

## Main difference:


setName and setSomeArray it is custom functions (Hooks).


| Classes      | Functions        | Comment  |
| ------------ |------------------| ---------| 
| `class ComponentName extends Component {`   | `function App(props) {`    | if have no props just `()` |
| `render() { return ` | `return` | `render()` gone |
| `state = {name: '', someArray: []}`    | `let [name, setName] = useState(''); ` `let [someArray, setSomeArray] = useState([]);`| now when need to update prop need use `setName` (for name) and `setSomeArray` (for someArray)  instead `setState` (for all) |
| `this.setName({name: 'new name'})` | `setName('new name')`         | words `this` and name of state is not needed | 
| in tags `value = {this.name}` and `value = {this.props.nane}` | `value = {name}` and `value = {props.name}`| `this` gone|
|` componentDidMount(){`| `useState(() => {` or `useEffect(() => {` | `useEffect` reload component (page) by any chage (this functionality was impossible in classes). to same functionality need use `useState` |

Not so complicated


<hr>

When create page, should capitalize a creating file as main functuion in this file. Otherwise it doesn't work. Even if this is Index.js. 

Why I created `Index.js` and `Comment.js` in comments page and not just `Comment.js`:

In `Index.js` I used `functions` and `<div>`, In `Comment.js` I used `.map` instead `<div>` 
And in `Index.js` was created  buttons for pagination.

<hr>

## How to use `useEffect` with `axios` correctly:

I have buttons, which change API's query page with `_start=?`

If just create  `useEffect` with axios - when click the buttons page will flicker with old and new data. It is synchronization problem.

Correct usage is create and call a async function `const fetchData = async () => {....` and `fetchData()`

We can't add parameter `async` like  `useEffect(async () => {` -  it just doesn't work.

We can set scope to useEffect if add in the end of function array of variables ` },[startPage, pageLimit]);`
If we didn't do it `useEffect` can see all varables. If we add `[]` function `useEffect` will not see any variables.

<hr>


# P.S

Документ написан на английском, но с русским акцентом.

Написание этой `обучающей документации` на английском тоже является частью изучения фреймворка. 
