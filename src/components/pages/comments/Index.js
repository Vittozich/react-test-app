import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import styled from 'styled-components';
import axios from 'axios';


export default function Index() {

  let [comments, setComments] = useState([]);
  let [startPage, setStartPage] = useState(0);
  let [pageLimit, setPageLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/comments?_start=' + startPage + '&_limit=' + pageLimit)
        .then(res => setComments(res.data))
    };
    fetchData();
  }, [startPage, pageLimit]);

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
        <Button  onClick={pageScrol.bind(this, 'prev')}>PREV</Button>
        <Button  onClick={pageScrol.bind(this, 'next')}>NEXT</Button>
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
