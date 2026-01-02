import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [ user,setUser] = useState({});
  const [isAuth, setIsAuth]= useState(false)
  return (
    <UserContext.Provider value={{user,setUser,isAuth,setIsAuth}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
