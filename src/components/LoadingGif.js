import React, { Component } from 'react'
import loading5 from './loading5.gif'
import loading6 from './loading6.gif'
import loading7 from './loading7.gif'

const LoadingGif =() => {
    return (
      <div className='flex my-130 justify-center'>
        {/* <img src={loading5}></img> */}
        <img src={loading6} className='content-center'></img>
        {/* <img src={loading7}></img> */}

      </div>
    )
  
}

export default LoadingGif