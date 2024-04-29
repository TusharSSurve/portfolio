import React, { useState } from "react";
import styles from './Experience.module.css';
import ExpDetail from "./ExpDetail";
import data from '../data/exp.json';

const Experience = () => {

  const exp = data;
  const [currTab, setCurrTab] = useState(1);

  const toggleTab = (val) => {
    setCurrTab(val);
  }
  return (
    <section className={styles.exp}>
      <h2>Where I've Worked</h2>
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