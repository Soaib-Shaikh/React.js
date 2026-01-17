import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, getAllTodos } from './features/todo/thunk'

const App = () => {
  const dispatch = useDispatch()
  const {loading, error} = useSelector(state => state.todos)

  useEffect(()=>{
    dispatch(getAllTodos())
  },[])

  if(loading){
    return (
      <div className='bg-teal-400 flex items-center justify-center h-screen'>Loading.....</div>
    )
  }

  if(error){
    return (
      <div className='bg-red-400 flex items-center justify-center h-screen'>{error}</div>
    )
  }
  return (
    <div>
      <button className='py-2 px-3 m-10 bg-green-700 rounded-2xl hover:bg-green-800 hover: cursor-pointer' onClick={()=> dispatch(createTodo({text: 'Hello Firebase'}))}>Click</button>

      <button className='py-2 px-3 m-10 bg-red-700 rounded-2xl hover:bg-red-800 hover: cursor-pointer' onClick={()=>dispatch(deleteTodo("")) }>Delete</button>
    </div>
  )
}

export default App
