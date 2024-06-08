import React from 'react'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'
const App = () => {
  const [val, setVal] = useState("")
  const onButtonClick = (buttonName) => {
    if(buttonName === 'C' ){
      setVal("");
    }
    else if(buttonName === '='){
      const newval = eval(val);
      setVal(newval)
    }
    else{
      const newval = val + buttonName;
      setVal(newval)
    }
  }
  return (
    <div className='Calculator'>
      {/* <h1>Calculate Me!</h1> */}
      <Display value={val}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  )
}

export default App
