import React from "react";
import styles from "./footer.module.css";
import LogImg from "../../assets/log.svg";

interface footerPropsType {}

export const Footer: React.FC<footerPropsType> = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>
          <a href="/#">Ant Design</a>
        </span>
        <span>
          <a href="/#">
            <img src={LogImg} alt="" />
          </a>
        </span>
        <span>
          <a href="/#">Ant Design</a>
        </span>
      </p>
      <p>2022 蚂蚁集团体验技术部出品</p>
    </footer>
  );
};
