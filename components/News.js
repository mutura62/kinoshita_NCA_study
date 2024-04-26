import React, { useEffect } from "react";
import styles from "./News.module.css";

import NewsDetail from "../components/NewsDetail";

const News = () => {
  return (
    <>
      <h1>NEWS</h1>
      <NewsDetail className={styles.detail}/>
      <NewsDetail className={styles.detail}/>

      <div className={styles.index}>
        過去の一覧▶
      </div >
    </>
  );
};

export default News;
