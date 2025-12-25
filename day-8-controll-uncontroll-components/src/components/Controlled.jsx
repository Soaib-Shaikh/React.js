import React, { use, useState } from 'react'

const Controlled = () => {

    const [users,setUsers]  = useState([]);
    const [user,setUser] = useState({});

    const handleChange = (e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, {...user, id: Date.now()}]);
        setUser({})
    }
    console.log(users);
    
    

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
            <h2 className='text-center'>Controlled Components</h2>
            <div className="col-md-6">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <h3>Log In</h3>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" id='username' onChange={handleChange} value={user.username || ""} name='username' className='form-control' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id='password' onChange={handleChange} value={user.password || ""} name='password' className='form-control' />
                    </div>
                    <button className="btn btn-outline-success">Log In</button>
                </form>

                <h3 className='mt-5'>All Controlled Users:</h3>
                <pre>
                    {JSON.stringify(users, null, 2)}
                </pre>
            </div>
        </div>
      </div>
    </>
  )
}

export default Controlled
