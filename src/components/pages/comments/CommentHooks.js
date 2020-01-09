import { useState } from 'react';
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
