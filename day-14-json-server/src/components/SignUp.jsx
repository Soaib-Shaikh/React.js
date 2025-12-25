import React from 'react'
import { useNavigate } from 'react-router'

function SignUp({ user, handleChange, handleSubmit, handleCancel}) {
  
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>

            <h2 className="mb-3">
              {user?.id ? "Update User" : "Sign Up"}
            </h2>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={user.username || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={user.email || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={user.password || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                {user?.id ? "Update User" : "Sign Up"}
              </button>

              {user?.id && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
