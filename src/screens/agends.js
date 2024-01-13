import React from "react";

import styles from "./agends.module.css";

const Agends = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.allDaysContainer}>
        <div className={styles.dayContainer}>
          <div className={styles.dayText}>{data.day1Text}</div>
          <div className={styles.time}>1. {data.day1time1}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day1des1}</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day1des2}</div>
          </div>
          <div className={styles.time}>2. {data.day1time2}</div>
          <div className={styles.time}>3. {data.day1time3}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day1des3}</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day1des4}</div>
          </div>
          <div className={styles.time}>4. {data.day1time4}</div>
          <div className={styles.time}>5. {data.day1time5}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}> {data.day1des5}</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}> {data.day1des6}</div>
          </div>
          <div className={styles.time}>6. {data.day1time6}</div>
          <div className={styles.time}>7. {data.day1time7}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day1des7}</div>
          </div>
        </div>

        <div className={styles.dayContainer}>
          <div className={styles.dayText}>{data.day2Text}</div>
          <div className={styles.time}>1. {data.day2time1}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day2des1}</div>
          </div>

          <div className={styles.time}>2. {data.day2time2}</div>
          <div className={styles.time}>3. {data.day2time3}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day2des2}</div>
          </div>

          <div className={styles.time}>4. {data.day2time4}</div>
          <div className={styles.time}>5. {data.day2time5}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day2des3}</div>
          </div>

          <div className={styles.time}>6. {data.day2time6}</div>
          <div className={styles.time}>7. {data.day2time7}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day2des4}</div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.day2des5}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agends;
