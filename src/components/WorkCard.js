import React, { useEffect } from "react";
import styles from './WorkCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Tableau } from '../assets/icons/tableau.svg'
import AOS from 'aos';
import "aos/dist/aos.css";

const WorkCard = ({ project }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wcard} data-aos="fade-up">
      <div className={styles.wbody}>
        <div className={styles.wheader}>
          <time>{project.year}</time>
          <ul className={styles.wlinks}>
            {
              project.wlinks.map(wl => {
                return <li key={wl.id}>
                  <a href={wl.link} target="_blank" rel="noopener noreferrer">
                    {wl.icon === 'github' && <FontAwesomeIcon icon={faGithub} />}
                    {wl.icon === 'kaggle' && <FontAwesomeIcon icon={faKaggle} />}
                    {wl.icon === 'tableau' && <Tableau className={styles.tableau} />}
                  </a>
                </li>
              })
            }
          </ul>
        </div>
        <h3>{project.title}</h3>
        <p>{project.para}</p>
      </div>
      <div className={styles.wfooter}>
        <ul className={styles.wlangs}>
          {
            project.langs.map(wl => {
              return <li key={wl.id}>
                {wl.lang}
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}
export default WorkCard;