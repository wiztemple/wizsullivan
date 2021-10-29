import React from 'react';
import styles from './Experience.module.css';

const Experience = ({time, jobTitle, company}) => {
  return (
    <div className={styles.experience}>
      <span>{time}</span>
      <h1>{jobTitle}</h1>
      <p>{company}</p>
    </div>
  )
}

export default Experience;
