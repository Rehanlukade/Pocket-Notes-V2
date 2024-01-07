import React from 'react';
import styles from '../styles/text.module.css';

const Text = ({ time, date, data }) => {
  // Convert the date to the format "7 Jan 2024"
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).replace(/,/, '');

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <p>{data}</p>
      </div>
      <div className={styles.dateSection}>
        <span>{formattedDate}</span>
        <span>&nbsp;&bull;&nbsp;</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Text;
