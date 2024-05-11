import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles['footer-container']}>
        <p className={styles.copyright}><FontAwesomeIcon icon={faCopyright} /> Tushar Surve 2024</p>
        <div className={styles.contact}>
          <ul>
            <li><a href="https://github.com/TusharSSurve"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/surve-tushar/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.kaggle.com/tusharsurve"><FontAwesomeIcon icon={faKaggle} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
