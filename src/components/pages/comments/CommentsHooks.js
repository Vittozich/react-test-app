import { useState, useEffect } from 'react';
import axios from 'axios';

export const useComments = (startPage, pageLimit) => {

  let [comments, setComments] = useState([]);
  const fetchData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/comments?_start=' + startPage + '&_limit=' + pageLimit)
      .then(res => setComments(res.data))
  };

  useEffect(() => {
    fetchData();
  });

  return comments;
}
