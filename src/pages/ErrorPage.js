import React from "react";
import Footer from '../global/Footer';
import Header from '../global/Header';
import Cursor from '../global/Cursor';
import styles from './ErrorPage.module.css';
import Button from "../global/Button";
const ErrorPage = () => {
  return (
    <>
      <Cursor />
      <Header />
      <main className={styles['error']}>
        <h1>404</h1>
        <p>OOPS! Page Not Found</p>
        <a href="/"><Button className="big">GO TO HOMEPAGE</Button></a>
      </main>
      <Footer />
    </>
  );
}
export default ErrorPage;
