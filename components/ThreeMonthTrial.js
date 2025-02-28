import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./ThreeMonthTrialContainer.module.css";
import Swiper from "swiper"; // Swiperライブラリのインポート
import 'swiper/css';

const ThreeMonthTrial = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
        loop: true, //最後までいったら最初から デフォルトはfalse
		//ドットを指定
		pagination: {
			el: ".swiper-pagination",
			clickable: true //ドットのクリックを有効化
		},
		//ページャーを指定
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
    });
  }, []);

  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className={styles.ThreeMonthTrialContainer}>
              <Image
                src="/images/ThreeMonthTrial.jpg"
                alt="三ヶ月無料体験1"
                width={600}
                height={450}
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={styles.ThreeMonthTrialContainer}>
              <Image
                src="/images/ThreeMonthTrial.jpg"
                alt="三ヶ月無料体験2"
                width={600}
                height={450}
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className={styles.ThreeMonthTrialContainer}>
              <Image
                src="/images/ThreeMonthTrial.jpg"
                alt="三ヶ月無料体験3"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
      </div>

      <div className={styles.WorldLevel}>
        <span className={styles.gold}>世界レベル</span>
        <span>のトレーニングを体験！</span>
      </div>
      
    </>
  );
};

export default ThreeMonthTrial;
