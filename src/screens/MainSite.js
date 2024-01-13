import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Jeśli używasz routingu, w przeciwnym razie usuń to

import StartPage from "./StartPage";
import ForParticipants from "./ForParticipants";
import Mission from "./Mission";
import Patrons from "./Patrons";
import Organisers from "./Organisers";
import FAQ from "./faq";
import Agends from "./agends";
import ContactComponent from "./Contact";

import UnitedKingdomIcon from "../icons/united-kingdom.png"; // Poprawiona ścieżka
import PolandIcon from "../icons/poland.png";

import { LANGUAGES } from "../data/languageData";

import styles from "./mainSite.module.css";

const MainSite = () => {
  const [actualLanguage, setActualLAnguage] = useState("PL");
  const [actualData, setActualData] = useState(LANGUAGES[0]);
  const [navStatus, setNavStatus] = useState("startPage");

  const navHandler = (props) => {
    setNavStatus(props);
  };

  const toogleLanguage = () => {
    setActualLAnguage((prevLanguage) => {
      const newLanguage = prevLanguage === "PL" ? "EN" : "PL";
      console.log(newLanguage);

      const index = LANGUAGES.findIndex((item) => {
        console.log(newLanguage);
        console.log(item);
        return item.name === newLanguage;
      });
      setActualData(LANGUAGES[index]);

      return newLanguage;
    });
  };

  return (
    <>
      <nav>
        {navStatus === "startPage" ? (
          <StartPage actualLanguage={actualLanguage} />
        ) : null}
        {navStatus === "forParticipantsPage" ? (
          <ForParticipants data={actualData} />
        ) : null}
        {navStatus === "missionPage" ? <Mission data={actualData} /> : null}
        {navStatus === "patronsPage" ? <Patrons data={actualData} /> : null}
        {navStatus === "organisersPage" ? (
          <Organisers data={actualData} />
        ) : null}
        {navStatus === "contactPage" ? (
          <ContactComponent data={actualData} />
        ) : null}
        {navStatus === "faqPage" ? <FAQ data={actualData} /> : null}
        {navStatus === "coursePage" ? <Agends data={actualData} /> : null}

        <ul className={styles.navList}>
          <li
            onClick={() => navHandler("startPage")}
            className={styles.navItem}
          >
            {actualData.mainPageNav}
          </li>
          <li
            onClick={() => navHandler("missionPage")}
            className={styles.navItem}
          >
            {actualData.misionNav}
          </li>
          <li
            onClick={() => navHandler("forParticipantsPage")}
            className={styles.navItem}
          >
            {actualData.forParticipantsNav}
          </li>
          <li
            onClick={() => navHandler("patronsPage")}
            className={styles.navItem}
          >
            {actualData.patronsNav}
          </li>
          <li
            onClick={() => navHandler("organisersPage")}
            className={styles.navItem}
          >
            {actualData.organisersNav}
          </li>
          <li
            onClick={() => navHandler("coursePage")}
            className={styles.navItem}
          >
            {actualData.courseNav}
          </li>
          <li onClick={() => navHandler("faqPage")} className={styles.navItem}>
            {actualData.faqNav}
          </li>
          <li
            onClick={() => navHandler("contactPage")}
            className={styles.navItem}
          >
            {actualData.contactNav}
          </li>
          <div onClick={toogleLanguage} className={styles.imgContainer}>
            {actualLanguage === "PL" ? (
              <img
                className={styles.img}
                src={UnitedKingdomIcon}
                alt="United Kingdom"
              />
            ) : (
              <img className={styles.img} src={PolandIcon} alt="poland" />
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default MainSite;
