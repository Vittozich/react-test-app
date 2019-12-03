import React from 'react'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Мои задачи</h1>
    </header>
  )
}

const headerStyle = {
  background: '#150700',
  color: '#CC0',
  textAlign: 'center',
  padding: '10px'
}