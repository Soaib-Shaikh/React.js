import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/user/userSlice';

const Signup = () => {

    const [user,setUser] = useState({});
    const dispatch = useDispatch()
    const {editUser, editId} = useSelector(state => state.users)

    useEffect(()=>{
        if(editId){
            setUser(editUser)
        }
    },[editUser, editId])

    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addUser(user));
        setUser({})
    }

  return (
    <div className='container'>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
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
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
