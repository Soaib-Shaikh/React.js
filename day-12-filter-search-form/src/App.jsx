import React, { useEffect, useState } from 'react'
import UserForm from './Components/UserForm'
import ViewUser from './Components/ViewUser'

function App() {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [mount, setMount] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
      let newUsers = JSON.parse(localStorage.getItem('list')) || [];
      setList(newUsers);
      setData(newUsers);
      setMount(true);
  },[])

  useEffect(()=>{
    if(mount){
      localStorage.setItem('list', JSON.stringify(list))
    }
  },[list])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!editId){

      let newList = [...list, { ...user, id: Date.now() }]
  
      setList(newList);
      setData(newList);
    }else{
      let updateList = list.map((value)=>{
        if(value.id == editId){
          return {...value, ...user}
        }
        return value;
      })

      setList(updateList)
      setData(updateList)
    }

    setUser({})
    setEditId(null)
  }

  const handleSearch = (e) => {
    const {value} = e.target;

    let newData = list.filter((item) => {
      if(item.username.toLowerCase().includes(value.toLowerCase())){
        return item;
      }else if (item.email.toLowerCase().includes(value.toLowerCase())){
        return item;
      }
    })
    if(newData.length > 0){
      setData(newData);
    }else{
      setData(list);
    }
  }

  const handleDelete = (id) => {
      let newList = list.filter(val => val.id != id);
      setList(newList);
      setData(newList)
  }

  const handleEdit = (id) => {
    let editList = list.find(val=> val.id == id);
      setUser(editList);
      setEditId(id)
  }
  

  return (
    <div className='container'>
      <UserForm 
        user={user} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <ViewUser 
        users={data} 
        handleSearch={handleSearch} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  )
}

export default App
