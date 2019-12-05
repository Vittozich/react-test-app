import React from 'react'
import PropTypes from 'prop-types';

function TodoItems(props) {

  const getStyle = () => {
    return {
      background: "#777",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    }
  }

  let { id, title } = props.todo

  return (
    <div style={getStyle()}>
      <input type="checkbox" onChange={props.markComplete.bind(this, id)} /> {' '}
      {title}
      <button onClick={props.delTodo.bind(this, id)} style={btnStyle}>x</button>
    </div>
  )

}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#AA0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'

}

export default TodoItems
