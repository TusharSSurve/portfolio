import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../global/Footer';
import Header from '../global/Header';
import Cursor from '../global/Cursor';

const Root = () => {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
