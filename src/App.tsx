import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from '../src/components/static/footer/Footer'

function App() {
  return (
    <>
      <Router>
      <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path='/home' element={<Home />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
