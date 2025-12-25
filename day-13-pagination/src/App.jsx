import React, { useEffect, useState } from 'react'
import UserData from './Components/UserData'
import ViewUsers from './Components/ViewUsers'

function App() {

  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [mount, setMount] = useState(false)
  const itemPerPage = 4;

  let indexOfLastItem = currentPage * itemPerPage;
  let indexOfFirstItem = indexOfLastItem - itemPerPage
  let currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  let totalPage = Math.ceil(list.length / itemPerPage)

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('list')) || [];
    setList(oldList)
    setMount(true)
  }, []);

  useEffect(() => {
    if (mount) {
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editId) {

      let newList = [...list, { ...user, id: Date.now() }];
      setList(newList)
    } else {
      const updateUser = list.map((val) => {
        if (val.id == editId) {
          return { ...val, ...user }
        }
        return val;
      })
      setList(updateUser)
    }

    setUser({})
    setEditId(null);
  }

  const handlePage = (page) => {
    setCurrentPage(page);
  }

  const handleEdit = (id) => {
    let editUser = list.find(val => val.id == id);
    setUser(editUser);
    setEditId(id);
  }

  const handleDelete = (id) => {
    const oldData = list.filter(val => val.id != id);
    setList(oldData)
  }

  return (
    <div className='container'>
      <UserData user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ViewUsers
        list={list}
        currentItems={currentItems}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {
            [...Array(totalPage)].map((_, index) => {
              return (

                <button className='btn btn-primary me-2' onClick={() => handlePage(index + 1)}>{index + 1}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
