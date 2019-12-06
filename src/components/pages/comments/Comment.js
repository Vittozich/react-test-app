import React from 'react'
import PropTypes from 'prop-types';

export default function Comment(props) {

  let { id, name, email, body } = props.comment


  const blockStyle = () => {
    return {
      marginTop: '5px',
      border: '3px solid #150700'
    }
  }
  const titleStyle = () => {
    return {
      textAlign: 'center',
      background: '#150700',
      color: '#CC0'
    
    }
  }
  const bodyStyle = () => {
    return {
      padding: '5px'
    }
  }
  const footerStyle = () => {
    return {
      background: '#150700',
      color: '#AAA',
      fontSize: '12px'
    }
  }



  return (
    <div style={blockStyle()}>
      <div style={titleStyle()}>
        {name}
      </div>
      <div style={bodyStyle()}>
        {body}
      </div>
      <div style={footerStyle()}>
        Commentator: {email}
      </div>

    </div>
  )
}


Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}