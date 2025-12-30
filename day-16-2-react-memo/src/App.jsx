import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  console.log('Parent component render...');
  
  return (
    <>
      <h2>Parent Component Count: {count}</h2>
      <button type='button' onClick={()=> setCount(count + 1)}>Click</button>

      <ChildComponent/>
    </>
  )
}

export default App
