import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TodoItems({ markComplete, delTodo, todo, selectTodo }) {

  const getStyle = () => {
    return {
      display: 'flex',
      background: "#777",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    }
  }

  let { id, title } = todo

 
  // Clicks ============

  const clickSelectTodo = (todo_id) => {
    selectTodo(todo_id);
  }



  // HTML ============

  return (
    <div style={getStyle()}>
      <div className="custom-control custom-checkbox" style={{ flex: 12 }}>
        <input
          className="custom-control-input"
          type="checkbox"
          onChange={markComplete.bind(this, id)}
          id={id + "checkbox"} /> {' '}
        <label
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          className="custom-control-label"
          htmlFor={id + "checkbox"}>{title}
        </label>
      </div>
      <ButtonSelect
        onClick={clickSelectTodo.bind(this, id)}
      >
        &#10003;
      </ButtonSelect>
      <Button onClick={delTodo.bind(this, id)} >x</Button>
    </div>
  )

}

// Validation ============

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

// Styled ============

const ButtonSelect = styled.button`
  flex: 1;
  max-width: 28px;
  background-color: rgb(61, 173, 61);
  color: #fff;
  border: none;
  font-size: 12.5px;
  padding: 5px 9px;
  border-radius: 44px;
  cursor: pointer;
  float: right;
  :hover{
    background-color: rgb(33, 125, 33);
  }
`
const Button = styled.button`
  flex: 1;
  max-width: 28px;
  background-color: #AA0000;
  color: #fff;
  border: none;
  font-size: 12.5px;
  padding: 5px 9px;
  border-radius: 44px;
  cursor: pointer;
  float: right;
  :hover{
    background-color: red;
  }
`


