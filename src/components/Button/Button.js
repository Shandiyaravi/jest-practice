import React from 'react'
import { useState } from 'react';


const Button = () => {
const[backgroundColor, setBackgroundColor] = useState('blue');

const handleClick = () => {
  setBackgroundColor('red');
}


  return (
    <div
    data-testid="button"
    style={{
      backgroundColor,
      width: '80px',
      height: '30px',
      padding: '6px',
      fontSize: '16px',
      textAlign: 'center',
      cursor: 'pointer', // Add pointer cursor to indicate clickable
      borderRadius: '4px', // Add border radius for rounded corners
    }} onClick={handleClick}>Click me</div>
  )
}

export default Button