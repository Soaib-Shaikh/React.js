import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserAuth from '../hoc/UserAuth';

const Home = () => {
    const { user, setIsAuth } = useContext(UserContext);
    return (
        <div className=' vh-100 d-flex text-center justify-content-center align-items-center flex-column'>
            <h2>Welcome to Home Page</h2>
            <h2>{user.username}</h2>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                    setIsAuth(false)
                }}
            >
                Logout
            </button>

        </div>
    )
}

export default UserAuth(Home)
