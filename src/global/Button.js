import React from "react";
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <div className={`${styles.button} ${props.className ? styles.big : ''}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
export default Button;