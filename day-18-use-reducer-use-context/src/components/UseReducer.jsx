import React, { useReducer } from 'react'

const intialState = {
    count : 0
}

const reducer = (state, action) => {
    
    switch(action.type){
        case "increment":
            return { count: state.count + 1}
        case "decrement": 
            return { count : state.count - 1}
        case "reset":
            return {count : 0}
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button type="button" onClick={()=> dispatch({type: "increment"})}>Increment</button>
      <button type="button" onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
      <button type="button" onClick={()=> dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default UseReducer
