import React from 'react';
import PropTypes from 'prop-types';

//this components
import Comment from './Comment';

//this hooks
import { useComment } from './CommentHooks.js';


export default function CommentPage({id ,setLastReadCommentName}) {  

    let comment = useComment(id);
    setLastReadCommentName(comment.name);

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