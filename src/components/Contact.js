import React from "react";
import styles from './Contact.module.css';
import Button from "../global/Button";
const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Get in touch</h2>
      <p>Feel free to shoot me an email whether you have a question, just want to chat, I'll do my best to get back to you!</p>
      <a href="mailto:ttusharsurve567@gmail.com" rel="noopener noreferrer" target="_blank"><Button className='big'>
        Say Hello
      </Button></a>
    </section>);
}
export default Contact;