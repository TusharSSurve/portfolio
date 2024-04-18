import React, { useState, useEffect } from "react";
import styles from './Header.module.css'
import resume from '../assets/resume.pdf';
import Button from "./Button";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(window.pageYOffset > 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles['header']} ${isScrolled ? styles['sticky'] : ''}`}>
      <div className={styles['header-container']}>
        <div className={styles['logo-container']}>
          <a href="/">TUSHAR SURVE</a>
        </div>
        <div className={styles['navbar-container']}>
          <nav>
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#work">WORK</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
            <Button>
              <a href={resume} className={styles.button} target="_blank" rel="noopener noreferrer">RESUME</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
