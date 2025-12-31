import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [count, setCount] = useState(0);

  
  const sum = useMemo(() => {
    console.log('re renderr....');
    return num1 + num2;
  },[num1, num2])

  return (
    <>
      <input type="number" onChange={(e)=> setNum1(Number(e.target.value))} value={num1} name="" id="" />
      <br />
      <input type="number" onChange={(e)=> setNum2(Number(e.target.value))} value={num2} name="" id="" />
      <h2>Sum: {sum}</h2>

      <h2>Count: {count}</h2>
      <button type="button" onClick={()=> setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
