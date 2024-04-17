import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../global/Footer';
import Header from '../global/Header';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
