import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import Login from '../components/Login';

const UserAuth = (WrapperComonent) => {
  return function EnhanceComponent(props){
 
    const {isAuth} = useContext(UserContext);

    if(!isAuth) return <Login/>

    return <WrapperComonent {...props}/>
  }
}

export default UserAuth
