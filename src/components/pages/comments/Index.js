import React, { useState, useEffect } from 'react'
import Comments from './Comments'
import axios from 'axios';


export default function Index() {

  let [comments, setComments] = useState([]);
  let [startPage, setStartPage] = useState(0);
  let [pageLimit, setPageLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/comments?_start='+startPage+'&_limit='+pageLimit)
      .then(res => setComments(res.data))      
    };
    fetchData();   
  },[startPage, pageLimit]);

  function pageScrol(direction){
    if (direction === 'next'){
      setStartPage(startPage + 10)
    }else{
      if(startPage > 0){      
        setStartPage(startPage - 10)
      }else{
        setStartPage(0)
      } 
    }
  }


  //Styles: ====================================
  
  const buttonsStyle = () => {
    return {    
      paddingTop: '5px',
      paddingBottom: '5px',
      background: '#150700',
      textAlign: 'center'
    }
  }

  const buttonStyle = () => {
    return {
      padding: '3px',
      background: '#150700',
      border: 'none',
      color: '#CC0',
      cursor: 'pointer'
    }
  }


  return (
    <div>
      <div style={buttonsStyle()}>
        <button style={buttonStyle()} onClick={pageScrol.bind(this,'prev')}>PREV</button>
        <button style={buttonStyle()} onClick={pageScrol.bind(this,'next')}>NEXT</button>
      </div>
      <Comments comments={comments} />
    </div>
  )
}
