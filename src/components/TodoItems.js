import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function TodoItems(props) {

  const getStyle = () => {
    return {
      background: "#777",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  let { id, title } = props.todo

  // HTML ============

  return (
    <div style={getStyle()}>
      <input type="checkbox" onChange={props.markComplete.bind(this, id)} /> {' '}
      {title}
      <Button onClick={props.delTodo.bind(this, id)} >x</Button>
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

const Button = styled.button`
  background-color: #AA0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  :hover{
    background-color: red;
  }
`

 
