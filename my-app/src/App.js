import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import './components/index.css'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import FooterPage from './components/footerPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='ContactPage' element={<ContactPage />} />
        <Route path='AboutPage' element={<AboutPage />} />
          <Route path='ShowBookList' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
        </Routes>
        <FooterPage/>
      </BrowserRouter>
    );
  }
}

export default App;