import React from 'react';
import "./Title.css";

const Title = ({ titleProps }) => {
  return (
    <>
      <div className='title mb-4 lg:mb-10'>
        <h2 className='text-2xl font-bold text-center tracking-widest'>{titleProps}</h2>
      </div>
    </>
  )
}

export default Title
