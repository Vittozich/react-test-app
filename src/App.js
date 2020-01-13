import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import uuid from 'uuid'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//pages
import Comments from './components/pages/comments/CommentsPage';
import Comment from './components/pages/comments/CommentPage';
import About from './components/pages/About';

//layouts
import Header from './components/layouts/Header';

//this components
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import SecetedTodo from './components/SelectedTodo';

//this hooks
import { useGuestUserId } from './hooks/localStorage';

//this constaint
import { connection_url } from './constants/connections.js';

function App() {

  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState({});
  let [lastReadCommentName, setLastReadCommentName] = useState('');
  let guest_user_id = useGuestUserId();


  /*
  At first I used use useEffect, but when I click the buttons - changes always reload
  Then I have to use in this situation useState to reload page only one time, 
  not after every change
  */

  useState(() => {
    axios.get(connection_url + 'todos?_limit=10')
      .then(res => setTodos(res.data))
  })

  
  // Methods ============

  // Toggle Complete
  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  // Delete Todo
  const delTodo = (id) => {
    axios.delete(connection_url + 'todos/' + { id })
      .then(res => setTodos([...todos.filter(todo => todo.id !== id)]));
  }

  //Add Todo
  const addTodo = (title) => {
    axios.post(connection_url + 'todos', {
      title,
      completed: false
    }).then(res => setTodos([...todos, res.data]));
  }

  const selectTodo = (todo_id) => {
    axios.get(connection_url + 'todos/' + todo_id).then(res => setTodo(res.data));
  }

  return (

    <Router>
      <div className="App">
        <div className="container">
          <Header
           lastReadCommentName={lastReadCommentName} 
           guest_user_id={guest_user_id}
          />
          <Route exact path="/" render={() => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <SecetedTodo todo={todo} />
              <Todos todos={todos} markComplete={markComplete}
                delTodo={delTodo} selectTodo={selectTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" render={() => <About message="this is prop" />} />
          <Route exact path="/comments" component={Comments} />

          <Route exact path="/comments/:id" render={({ match }) =>
            <Comment id={match.params.id} setLastReadCommentName={setLastReadCommentName} />}
          />
        </div>
      </div>
    </Router>
  );

}

export default App;
