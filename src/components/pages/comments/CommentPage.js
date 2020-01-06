import React, { useState } from 'react';
import axios from 'axios';

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