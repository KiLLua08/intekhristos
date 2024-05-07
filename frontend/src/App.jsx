import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import Register from './components/Register';


const App = () => {
  return (
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/books/create' element={<CreateBooks />}/>
         <Route path='/books/delete/:id' element={<DeleteBook />}/>
         <Route path='/books/show/:id' element={<ShowBook />}/>
         <Route path='/books/edit/:id' element={<EditBook />}/>
         <Route path='/register' element={<Register />} />
      </Routes>  
  )
}

export default App

