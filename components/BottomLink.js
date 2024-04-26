import Link from "next/link";
import styles from "./BottomLink.module.css";
import Image from "next/image";
import UserAccessButton from "../components/UserAccessButton";

const BottomLink = ({ ButtonNumber }) => {
  let icon;
  let text;
  switch (ButtonNumber) {
    case "1":
      icon = (
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-sharp/24/ff0000/speech-bubble-with-dots.png"
          alt="speech-bubble-with-dots"
        />
      );
      text = "よくある質問";
      break;
    case "2":
      icon = (
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios-filled/50/00B900/line-me.png"
          alt="line-me"
        />
      );
      text = "LINEでお問い合わせ";
      break;
    case "3":
      icon = (
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios/50/FA5252/phone--v1.png"
          alt="phone--v1"
        />
        
      );
      text = "電話でお問い合わせ";
      break;
    default:
  }
  return (
    <>
      <div className={styles.wrapper}>
        {icon}
        <p>{text}</p>
      </div>
    </>
  );
};

export default BottomLink;
