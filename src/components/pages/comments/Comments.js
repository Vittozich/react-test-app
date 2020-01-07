import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import Comment from './Comment';

export default function Comments(props) {

  return props.comments.map((comment) => (
    <div key={comment.id}>
      <Link to={'/comments/' + comment.id} className="link-block-hover">
        <Comment key={comment.id}
          comment={comment}
        />
      </Link>
    </div>
  ));
}


Comments.propTypes = {
  comment: PropTypes.object 
}
