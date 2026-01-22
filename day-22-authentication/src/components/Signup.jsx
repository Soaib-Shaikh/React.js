import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/login"))
      .catch(err => alert(err.message))
  }

  return (
    <>
      <style>{`
        body {
          background: radial-gradient(circle at top, #0f2027, #000);
        }
        .auth-box {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .auth-card {
          width: 420px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 0 30px #00ffff50;
          border: 1px solid #00ffff30;
          color: #fff;
        }
        .auth-title {
          text-align: center;
          color: #00ffff;
          font-weight: 700;
          margin-bottom: 25px;
        }
        .auth-input {
          background: transparent !important;
          border: 1px solid #00ffff60;
          color: #fff !important;
          padding: 12px;
          border-radius: 12px;
        }
        .auth-input:focus {
          box-shadow: 0 0 10px #00ffff;
          border-color: #00ffff;
        }
        .auth-btn {
          width: 100%;
          padding: 12px;
          border-radius: 14px;
          background: linear-gradient(135deg, #00ffff, #0077ff);
          border: none;
          font-weight: bold;
          color: #000;
          transition: 0.3s;
        }
        .auth-btn:hover {
          box-shadow: 0 0 20px #00ffff;
          transform: translateY(-2px);
        }
        .auth-link {
          text-align: center;
          margin-top: 15px;
        }
        .auth-link a {
          color: #00ffff;
          text-decoration: none;
        }
      `}</style>

      <div className="auth-box">
        <div className="auth-card">
          <h2 className="auth-title">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control auth-input mb-3"
              value={user.email || ''}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control auth-input mb-4"
              value={user.password || ''}
              onChange={handleChange}
            />

            <button className="auth-btn">SIGN UP</button>
          </form>

          <div className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
