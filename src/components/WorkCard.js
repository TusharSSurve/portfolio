import React from "react";
import styles from './WorkCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';

const WorkCard = ({ project }) => {
  return (
    <div className={styles.wcard}>
      <div className={styles.wbody}>
        <div className={styles.wheader}>
          <time>{project.year}</time>
          <ul className={styles.wlinks}>
            {
              project.wlinks.map(wl => {
                return <li key={wl.id}>
                  <a href={wl.link}>{
                    wl.icon === 'github' ? <FontAwesomeIcon icon={faGithub} /> : <FontAwesomeIcon icon={faKaggle} />
                  }</a>
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