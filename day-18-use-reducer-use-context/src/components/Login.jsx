import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [data,setData] = useState({})
    const {setUser,setIsAuth} = useContext(UserContext);

    const handleChange = ({target}) =>{
        const {name,value} = target;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(data)
        setIsAuth(true)
    }
    console.log(data);
    

  return (
    <div className='container'>
        <div className="row justify-content-center align-items-center vh-100 ">
            <div className="col-md-6">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" id="username" value={data.username || ''}
                        onChange={handleChange} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" value={data.password || ''}
                        onChange={handleChange} className="form-control" />
                    </div>
                     <button type="submit" className="btn btn-outline-primary">Login</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
