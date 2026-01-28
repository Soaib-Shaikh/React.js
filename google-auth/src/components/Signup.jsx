import {  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log(result);
      navigate('/add-book')
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <>
       <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button
        onClick={handleGoogleSignup}
        className='btn btn-success'
      >
        Sign in with Google
      </button>
    </div>
    </>
  )
}

export default Signup
