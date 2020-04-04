import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ guest_user_id : us_i, lastReadCommentName : ln}) {
  return (
    <header style={headerStyle}>
      <h1>User id: {us_i}</h1>
      <Link style={linkStyle} to="/">Main</Link>
      {' | '}
      <Link style={linkStyle} to="/about">About test app</Link>
      {' | '}
      <Link style={linkStyle} to="/comments">Comments</Link>
      {' | '}
      <Link style={linkStyle} to="/hook_tests">New hook tests</Link>
      <br />
      {ln !== '' ?
        'last read comment : ' + ln :
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