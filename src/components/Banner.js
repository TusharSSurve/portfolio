import React from "react";
import TypingAnimation from "../global/TypingAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.css';
const Banner = () => {
  const scrollAni = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p>HEY! I AM</p>
        <h1>Tushar Surve</h1>
        <TypingAnimation />
        <FontAwesomeIcon icon={faArrowDownLong} className="fa-bounce" onClick={scrollAni} />
      </div>
    </section>);
}
export default Banner;