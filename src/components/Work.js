import React, { useState } from "react";
import styles from './Work.module.css';
import WorkCard from "./WorkCard";
import data from '../data/work.json';
import Button from '../global/Button'
const Work = () => {

  const projects = data;

  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(6);

  const toggleCards = () => {
    setShowAll(!showAll);
    setVisibleCards(showAll ? 6 : projects.length);
  };

  return (
    <section className={styles.work} id="work">
      <h2>Some things I’ve built</h2>
      <div className={styles.wcards}>
        {projects.slice(0, visibleCards).map(proj => {
          return <WorkCard project={proj} key={proj.id} />
        })}
      </div>
      <Button className="big" onClick={toggleCards}>{showAll ? 'Show Less' : 'Show More'}</Button>
    </section>
  );
}
export default Work;