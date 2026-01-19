import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, deleteTodo, getAllTodos, updateTodo } from './features/todo/thunk'

const App = () => {
  const [todo, setTodo] = useState({})
  const dispatch = useDispatch()
  const { loading, error, todos, message } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo.id){
      dispatch(updateTodo(todo))
    }else{
      dispatch(createTodo(todo))
    }
    setTodo({})
  }

  if (loading) {
    return (
      <div className='bg-teal-400 flex items-center justify-center h-screen'>Loading.....</div>
    )
  }

  if (error) {
    return (
      <div className='bg-red-400 flex items-center justify-center h-screen'>{error}</div>
    )
  }
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow">

          <form method='post' onSubmit={handleSubmit}>
            <h2 className="mb-4 font-extrabold text-3xl text-center">
              Todo App
            </h2>

            <div className="mb-4">
              <label className="font-bold block mb-1">Todo</label>
              <input
                type="text"
                className="w-full border rounded border-gray-500 px-3 py-2 outline-none"
                name='text'
                id='text'
                value={todo.text || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-700 text-white rounded-xl hover:bg-green-800"
            >
              {todo.id ? 'Update Todo' : 'Add Todo'}

            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full md:w-3/4 lg:w-2/3">

          <table className="w-full border border-gray-300 text-center rounded-lg overflow-hidden shadow">

            <caption className="caption-top mb-4">
              <h2 className="text-2xl font-extrabold text-gray-800 tracking-wide">
                Todo Data
              </h2>
              <h3 className='text-orange-500 bg-gray-500'>{message}</h3>
            </caption>
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3">Sr. No</th>
                <th className="border p-3">Todo</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos?.map((todo, index) => (
                <tr key={todo.id} className="hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{todo.text}</td>
                  <td className="border p-2">
                    <div className="flex justify-center gap-2">
                      <button type='button' onClick={()=> dispatch(deleteTodo(todo.id))} className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        Delete
                      </button>
                      <button type='button' onClick={()=> setTodo(todo)} className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>

  )
}

export default App
