import React from "react";
import styles from './Work.module.css';
import WorkCard from "./WorkCard";
import data from '../data/work.json';

const Work = () => {
  const projects = data;
  return (
    <div className={styles.work}>
      <h2>Some Things I’ve Built</h2>
      <div className={styles.wcards}>
        {projects.map(proj => {
          return <WorkCard project={proj} key={proj.id} />
        })}
      </div>
    </div>
  );
}
export default Work;