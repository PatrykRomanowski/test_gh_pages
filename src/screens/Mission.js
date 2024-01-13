import React from "react";

import styles from "./mission.module.css";

const Mission = ({ data }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.description}>{data.missionOurName}</div>
        <div className={styles.bar}></div>
        <div className={styles.contentContainer}>
          <div className={styles.subContainerText}>
            <h2 style={{ fontSize: "50px" }} className={styles.h1style}>
              {data.h1Mission}
            </h2>
            <div className={styles.textContent}>{data.missionDescription}</div>
          </div>
          <div className={styles.photos}>
            <img
              style={{ width: "160%" }}
              src={require("../photos/1.jpg")}
              alt="Mission"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
