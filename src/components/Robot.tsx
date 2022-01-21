import React from "react";

import styles from './Robot.module.css';

interface Props {
    id: number,
    name: string,
    email: string
}

interface State {}

const Robot: React.FC<Props> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>作者：</p>
      <button >加入购物车</button>
    </div>
  );
};

export default Robot;
