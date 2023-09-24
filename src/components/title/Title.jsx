import React from 'react';
import "./Title.css";

const Title = ({ titleProps }) => {
  return (
    <>
      <div className='title text-md-center'>
        <h2 className='pb-1 pb-md-3'>{titleProps}</h2>
      </div>
    </>
  )
}

export default Title
