/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Layout.js
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
