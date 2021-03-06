My test react app. At first I repeated code from [Video](https://www.youtube.com/watch?v=sBws8MSXN7A&t), then I just did different things like - replace classes with hooks, create my own components and experiments. 

All examples in code, the sequence of actions can be tracked by commits!

### `DECEMBER 2019`

### `learning difficulty level: 2 of 10`

Down below something like "learning documentation"


# Default documentation

To start work with node modules:

    npm update

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

# NOTE: PRE REACT HOOKS BELLOW =============

## Like in this.Video

### For thinking:
- you have to learn JS for work React
    - classes, destructuring, forEach, map, filter, ArrowFunctions, Fetch API, Promises.
- React is not just a library it's a framework (official this is a library)!
- React use JSX to work with DOM (html), JS and CSS
- React consists of components
- Each component have a state and can share states
- No need to refresh the page

<hr>


I used Vscode first, but then i started using Webstorm

<hr>

### For work with console and fast create components in React need to use some snippets:

Search and install in extensions VSCode:
 
    ES7 React/Redux/GraphQL/React-Native snippets

Search and install react snippets in Webstorm:

    React snippets

### Some command in code (use Tab) when created new element (component):

`rce` (Tab) - Fast create Class component (never use again)

`rfc` (Tab) - Fast create Function

Webstorm doesn't have `rce` and `rfc` snippets, because react hooks is to new feature for webstorm developers, and to create this snippets need to^

Editor > LiveTemplate + create new snippet `rfc`  in React with code inside:
        
        import React from 'react'
        
        export default function $TM_FILENAME_BASE$ () {
          return (
            <div>
              $END$
            </div>
          )
        }

and wariable - `TM_FILENAME_BASE` with expression `capitalize(camelCase(fileNameWithoutExtension()))`
<hr>
To autocomplete html in code enable setting in VSCode:

    "html.autoClosingTags": true

<hr>

To create the project:

    npx create-react-app react-test-app
    cd react-test-app
    npm start

<hr>

In index.html  

`<div id="root"></div>` 

this `div` outputs the all React

<hr>

In `index.js` imports the main component and all code to `index.html`

<hr>

To call state elements need to:

`this.state.someElement` or (`someElement` or `setSomeElement` (in react hooks))

<hr>

To use other components need to import component:

`import SomeComponent from './components/SomeComponent'`

, then use them in render(return) like this 

`<SomeComponent/>`

<hr>

To transfer the element into the component need to create the attribute:

`<SomeComponent someElement={this.state.someElement}  />` or `<SomeComponent someElement=someElement}  />` or  `<SomeComponent setSomeElement=SetsomeElement}  />`

Now `someElement` is prop in `SomeComponent`

Can pass even functions

To call props need to:

`this.props.someElement` or `props.someElement` (react hooks)

Not need redefine a prop as a state or something in a recipient component 

(as an example, In Vue.js need)

<hr>

When use `.map` method in array functions need to set `key` for inner element 

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

And can use function with logic instead object

`<someJsxElement style={this.styleSJE()}>`
<hr>

## Why need arrow functions?

In classes we created custom methods and they do not have access to the class, but arrow function HAVE access.

`someNotArrowFunc(e){...}`

To have access to element need 
`<elem onChange={this.someNotArrowFunc.bind(this,el)}>`
to method.

If we have arrow function (but no parameters):

`someArrowFunc = (e) => {...}`

`<elem onChange={this.someArrowFunc}`

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

To generate `id` to:

`id: uuid.v4()`
 
<hr>

To use components like pages in `one page application` should use `react-router-dom`

    npm i react-router-dom

Creating page like a creating simple function, but in different folder like `pages`,
but in this functions should use `<React.Fragment>` instead of wrapping standard `<div>`
 in the `return{...over here...}`

in `App.js` need to import component:

`import { BrowserRouter as Router, Route } from 'react-router-dom'`

also need to wrap everything in `return{` in App.js with `<Router>`

Each route content need to wrap with 
`<Route exaxt path="/someurl or just /" render={props =>(
    <React.Fragment>
    some content
    </React.Fragment>
)}  />`

`exact` use when used `/` or lower url path to not show content in url `example/secondurl/`
  previous url content `example/`. 

or if this is a component 
`<Route path="/somecomponenturl" component={SomeComponent} />`

<hr>

To move over this pages should use `import { Link } from 'react-router-dom' ` in some `<Header>` or `App.js` 

To create links need to do:

`<Link to="/">Home</link>`

`<Link to="/someurl">My some url</link>`

This works with `Router` in `App.js`

<hr>

    https://jsonplaceholder.typicode.com/

This is site with json examples for working with API without backend (this site working very bad)
<hr>

Simple method to work with RESTFUL API is - `axios`

    npm i axios

To use `axios` in code need to:

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

Notice, when I refactor one component, other still working.
 Half of them can be classes and others can be functions and it still works well.

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

# NOTE: PRE REACT HOOKS ABOVE =============

When you create a page, you should capitalize a creating file as main function inside this file. 
Otherwise, it doesn't work. Even if this is Index.js. 

Why I created `Index.js` and `Comment.js` in comments page and not just `Comment.js`:

In `Index.js` I used `functions` and `<div>`, In `Comment.js` I used `.map` instead `<div>` 
And in `Index.js` was created  buttons for pagination.

<hr>

## How to use `useEffect` with `axios` correctly:

I have buttons, which change API query page with `_start=?`

If you just create  `useEffect` with axios - when you click the buttons the page will flicker with old and new data. 
This is problems with synchronization.

Correct usage is create and call a async function `const fetchData = async () => {....` and `fetchData()`

You can't add parameter `async` like  `useEffect(async () => {` -  it just doesn't work.

You can set scope to useEffect if add in the end of function array of variables ` },[startPage, pageLimit]);`
If you didn't do it - the `useEffect` can see all variables. If we add `[]` the function `useEffect` will not see any variables.

<hr>

# CSS styled library 

To best work with styles and css, besides standard .css file, you should to use - 
[styled](https://www.styled-components.com/)

And learn it in  [Video_2](https://www.youtube.com/watch?v=3SpAg5tr7Ws)

    npm install --save styled-components

To use this library in components need to:

`import styled from 'styled-components'`

and 

const NewHtmlElementDiv = styled.div`.....
some_standart_css_code....

This start and end with "`"

    ` some_standart_css_code `

In code instead `<div>` need to use  `<NewHtmlElementDiv>` element

<hr>

In `styled` component can call JS code in `${...some_js_code...}`

If need to call some variables or props in `<ThisElement>` need to declare this props in element 
`<ThisElement someProp={someVariable}>` and then use it in the styled element like this:

`color: ${props => (props.someProp == 'someThing' ? 'red' : 'green' )}`

<hr>

It's debatable to use this: `ThemeProvider`, because need to import this, then create
 `const theme = {...someDefaultStyle = "#111"...}` ,
  then warp all page in `<ThemeProvider theme={theme}>`, 
  then use it in styles css as `background: ${props => props.theme.someDefaultStyle}`...

Why just not use this (good alternative):

 `const defaultTheme = {...someDefaultStyle = "#111"...}`
and use it in styles css
`background: ${defaultTheme.someDefaultStyle}`
<hr>

Again, what a point to use `css` from `styles` and rewrite standard styles methods? 
A specific task may be needed?
But not in this case

<hr>

  Call prop in element:
  `<Footer color="someColor">`

Then use it in styles with `css` from `styles`:


 `${props => props.color && css'
    color: ${props => props.theme[props.color]}'
  }`

 (I used in this learning documentation  "'" instead "`")

Or without using any `css` and  `ThemeProvider` from `styles`:

 `background-color: ${props => defaultTheme[props.color]};`

Last option is much easier! 

I did not find a way to apply first of this options.

<hr>

HOW TO DEPLOY WITH VSCode?

Install extension `SFTP` and edit config file with `ctrl + shift + p` command
 and write `SFTP:config`, enter the data of hosting and just deploy build app by click the folder 
 by right mouse click.

<hr>

### `JANUARY 2020`

# Bootstrap


## Install and using bootstrap:

    npm install react-bootstrap bootstrap

in code:

`import 'bootstrap/dist/css/bootstrap.min.css';`

When you import css file in a component, it's called for all components in the page `App.js`

Not necessary call css file in each component.

<hr>

# Pass props when use `Router`

I have example page `About`, and I can send props inside this page.
In `App.js` where called  `Router`

<hr>

When you use `/comments/id` inside `/comments` need to use `exact` before `path` in `Route` in `App.js`

When need to pass some props with route page params need to use `match` as argument arrow function
 and call this param as prop `id={match.params.id}` like in example bellow and in code:

`<Route exact path="/comments/:id" render={({ match }) =>
 <Comment id={match.params.id} setLastReadCommentName={setLastReadCommentName} />}
 />`

As You see, `setLastReadCommentName` this is prop function which pass inside `Route` component.  


<hr>

# Save some data in local storage

This is just the JavaScript, not the React.

`localStorage.getItem('guest_user_id');` - this method do get variable named as `guest_user_id` 

 `localStorage.setItem('guest_user_id', generate_string);` - this method do set variable named as
  `guest_user_id` with some string `generate_string`

 and I generate this string like that:
 `generate_string = Math.random().toString(36).substring(2, 33) + Math.random().toString(36).substring(2, 33);`


`localStorage.removeItem('guest_user_id');` -  remove item if this is necessary.

<hr>

# Use constants from connections

I created folder `constants` with `connections` and `styles` constants which are I previously declarete in component,
 now this some variables are can change in one place. 

In file i need to: 

 `export const someObject = {....`
 or
` export const someVariable = ....`

 And now you can import them in components (live example):

` //this constaint`

`import { theme, defaultTheme }  from '../../../constants/styles.js';`

Note: with end `.js` because this is not `React` components, but just `js` files.

<hr>

# Educate with [Chantastic](https://twitter.com/chantastic/status/1201594041378496512)
 (now He deleted all free courses from twitter, and deploy all of them to paid learning resource) 

## What I can get from this lessons?

1. You can use different methods to get props in component:

    `function SomeComponent() {... `<---this is without props 

    `function SomeComponent(props) {... `<---this is with props 

    `function SomeComponent({name, ...props}) {... <---this is with the prop and props  and lets stop with that:`

    Now you can use this like `name` instead of `props.name` and you can use other props in some tags like that: 
    `<H1 {...props}>`. Example of this props is `class='someName'`;

    `function SomeComponent({name, secondName}) {... `<---this is with only 2 props

    `function SomeComponent({name : newName, secondName : newSecondName}) {... `<---this is with only 2 props and use rename - second argument is new, first - is prop

    `function SomeComponent({name : newName = false}) {... `<---this is with only one prop, which is renamed, but this prop have a default value as `false`; same thing -`function SomeComponent({name = false}) {... ` but without rename;

2. Try to create my own hook (2 attempts):

    Simple hook to make cleaner code - it is better way. `CommentHooks.js` as `useComment`;

    Complicated hook with `useEffect` will be work correctly if you track value, which changing like:

    `useEffect(() => { 
        fetchData();
    }, [startPage, pageLimit]);`

    but if you will to do not track `[startPage, pageLimit]` page will be flicker. 

    Now, after that manipulations I have only one call `axios` in `CommentHooks.js` instead of two calls
     `axios` in `CommentsPage` and `CommentPage`, because they will be removed, 
     and added call `import { someFunction } from './CommentHooks.js';`

3. inherited class merge with component class:

    `className={["my-class-name",className].join(" ")}` or `className={["my-class-name",props.className].join(" ")}`

4. `useReducer` :

    `let [someVariable, dispatchSome] = useReducer((state, action) => {...someFunction...}, ...someDefaultState...)`
    
    instead of
    
    `let [someVariable, setSomeVariable] = useState(...someDefaultState...)`
    
    where `state` this is old state of `someVariable` and `dispatch` is some function whitch return `action`'s of `useReducer`. 

    where `action` is variables in `someFunction` in  `useReducer` which are call like `action.type` .

    This is complicated example, but maybe this will be need in future. 

    `axios` doesn't work with dispatch functions!!!

        ReferenceError: Cannot access 'dispatchTodo' before initialization

    To more complicated need to call `axios` with `async` and `await` parameters. 

    function `getTodo` in this commit is higer than `useReducer` because else it calls an error - need to declarate function... this is strange...

5. `createContext` and `useContext`:

    context declaration occur like that:

    `let SomeNameOfContext = createContext({ someName: "somerealname" }) `
    
    context calling occur like that:

    `let { soneName } = useContext(SomeNameOfContext);`

    If `someName` was a one of props, need to delete it from props.
    `someName` declarated as default value only when you use it in test, without `Provider`. 

   `let SomeNameOfContext = createContext()` Than all what you need when you use it like as a `Provider`.
    When you use it in 2 or more different components need to import this context everywhere.

   Context need to pass some props deep inside nested components without redeclaration in each of this components. And to do it need warp one of them like as:

   `<SomeContext.Provider value={someInsideVariable}>
        <SomeFirstComponent />
    </SomeContext.Provider>`

    ...let's say, In this example have 5 nested components inside `SomeFirstComponent` and you do not
     redeclare any values inside this components, but only in `SomeSixthComponent` you use this value like that 
     (first thing is import that):

    `import SomeContext from '../contexts/SomeContext';`

    and

    `let someInsideVariableName = useContext(SomeContext);`

    That is all. 

<hr>
<hr>

Strange errors:  if calling function is outside `useEffect`:

        React Hook useEffect has a missing dependency: 'fetchData'. Either include it or remove the dependency array  react-hooks/exhaustive-depse it or remove the dependency array  react-hooks/exhaustive-deps

but if it inside, all is OK. But why is `Chantastic` use it outside...

<hr>

# Educate with [Владилен Минин](https://youtu.be/xJZa2_aldDs?list=WL)

## What I can get from this lessons? - fast answer : nothing

Strange: in this video the author rewrite code in no reason way: `export default` in function add to end of code, when add `prop-types` validation.

And it is a full copy this.Video with  Traversy Media but with hooks instead classes. The author does't say thanks to Traversy for content!


<hr>

# P.S


## legend (notices)

When I write like `some....` or `someComponent` that meens it is a template of any function, component or variable.

all hooks are declared like as `someHook` but not `React.someHook` because all hooks are imports with `React` like as: `import React, { useState, useReducer } from 'react';`

I try to write describing/example code with `Readme` description/notes in same `commit` to comfortable learn on every issue about `React`.



<hr>
Документ написан на английском, но с русским акцентом.

Написание этой `обучающей документации` на английском тоже является частью изучения фреймворка. 
