import Link from "next/link";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import UserAccessButton from "../components/UserAccessButton";

const Sidebar = () => {
  const links = [
    { text: "TOP", href: "/top" },
    { text: "NCAジュニアアスリートクラブとは", href: "/about" },
    { text: "開発者・有吉与志恵について", href: "/developer" },
    { text: "実践しているアスリートたち", href: "/athletes" },
    { text: "サービス内容", href: "/services" },
    { text: "料金", href: "/pricing" },
    { text: "利用者の声", href: "/testimonials" },
    { text: "オフィシャルサポーター", href: "/supporters" },
    { text: "NEWS", href: "/news" },
    { text: "よくあるご質問・お問い合わせ", href: "/contact" }
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/NCAlogo.jpg"
          alt="NCAロゴ"
          width={50}
          height={70}
        />
      </div>

      {links.map((link, index) => (
        <Link key={index} className={styles.sidebarLink} href={link.href}>
          <p>{link.text}</p>
        </Link>
      ))}

      <UserAccessButton type="register" />
      <UserAccessButton type="login" />
    </div>
  );
};

export default Sidebar;
