import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header style={headerStyle}>
      <h1>User id: {props.guest_user_id}</h1>
      <Link style={linkStyle} to="/">Главная</Link>
      {' | '}
      <Link style={linkStyle} to="/about">Описание</Link>
      {' | '}
      <Link style={linkStyle} to="/comments">Комментарии</Link>
      <br />
      {props.lastReadCommentName !== '' ?
        'Последний прочтенный комментарий : ' + props.lastReadCommentName :
        ''}
    </header>
  )
}

const headerStyle = {
  background: '#150700',
  color: '#CC0',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#Fff',
  textDecoration: 'none'
}