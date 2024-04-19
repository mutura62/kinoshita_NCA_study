import React from "react";
import Image from "next/image";
import styles from "./ThreeMonthTrialContainer.module.css";

const ThreeMonthTrial = () => {
  return (
    <div className={styles.ThreeMonthTrialContainer}>
      <Image
        src="/images/ThreeMonthTrial.jpg"
        alt="三ヶ月無料体験"
        width={300}
        height={250}
      />
    </div>
  );
};

export default ThreeMonthTrial;
