import React from 'react'

function UserData({user, handleChange, handleSubmit}) {
  return (
    <div className='row justify-content-center mt-5'>
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

                <button type="submit" className="btn btn-outline-success">Sign Up</button>
            </form>
        </div>
      
    </div>
  )
}

export default UserData
