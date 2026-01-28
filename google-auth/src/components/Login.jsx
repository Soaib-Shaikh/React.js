import React, { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = user

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/add-book"))
      .catch(err => alert(err.message))
  }

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(120deg, #000428, #004e92);
        }

        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-card {
          width: 460px;
          background: #0b0f1a;
          border-radius: 22px;
          padding: 40px;
          position: relative;
          box-shadow: 0 0 40px rgba(0, 140, 255, 0.35);
          color: #fff;
          overflow: hidden;
        }

        .login-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #00eaff, #0066ff, #00eaff);
          z-index: -1;
          filter: blur(12px);
        }

        .login-title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #00eaff;
          letter-spacing: 1px;
        }

        .floating-group {
          position: relative;
          margin-bottom: 28px;
        }

        .floating-group input {
          width: 100%;
          background: transparent;
          border: 1px solid #00eaff70;
          border-radius: 14px;
          padding: 14px 14px;
          color: #fff;
          outline: none;
        }

        .floating-group label {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #aaa;
          font-size: 14px;
          pointer-events: none;
          transition: 0.3s;
          background: #0b0f1a;
          padding: 0 6px;
        }

        .floating-group input:focus + label,
        .floating-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 12px;
          color: #00eaff;
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: none;
          font-weight: 600;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #00eaff, #0066ff);
          color: #000;
          transition: 0.3s;
        }

        .login-btn:hover {
          box-shadow: 0 0 25px #00eaff;
          transform: translateY(-2px);
        }

        .login-footer {
          text-align: center;
          margin-top: 18px;
          font-size: 14px;
        }

        .login-footer a {
          color: #00eaff;
          text-decoration: none;
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">Login to Continue</h2>

          <form onSubmit={handleSubmit}>
            <div className="floating-group">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                value={user.email || ''}
                onChange={handleChange}
              />
              <label>Email Address</label>
            </div>

            <div className="floating-group">
              <input
                type="password"
                name="password"
                required
                placeholder=" "
                value={user.password || ''}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>

            <button className="login-btn">LOGIN</button>
          </form>

          <div className="login-footer">
            New here? <Link to="/">Create account</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
