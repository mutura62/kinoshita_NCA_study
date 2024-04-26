import React from "react";
import Image from "next/image";
import styles from "./RedPlateDetail.module.css";

// Propsをオブジェクトとして受け取る
const RedPlateDetail = ({ DetailNumber, RedPlateNumber }) => {
  let img_src;
  let text;

  // RedPlateNumberに基づいてswitch文を実行
  switch (RedPlateNumber) {
    case "1":
      img_src =
        DetailNumber === "1"
          ? "/images/point_01_1.jpg"
          : "/images/point_01_2.jpg";
      text =
        DetailNumber === "1"
          ? "一人ひとりの姿勢や動きをチェック！オンラインでも細やかな指導を実現します"
          : "成長していく様子を間近で見られる！時には保護者の方のサポートも";
      break;
    case "2":
      img_src =
        DetailNumber === "1"
          ? "/images/point_02_1.jpg"
          : "/images/point_02_2.jpg";
      text =
        DetailNumber === "1"
          ? "身体づくりは土台が大切！基本の姿勢や動きが出来てこそ技術が伸びます"
          : "身体の仕組みを知ることで怪我の予防やパフォーマンスアップに繋がる";

      break;
    case "3":
      img_src =
        DetailNumber === "1"
          ? "/images/point_03_1.jpg"
          : "/images/point_03_2.jpg";
      text =
        DetailNumber === "1"
          ? "小学生ひとりでもできるので自ら進んでトレーニングするお子さんが多数！"
          : "セルフコンディショニングを身につけたらクラブは卒業！一生使えると知識と手法が手に入ります";
      break;
    default:
  }
  return (
    <div className={styles.RedPlateDetail}>
      <Image src={img_src} width={90} height={90} />
      <p>{text}</p>
    </div>
  );
};

export default RedPlateDetail;
