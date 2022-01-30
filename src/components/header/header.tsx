import React from "react";

import LogImg from "../../assets/log.svg";
import styles from './header.module.css'

interface headerPropsType {}

export const Header: React.FC<headerPropsType> = () => {
  return (
    <>
      <header className={styles.header}>
        {/* log */}
        <div className={styles.log}>
          <a href="/#">
            <img src={LogImg} alt="log" />
            <h1>Ant Design Pro</h1>
          </a>
        </div>
        <nav>导航</nav>
      </header>
    </>
  );
};
