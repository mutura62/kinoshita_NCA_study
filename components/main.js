import React from "react";
import ThreeMonthTrial from "../components/ThreeMonthTrial";
import Schedule from "../components/Schedule";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <ThreeMonthTrial />
        <Schedule />
      </div>
    </>
  );
};

export default Main;
