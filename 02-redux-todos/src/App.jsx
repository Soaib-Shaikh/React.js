import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './features/userSlice'

function App() {
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(form))
    setForm({})
  }

  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <h2>SignUp </h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} id="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} id="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} id="password" className="form-control" />
        </div>
        <button className="btn btn-outline-primary">Sign Up</button>
      </form>

      <table className='table table-bordered text-center table-responsive caption-top'>
        <caption>
          <h2>USers Data</h2>

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
            users.map((val, index) => {
              const { username, email, password, id } = val;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button type='button' className='btn btn-danger' onClick={() => dispatch(deleteUser(id))}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
