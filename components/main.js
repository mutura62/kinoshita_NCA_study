import React from "react";
import Link from "next/link";
import ThreeMonthTrial from "../components/ThreeMonthTrial";
import Schedule from "../components/Schedule";
import News from "../components/News";
import Conditioning from "../components/Conditioning";
import BottomThreeMonthTrial from "../components/BottomThreeMonthTrial";
import BottomLink from "../components/BottomLink";
import Footer from "../components/Footer";


import styles from "./Main.module.css";
import RedPlate from "./RedPlate";

const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <ThreeMonthTrial />
        <Schedule />
        <News />
        <Conditioning />
        <RedPlate RedPlateNumber="1" />
        <RedPlate RedPlateNumber="2" />
        <RedPlate RedPlateNumber="3" />
        <BottomThreeMonthTrial />
        <div className={styles.linkButtons}>
          <Link href="">
            <BottomLink ButtonNumber="1" />
          </Link>
          <Link href="">
            <BottomLink ButtonNumber="2" />
          </Link>
          <Link href="">
            <BottomLink ButtonNumber="3" />
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
