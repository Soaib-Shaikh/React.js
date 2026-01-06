import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './features/todos/todoSlice';

const App = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setTodo({...todo, [name] : value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(addTodo({
      id: Date.now(),
      ...todo
    }))
    setTodo({})
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2>Signup</h2>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name='username' value={todo.username || ''} onChange={handleChange} className="form-control" id="username" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name='email' value={todo.email || ''} onChange={handleChange} className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name='password' value={todo.password || ''} onChange={handleChange} className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <table className='table table-bordered table-hover table-striped caption-top text-center'>
            <caption>
              <h2>Todo Data</h2>
            </caption>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.length > 0 ?
                todos.map((val,index)=>{
                  const {username, email, password, id} = val;
                  return(
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button type="button" onClick={()=> dispatch(removeTodo(id))} className="btn btn-outline-danger">Delete</button>
                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={5}>Data Not Found.</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
