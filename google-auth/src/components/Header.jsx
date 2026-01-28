import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth)
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-info" to="/add-book">
          📚 BookVault
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-book">
                ➕ Add Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view-books">
                📖 View Books
              </NavLink>
            </li>
          </ul>

          <input
            className="form-control w-25 bg-dark text-light border-secondary me-3"
            placeholder="🔍 Search books..."
          />

          {/* ✅ ONLY LOGOUT BUTTON */}
          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Header
