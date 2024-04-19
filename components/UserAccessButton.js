import React from 'react';
import Link from "next/link";
import styles from "./Sidebar.module.css"; // スタイルを適用するため

const UserAccessButton = ({type}) => {
  return (
    <div>
      <Link className={styles.Link} href="/">
        <button>{type === 'register' ? '新規登録' : 'ログイン'}</button>
      </Link>
    </div>
  );
};

export default UserAccessButton;
