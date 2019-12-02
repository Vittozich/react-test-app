import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {

  getStyle = () => {
    // if (this.props.todo.completed){
    //   return{
    //     textDecoration: 'line-through'
    //   }
    // }else{
    //   return{
    //     textDecoration: 'none'
    //   }
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
      </div>
    )
  }
}

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItems
