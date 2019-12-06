import React, { useState } from 'react'
import Comment from './Comment'


import axios from 'axios';

export default function Comments() {


  let [comments, setComments] = useState([]);


  useState(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setComments(res.data))  
  })

  //todo make pagination like https://jsonplaceholder.typicode.com/comments?_start=1&_limit=10
  //Need to create new component, and rename this as Index.

  return comments.map((comment) => (
    <Comment key={comment.id} 
      comment={comment}
    />
  ));

 


}

