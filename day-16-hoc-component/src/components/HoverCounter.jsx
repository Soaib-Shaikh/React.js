import React from 'react'
import CounterWrapper from '../hoc/CounterWrapper'

const HoverCounter = ({count, increament}) => {
  return (
    <div>
      <h2>Hover Count: {count}</h2>
        <button type='button' onMouseOver={increament}>Hover</button>
    </div>
  )
}

export default CounterWrapper(HoverCounter)
