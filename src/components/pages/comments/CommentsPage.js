import React, { useState } from 'react';
import styled from 'styled-components';

//components
import Comments from './Comments';

//hooks
import { useComments } from './CommentsHooks.js'

export default function CommentsPage() {


  let [startPage, setStartPage] = useState(0);
  let [pageLimit] = useState(10);

  let comments = useComments(startPage, pageLimit);

  function pageScrol(direction) {
    if (direction === 'next') {
      setStartPage(startPage + 10)
    } else {
      if (startPage > 0) {
        setStartPage(startPage - 10)
      } else {
        setStartPage(0)
      }
    }
  }

  // HTML ============

  return (
    <div>
      <Buttons>
        <Button onClick={pageScrol.bind(this, 'prev')}>PREV</Button>
        <Button onClick={pageScrol.bind(this, 'next')}>NEXT</Button>
      </Buttons>
      <Comments comments={comments} />
    </div>
  )
}

// Styled ============

const Buttons = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #150700;
  text-align: center;
`
const Button = styled.button`
  padding: 3px;
  background-color: #150700;
  border: none;
  color: #CC0;
  cursor: pointer;
  :hover{
    background-color: #333300
  }
`
