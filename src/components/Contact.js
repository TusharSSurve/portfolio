import React from "react";
import styles from './Contact.module.css';
import Button from "../global/Button";
const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Get In Touch</h2>
      <p>Feel free to shoot me an email whether you have a question, just want to chat, I'll do my best to get back to you!</p>
      <Button className='big'>
        <a href="mailto:ttusharsurve567@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
      </Button>
    </section>);
}
export default Contact;