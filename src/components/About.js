import React, { useEffect } from "react";
import styles from './About.module.css';
import imgd from '../assets/img/profile_desktop.jpg'
import imgm from '../assets/img/profile_mobile.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <div className={styles['about-container']}>
        <div className={styles['about-text']} data-aos="fade-right" data-aos-duration="2000">
          <p>Hey! I'm Tushar Surve, a Software Developer at <a href="https://www.tcs.com">TCS</a>. My journey into the world of coding began in 2015, driven by my passion for <mark>Mathematics</mark>. It was during this time that I discovered the power of programming, realizing how it simplifies complex problems, which instantly captivated my interest in the field.</p>
          <p>Today, I thrive in diverse technical roles, leveraging my expertise in <mark>Frontend Development</mark> and my skills in <mark>Data Analysis</mark>. Currently, I'm working on several exciting projects related to Data Analysis and Web Development.</p>
          <p>When I'm not coding, you can find me lost in the pages of a good book, honing my strategic skills on the <a href="https://www.chess.com/member/skull2049">chessboard</a>, exploring new trekking trails, or checking off another item on my bucket list.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>Python</li>
            <li>JavaScript (ES6+)</li>
            <li>Pandas</li>
            <li>React</li>
            <li>OpenCV</li>
            <li>SQL</li>
            <li>Numpy</li>
            <li>Tableau</li>
          </ul>
        </div>
        <div className={styles['about-img']} data-aos="fade-left" data-aos-duration="2000">
          <img src={imgd} alt="Profile" />
          <img src={imgm} alt="Profile" />
        </div>
      </div>
    </section>);
}
export default About;