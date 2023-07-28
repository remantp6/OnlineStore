import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/toast-message-css/Custom.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetailsPage from './pages/ProductDetailsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart/items" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
