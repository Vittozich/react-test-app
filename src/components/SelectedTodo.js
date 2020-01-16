import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';

export default function SelectedTodo() {

  let todo = useContext(TodoContext);

  return (
    <div className="col-12 p-0">
      <SelectedArea>
        {todo.title}
      </SelectedArea>
    </div>
  )
}


// Styled ============

const SelectedArea = styled.div`

  background-color: rgb(61, 173, 61);
  color: #fff;
  border: none;
  font-size: 12.5px;
  padding: 0px 22px;
  cursor: pointer;
  :hover{
    background-color: rgb(33, 125, 33);
  }
`