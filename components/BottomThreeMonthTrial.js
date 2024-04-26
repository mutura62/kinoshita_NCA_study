import React from "react";
import Image from "next/image";
import styles from "./BottomThreeMonthTrial.module.css";
import Link from "next/link";

const BottomThreeMonthTrial = () => {
  return (
    <>
      <div className={styles.BottomThreeMonthTrial}>
        <Link href="">
          <Image
            src="/images/traial-banner.jpg"
            alt="三ヶ月無料体験3"
            width={600}
            height={180}
          />
        </Link>
      </div>
    </>
  );
};

export default BottomThreeMonthTrial;
