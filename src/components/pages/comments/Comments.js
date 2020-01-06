import React from 'react';
import { Link } from 'react-router-dom';

//components
import Comment from './Comment';

export default function Comments(props) {

  return props.comments.map((comment) => (
    <div>
      <Link to={'/comments/' + comment.id} className="link-block-hover">
        <Comment key={comment.id}
          comment={comment}
        />
      </Link>
    </div>
  ));
}

