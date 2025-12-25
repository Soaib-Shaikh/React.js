import React, { useEffect, useState } from 'react'
import SignUp from './components/SignUp'
import { Route, Routes, useNavigate } from 'react-router';
import Header from './components/Header';
import Viewusers from './components/Viewusers';

function App() {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetAllUsers();
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      handleUpdateUser();
    } else {
      handleAddUser();
    }

    setUser({})
    setEditId(null)
  }

  const handleAddUser = async () => {
    try {
      await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...user, id: `${Date.now()}` })
      })
      handleGetAllUsers();
      console.log('Data add successfully.');

    } catch (error) {
      console.log(error.message);
    }
  }


  const handleGetAllUsers = async () => {
    try {
      const res = await fetch('http://localhost:3000/users');
      const result = await res.json();
      setList(result)
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
      })
      handleGetAllUsers();
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleEdit = (id) => {
    const data = list.find(val => val.id == id);
    setUser(data);
    setEditId(id);
    navigate('/')
  }

  const handleUpdateUser = async () => {
    try {
      await fetch(`http://localhost:3000/users/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...user, id: editId })
      })
      handleGetAllUsers();
      navigate('/view-user');

    } catch (error) {
      console.log(error.message);

    }
  }

  const handleCancel = () => {
    setUser({});
    setEditId(null);
    navigate('/view-user');
  };

  return (
    <>
      <Header />
      <Routes>

        <Route index element={
          <SignUp
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            handleCancel={handleCancel}
          />
        }
        />
        <Route path='/view-user' element={
          <Viewusers
            list={list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        }
        />
      </Routes>
    </>
  )
}

export default App
