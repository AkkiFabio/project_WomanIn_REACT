import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from '../src/components/static/footer/Footer'
import Navbar from '../src/components/static/navbar/Navbar'
import UserForm from './pages/userForm/UserForm'
import CategoryList from './components/category/categoryList/categoryList';
import PostList from './components/posts/postList/PostList';
import PostForm from './components/posts/postForm/postForm';
import CategoryForm from './components/category/categoryForm/categoryForm';
import DeleteCategory from './components/category/deleteCategory/deleteCategory';
import DeletePost from './components/posts/deletePost/deletePost';
import { LocalPostOfficeRounded } from '@mui/icons-material';
import AboutUs from './pages/aboutUs/AboutUs';
function App() {
  return (
    <>
      <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<UserForm />}/>
        <Route path='/categorias' element={<CategoryList />} />
        <Route path='/postagens' element={<PostList />} />
        <Route path='/quem-somos' element={<AboutUs />} />
        <Route path='/cadastroPost'element={<PostForm />} />
        <Route path='/cadastroPost/:id' element={<PostForm />} />
        <Route path='/cadastroCategoria' element={<CategoryForm />} />
        <Route path='/deletarPost/:id' element={<DeletePost />} />
        <Route path='/deletarCategoria/:id' element={<DeleteCategory />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

