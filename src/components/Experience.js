import React, { useState, useEffect } from "react";
import styles from './Experience.module.css';
import ExpDetail from "./ExpDetail";
import data from '../data/exp.json';
import AOS from 'aos';
import "aos/dist/aos.css";

const Experience = () => {

  const exp = data;
  const [currTab, setCurrTab] = useState(1);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleTab = (val) => {
    setCurrTab(val);
  }
  return (
    <section className={styles.exp} data-aos="zoom-in-up" id="experience">
      <h2>Where I've worked</h2>
      <div className={styles.tab}>
        <div className={styles.joblist}>
          {exp.map(e => {
            return <button onClick={() => toggleTab(e.id)} className={currTab === e.id ? styles.active : ""} key={e.id}>{e.job}</button>
          })}
        </div>
        <div className={styles.jobdescription}>
          {currTab === 1 && <ExpDetail exp={exp[0]} />}
          {currTab === 2 && <ExpDetail exp={exp[1]} />}
          {currTab === 3 && <ExpDetail exp={exp[2]} />}
        </div>
      </div>
    </section>);
}
export default Experience;