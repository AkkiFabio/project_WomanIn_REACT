import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from '../src/components/static/footer/Footer'
import Navbar from '../src/components/static/navbar/Navbar'
import UserForm from './pages/userForm/UserForm'

function App() {
  return (
    <>
      <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<UserForm />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

