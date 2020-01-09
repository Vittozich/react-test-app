import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

//components
import Comment from './Comment';

export default function CommentPage(props) {

    const id = props.id;


    let [comment, setComment] = useState([]);

    useState(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(res => {
                setComment(res.data);
                props.setLastReadCommentName(res.data.name);
            })
    })


    

    return (
        <div>
            <Comment key={comment.id}
                comment={comment}
            />
        </div>
    )
}

// Validation ============ can be array or object

CommentPage.propTypes = {
    id: PropTypes.string.isRequired,
    setLastReadCommentName: PropTypes.func.isRequired,
  }