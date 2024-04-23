import "../styles/global.css";
import React from "react";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import styles from "../components/HomePage.module.css";


function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar className={styles.sidebar}/>
        <Main className={styles.main}/>
      </div>
    </>
  );
}

export default HomePage;
