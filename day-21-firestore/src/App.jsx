import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from './firebase/config';

const App = () => {

  const [list,setList] = useState([])

  const handleSubmit = async() => {
    try {
      const docRef = await addDoc(collection(db,"/users"),{
        username : "Soaib",
        email : "soaib@gmail.com",
        password : "1002"
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
      
    }
  }

  const getUsers = async() => {
    let newList = []
    try {
      const querySnapshot = await getDocs(collection(db,"/users"))
      querySnapshot.forEach((doc)=>{
        newList = [...list,{...doc.data(), id : doc.id}]
        setList(newList)
        
      })
    } catch (error) {
      console.log(error); 
    }
  }

  console.log(list);
  

  return (
    <div>
      <button type='button' className="btn btn-success" onClick={handleSubmit}>Add User</button>
      <button type='button' className="btn btn-primary" onClick={getUsers}>Get User</button>
    </div>
  )
}

export default App
