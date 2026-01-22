import React, { useEffect, useState } from 'react'
import { db } from './firebase/config';
import { addDoc, collection,  getDocs } from 'firebase/firestore';

const App = () => {

  const [user, setUser] = useState({});
  const [list, setList] = useState([])

  const getAllUsers = async()=>{
      let newList = [];
      try {
        const querySnapshot = await getDocs(collection(db,"/users"))
        querySnapshot.forEach((doc)=>{
           newList.push (...list,{...doc.data(), id : doc.id})
        })
        setList(newList);
        console.log(newList);
      } catch (error) {
        console.log(error);
        
      }
    }
  useEffect(()=>{
    getAllUsers();
  },[])

  
  
  const handleChange = async(e)=>{
    try {
      const {name ,value} = e.target;
      setUser({...user, [name] : value})
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
      await addDoc(collection(db,"/users"), user)
      setUser({})
      getAllUsers()
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form action="" method="post" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label" >Username</label>
              <input type="text" name="username" id="username" value={user.username || ''}
              onChange={handleChange} className='form-control'  />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" >Email</label>
              <input type="email" name="email" id="email" value={user.email || ''}
              onChange={handleChange} className='form-control'  />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" >Password</label>
              <input type="password" name="password" id="password" value={user.password || ''}
              onChange={handleChange} className='form-control'  />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-10">
          <div className="table-responsive">
            <table className='table table-bordered table-striped table-hover text-center caption-top'>
              <caption>
                <h2>Users Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Pasword</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((user,index)=>{
                    const {username, email, password, id} = user
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>
                            <button type='button' className="btn btn-outline-danger">Delete</button>
                            <button type='button' className="btn btn-outline-warning">Ediit</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
