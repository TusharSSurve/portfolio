import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={styles.copyright}><FontAwesomeIcon icon={faCopyright} /> Tushar Surve 2024</p>
    </footer>
  );
}
export default Footer;
