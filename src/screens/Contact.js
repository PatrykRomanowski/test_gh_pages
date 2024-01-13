import React from "react";

import styles from "./contact.module.css";

const ContactComponent = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.allDaysContainer}>
        <div className={styles.dayContainer}>
          <div className={styles.dayText}>{data.contacth1}</div>
          <div className={styles.time}>1. {data.contactTitle1}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription1}: Jan Kowalski
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription2}: j.kowalski@konferencjauxui.pl
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription3}: +48 123 456 789
            </div>
          </div>
          <div className={styles.time}>2. {data.contactTitle2}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription4}: ul. Marszałkowska 126/134, 00-008
              Warszawa
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription2}: biuro@konferencjauxui.pl
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription3}: +48 123 456 789
            </div>
          </div>
          <div className={styles.time}>3. {data.contactTitle3}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription2}: uczestnik@konferencjauxui.pl
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.bullet}> &#8226;</div>
            <div className={styles.description}>
              {data.contactDescription3}: +48 123 456 789
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
