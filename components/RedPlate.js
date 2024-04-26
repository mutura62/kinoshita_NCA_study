import React from "react";
import styles from "./RedPlate.module.css";
import RedPlateDetail from "../components/RedPlateDetail";
import Image from "next/image";

const RedPlate = ({ RedPlateNumber }) => {
  let message;
  let imagePath;
  let message_detail;

  switch (RedPlateNumber) {
    case "1":
      message = "自宅でプロの指導が 受けられる";
      imagePath = "/images/point_01_top.jpg";
      message_detail = (
        <>
          五輪メダリストもサポートしている
          <br />
          一流のトレーナーが直接指導
        </>
      );
      break;
    case "2":
      message = "スポーツクラブでは教えてくれない身体づくりの基礎を学べる";
      imagePath = "/images/point_02_top.jpg";
      message_detail = (
        <>
          知識がアスリートを強くする
          <br />
          学びと実践を繰り返すカリキュラム
        </>
      );
      break;
    case "3":
      message = "子供の自主性を育む卒業制度";
      imagePath = "/images/point_03_top.jpg";
      message_detail = (
        <>
          自分で自分の身体を整えられる
          <br />
          それがコンディショニングのゴールです
        </>
      );
      break;
    default:
  }

  return (
    <>
      <div className={styles.header}>
        <p1 className={styles.Number}>0{RedPlateNumber}</p1>
        
        <p2>{message}</p2>
      </div>

      <div className={styles.RedPlate}>
        <div className={styles.RedPlate_top}>
          <Image
            className={styles.img}
            src={imagePath}
            alt={`運動する子供${RedPlateNumber}`}
            width={400}
            height={200}
          />
          <p>{message_detail}</p>
        </div>
        <div className={styles.RedPlate_bottom}>
          <RedPlateDetail DetailNumber="1" RedPlateNumber={RedPlateNumber}/>
          <RedPlateDetail DetailNumber="2" RedPlateNumber={RedPlateNumber}/>
        </div>
      </div>
    </>
  );
};

export default RedPlate;
