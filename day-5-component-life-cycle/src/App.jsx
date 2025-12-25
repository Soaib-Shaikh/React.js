import React, { useState } from 'react'
import Demo from './components/Demo';

const App = () => {
  const [count, setCount] = useState(0);
  const [showCom, setShowom] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  }

  const handleShowCom = () => {
    setShowom(true);
  }

  const handleHideCom = () => {
    setShowom(false);
  }

  const handleToggleCom = () => {
    if(showCom){
      setShowom(false);
    }
    else{
      setShowom(true);
    }
  }

  console.log("render...");
  

  return (
    <>
      <h2>Hello React Dev : {count}</h2>
      <button
        onClick={handleCount}
      >
        click me
      </button>

      <button onClick={handleShowCom}>Show</button>
      <button onClick={handleHideCom}>Hide</button>
      <button onClick={handleToggleCom}>Toggle</button>

      {showCom ? <Demo /> : null}
    </>
  )
}

export default App
