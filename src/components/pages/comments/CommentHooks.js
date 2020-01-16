import { useState, useEffect} from 'react';
import axios from 'axios';

export const useComment = (id) => {

  let [comment, setComment] = useState({});

  useState(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
      .then(res => {
        setComment(res.data);      
      })
  })
  return comment;
}

export const useComments = (startPage, pageLimit) => {
  let [comments, setComments] = useState([]);
  
  
  useEffect(() => {     
    const fetchData = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/comments?_start=' + startPage + '&_limit=' + pageLimit)
        .then(res => setComments(res.data))
    };
    fetchData();
  }, [startPage, pageLimit]);

  return comments;
}
