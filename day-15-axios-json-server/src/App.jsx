import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState({});
  const [list,setList] = useState([]);

  useEffect(()=>{
      getAllUsers();
  },[])

  const getAllUsers = async() => {
    try {
      let result = await axios.get('http://localhost:3000/users')
      if(Array.isArray(result.data)){
        setList(result.data)  
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser({...user, [name] : value});
  }

  const createUser = async (user) => {
    try {
        await axios.post('http://localhost:3000/users', user)
        alert('User Create Successfull.')
        getAllUsers();
    } catch (error) {
      console.log(error.mesage);
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user.id){
      updateUser(user);
    }else{
      createUser(user);
    }
    setUser({})
  }

  const updateUser = async(user) => {
    try {
      await axios.patch(`http://localhost:3000/users/${user.id}`, user)
      alert('User Update Successfully.');
      getAllUsers();
    } catch (error) {
      alert(error.message)
    }
  }

  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`)
      alert('User Deleted Successfully.')
      getAllUsers();
    } catch (error) {
      console.log(error.message);
      
    }
  }

  const handleEdit = (id) => {
    let data = list.find(val => val.id == id);
    setUser(data)
  }

  
 
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <h2 className='text-center'>Sign Up</h2>
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" name="username" value={user.username || ''} onChange={handleChange} id="username" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" value={user.email || ''} onChange={handleChange} id="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" value={user.password || ''} onChange={handleChange} id="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <table className='table text-center table-bordered table-striped table-resonsive table-hover caption-top'>
            <caption>
              <h2>Users Data</h2>
            </caption>

            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                list.length > 0 ?
                list.map((value,index)=>{
                  const {username,email,password,id} = value;
                  return(
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button type="button" onClick={()=> handleDelete(id)} className="btn btn-outline-danger me-3">Delete</button>
                        <button type="button" onClick={()=> handleEdit(id)} className="btn btn-outline-warning">Edit</button>
                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={6}>Data Not Found.</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
