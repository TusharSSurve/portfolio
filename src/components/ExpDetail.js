import React from "react";
import styles from './ExpDetail.module.css';
const ExpDetail = ({ exp }) => {
  return (
    <div className={styles['exp_detail']}>
      <h3 dangerouslySetInnerHTML={{ __html: exp.job_title }} />
      <p dangerouslySetInnerHTML={{ __html: exp.range }} />
      <div>
        <ul>
          {exp.job_points.map(e => {
            return <li key={e.id} dangerouslySetInnerHTML={{ __html: e.point }} />
          })}
        </ul>
      </div>
    </div>);
}
export default ExpDetail;