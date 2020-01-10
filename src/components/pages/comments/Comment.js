import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

const theme = {
  primary: '#150700',
  secondary: '#CC0',
  someDiff: 'green',
}

const defaultTheme = {
  primary: '#FFF',
  secondary: '#000',
  someDiff: 'red',
}

export default function Comment( {full = false, className,  ...props}) {

  let { id, name, email, body } = props.comment

  // HTML ============

  return (
    <ThemeProvider theme={theme}>

      <CommentsBlock className={["my-class-name",className].join(" ")}>
        <Title elemId={id} >
          {id}) {name}
        </Title>
        <Body full={full}>
          {body}
        </Body>
        <Footer color="someDiff">
          Commentator: {email}
        </Footer>
      </CommentsBlock>

    </ThemeProvider >
  )
}

// Validation ============ can be array or object

Comment.propTypes = {
  comment: PropTypes.any.isRequired,
}

// Styled ============

const CommentsBlock = styled.div`
  margin-top: 5px;
  border: 3px solid ${props => props.theme.primary};
`

const Title = styled.div`
  text-align: center;
  background-color: ${defaultTheme.secondary};
  color: ${props => ((props.elemId % 2) !== 0 ? '#F80' : '#CC0')};
`

const Body = styled.div`
  padding: 5px;
  min-height: ${props => (props.full ? '200px' : '50px')};
`



const Footer = styled.div`
  /* background-color: #150700; */
  /* color: #AAA; */
  ${props => props.color && css`
    color: ${props => props.theme[props.color]}
  `}
  background-color: ${props => defaultTheme[props.color]};

  font-size: 12px;
`