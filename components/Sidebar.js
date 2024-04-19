import Link from "next/link";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import UserAccessButton from '../components/UserAccessButton';


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/NCAlogo.jpg"
          alt="NCAロゴ"
          width={150}
          height={70}
        />
      </div>



      <Link className={styles.sidebarLink} href="">
        <p>TOP</p>

        <p>NCAジュニアアスリートクラブとは</p>

        <p>開発者・有吉与志恵について</p>

        <p>実践しているアスリートたち</p>

        <p>サービス内容</p>

        <p>料金</p>

        <p>利用者の声</p>

        <p>オフィシャルサポーター</p>

        <p>NEWS</p>

        <p>よくあるご質問・お問い合わせ</p>
      </Link>

      <UserAccessButton type="register" />
      <UserAccessButton type="login" />
    </div>
  );
};

export default Sidebar;
