import React from 'react';
import Comment from './Comment';


export default function Comments(props) {

  return props.comments.map((comment) => (
    <Comment key={comment.id}
      comment={comment}
    />
  ));
}

