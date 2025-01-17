/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Button.css";

const Button = ({onClick, label}) => {
  return (
    <>
      <div className='btn p-0'>
        <button onClick = {onClick}>{label}</button>
      </div>
    </>
  )
}

export default Button
