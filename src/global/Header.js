import React from "react";
import styles from './Header.module.css'
import resume from '../assets/resume.pdf';
import Button from "./Button";
const Header = () => {
  return (
    <header>
      <div className={styles['logo-container']}>
        <a href="/">Tushar Surve</a>
      </div>
      <div className={styles['navbar-container']}>
        <nav>
          <ul>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">EXPERIENCE</a></li>
            <li><a href="/">WORK</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
          <Button>
            <a href={resume} className={styles.button} target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
export default Header;
