import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Мои задачи</h1>
      <Link style={linkStyle} to="/">Главная</Link>
      {' | '}
      <Link style={linkStyle}  to="/about">Описание</Link>
      {' | '}
      <Link style={linkStyle}  to="/comments">Комментарии</Link>
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