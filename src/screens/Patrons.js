import React from "react";

import styles from "./patrons.module.css";

const Patrons = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.personContainer}>
          <img src={require("../photos/OIG.jpg")} alt="patrons1" />
          <div className={styles.personName}>AMB</div>
          <div className={styles.personDescription}>{data.patDescription1}</div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/PAT1.jpg")} alt="person2" />
          <div className={styles.personName}>GAMES WORLD</div>
          <div className={styles.personDescription}>{data.patDescription2}</div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/PAT2.jpg")} alt="person2" />
          <div className={styles.personName}>GRAPH</div>
          <div className={styles.personDescription}>{data.patDescription3}</div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/PAT3.jpg")} alt="person2" />
          <div className={styles.personName}>GAME INSIDE</div>
          <div className={styles.personDescription}>{data.patDescription4}</div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/PAT4.jpeg")} alt="person2" />
          <div className={styles.personName}>INTEN</div>
          <div className={styles.personDescription}>{data.patDescription5}</div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/PAT5.jpeg")} alt="person2" />
          <div className={styles.personName}>SMART DEV</div>
          <div className={styles.personDescription}>{data.patDescription6}</div>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
