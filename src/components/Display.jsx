import React from 'react'
import './Display.css'
const Display = ({value}) => {
 
  return (
   
      <input className='t-ext' type="text" value={value} readOnly />
   
  )
}

export default Display
