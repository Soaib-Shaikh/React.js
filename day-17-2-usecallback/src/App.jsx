import { useCallback, useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    console.log('Increment render...');
    setCount(prev => prev + 1)
  },[])

  const decrement = useCallback(() => {
    console.log('Decrement render...');
    setCount(prev => prev - 1)
  },[])

  return (
    <>
      <h2>Count: {count}</h2>
      <Button increment={increment} decrement={decrement}/>
      
    </>
  )
}

export default App
