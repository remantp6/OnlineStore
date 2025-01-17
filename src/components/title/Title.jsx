/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Title.css";

const Title = ({ titleProps }) => {
  return (
    <>
      <div className='title mb-6 md:mb-8 lg:mb-12'>
        <h2 className='text-xl sm:text-2xl font-bold text-center tracking-widest'>{titleProps}</h2>
      </div>
    </>
  )
}

export default Title
