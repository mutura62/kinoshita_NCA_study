import React from "react";
import styles from "./Conditioning.module.css";
import Image from "next/image";

const Conditioning = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        コンディショニングが <br />
        子供たちの未来を変えていく。
      </h1>
      <div className={styles.textcontainer}>
        <p className={styles.paragraph}>
          近年、幼少期からスポーツをはじめる子供たちが増えています。
          <br />
          しかし、成長期の子供たちにとって、スポーツによる身体への負担は
          <br />
          非常に大きく、成長阻害や怪我のリスクと常に隣り合わせです。
          <br />
          <br />
          また、小さいころからの身体の使い方の癖が、
          <br />
          大人になったときに邪魔をして、思うように競技パフォーマンスが
          <br />
          上がらない選手が大勢います。
          <br />
          <br />
          いま、正しいトレーニングを学んでおくことで、子供たちのこの先何
          <br />
          十年の競技生活を守ることができます。
          <br />
          <br />
          身体づくりは、ジュニア期が勝負です。
        </p>

        <Image src="/images/Children.png" alt="こども" width={160} height={400} />
      </div>
    </div>
  );
};

export default Conditioning;
