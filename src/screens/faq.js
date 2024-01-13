import React from "react";

import styles from "./faq.module.css";

const FAQ = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.allDaysContainer}>
        <div className={styles.dayContainer}>
          <div className={styles.dayText}>{data.question}</div>
          <div className={styles.time}>1. {data.faqTitle1}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.faqDescription1}</div>
          </div>
          <div className={styles.time}>2. {data.faqTitle2}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.faqDescription2}</div>
          </div>
          <div className={styles.time}>3. {data.faqTitle3}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.faqDescription3}</div>
          </div>
          <div className={styles.time}>4. {data.faqTitle4}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>{data.faqDescription4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
