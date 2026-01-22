import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddBook from './components/AddBook'
import Header from './components/Header'
import ViewBook from './components/ViewBook'
import { db } from './firebase/config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {

  const [book, setBook] = useState({});
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  // Create Book in Firestore
  const createBook = async(book) => {
    try {
      await addDoc(collection(db,"books"),book)
    } catch (error) {
      alert(error)
    }

  }

  // Get All Book in Firestore
   const getAllBooks = async()=>{
      try {
        let newList = [];
        let querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc)=>{
          newList.push({...doc.data(), id : doc.id})
        })
        setList(newList)
      } catch (error) {
        alert(error)
      }
  }

  // Delete Book in Firestore
  const deleteBook = async(id)=>{
    try {
      await deleteDoc(doc(db,"books",id));
      alert("Book Deleted.")
      getAllBooks();
    } catch (error) {
      alert(error)
    }
  }

  // Update Book in Firestore
  const updateBook = async(id,book) => {
    try {
      delete book.id
      await updateDoc(doc(db,"books",id), book);
      alert("Book Updated.")
      getAllBooks();
    } catch (error) {
      alert(error)
    }
  }

 

  useEffect(()=>{
    getAllBooks()
  },[])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBook({...book, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(book.id){
      updateBook(book.id,book)
    }else{
      createBook(book)
    }
    navigate("/view-books")
    getAllBooks();
    setBook({})
  }

  const handelEdit = (id) => {
    const data = list.find(val => val.id == id);
    setBook(data);
    navigate("/")
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/add-book' element={<AddBook book={book} handleSubmit={handleSubmit} handleChange={handleChange}/>}/>
        <Route path='/view-books' element={<ViewBook list={list} deleteBook={deleteBook} handelEdit={handelEdit}/>}/>
      </Routes>
    </>
  )
}

export default App
