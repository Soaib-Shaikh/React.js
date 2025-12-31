import React, { memo } from 'react'

const Button = ({increment, decrement}) => {
    console.log('Button component render...');
  return (
    <div>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default memo(Button)
