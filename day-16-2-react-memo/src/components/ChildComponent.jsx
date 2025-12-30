import React, { memo } from 'react'

const ChildComponent = () => {
    console.log('Child component render....');
    
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  )
}

export default memo(ChildComponent)
