import "../styles/global.css";
import React from "react";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import styles from "../components/HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.line}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default HomePage;
