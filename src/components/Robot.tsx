import React, { useContext } from "react";
import { AppContext, AppSetStateContext } from "../AppState";
import styles from './Robot.module.css';

import { withAddToCard } from './AddToCard'

export interface RobotProps {
    id: number,
    name: string,
    email: string
    addToCard: (id: number, name: string) => void
}

interface State {}

// 此处采用高阶组件HOC给组件添加的props
const Robot: React.FC<RobotProps> = ({ id, name, email, addToCard }) => {
  const appContextValue = useContext(AppContext)

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>作者：{ appContextValue.username }</p>
      <button onClick={() => addToCard(id,name) }>加入购物车</button>
    </div>
  );
};

export default withAddToCard(Robot);
