import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo(props) {

  let [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle('')
  }

  const onChange = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        name="title"
        style={{ flex: '10', padding: '5px' }}
        placeholder="Добавить новый ...."
        value={title}
        onChange={onChange}
      />
      <input type="submit"
        value="Submit"
        className="btn btn-success"
        style={{ flex: '1', borderRadius:'0px' }}
      />
    </form>
  )

}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
