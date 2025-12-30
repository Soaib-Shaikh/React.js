import React from 'react'
import CounterWrapper from '../hoc/CounterWrapper'

const Counter = ({count, increament}) => {
  return (
    <div>
        <h2>Count: {count}</h2>
        <button type='button' onClick={increament}>Click</button>
    </div>
  )
}

export default CounterWrapper(Counter)
