import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

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

  // HTML ============

  return (
    <CommentsBlock>
      <Title>
        {id}) {name}
      </Title>
      <Body>
        {body}
      </Body>
      <Footer>
        Commentator: {email}
      </Footer>
    </CommentsBlock>
  )
}

// Validation ============

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

// Styled ============

const CommentsBlock = styled.div`
  margin-top: 5px;
  border: 3px solid #150700;
`

const Title = styled.div`
  text-align: center;
  background-color: #150700;
  color: #CC0;
`

const Body = styled.div`
  padding: 5px;
`

const Footer = styled.div`
  background-color: #150700;
  color: #AAA;
  font-size: 12px;
`