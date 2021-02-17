import React, { useState } from 'react';

// import Header from './Navbar/Header';
import Navbar from './Navbar/NavBar';
import Footer from './Footer/footer';

const Layout = ({ children }) => {

  return (
    <>
      {/* <Header/> */}
      <Navbar/>
      <main className="content">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
