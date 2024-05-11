import React, { useEffect } from 'react';
import Typed from 'typed.js';
import styles from './TypingAnimation.module.css';
const TypingAnimation = () => {

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Data Analyst', 'Chess Enthusiast', 'Gamer'],
      typeSpeed: 200,
      backSpeed: 200,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.text}>
      <span>I'm a </span>
      <span ref={el} className={styles.type} />
    </div>
  );
};
export default TypingAnimation;