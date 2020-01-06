import React from 'react';


export default function About(props) {
  return (
    <React.Fragment>
      <h1>О программе</h1>
      <p>Это тестовая программа на react, которая представляет из себя задачник </p>
      <p>Тестирую на работе и дома</p>
      <p>Это также программа, с помощью которой я составляю методичку для работы с react, в первую очередь, для себя</p>
      <p>Переданная переменная: {props.message}</p>
    </React.Fragment>
  )
}
