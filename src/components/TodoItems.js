import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {

  getStyle = () => {

    return {
      background: "#777",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        {title}
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
      </div>
    )
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
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
