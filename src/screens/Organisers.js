import React from "react";

import styles from "./organisers.module.css";

const Organisers = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.personContainer}>
          <img src={require("../photos/person1.png")} alt="person1" />
          <div className={styles.personName}>Jan Kowalski</div>
          <div className={styles.personDescription}>
            {data.person1Sescription}
          </div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/person2.png")} alt="person2" />
          <div className={styles.personName}>JUNAH ALIBENS</div>
          <div className={styles.personDescription}>
            {data.person2Sescription}
          </div>
        </div>
        <div className={styles.personContainer}>
          <img src={require("../photos/person3.png")} alt="person2" />
          <div className={styles.personName}>ANNA NAWROT</div>
          <div className={styles.personDescription}>
            {data.person3Sescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisers;
