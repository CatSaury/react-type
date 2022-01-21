import React, { useContext } from "react";
import { AppContext, AppSetStateContext } from "../AppState";
import { useAddToCard } from "./AddToCard";
import styles from './Robot.module.css';

interface Props {
    id: number,
    name: string,
    email: string
}

interface State {}

// 此处不采用HOC高阶组件，采用自定义hook的方式来实现
const RobotDisCount: React.FC<Props> = ({ id, name, email }) => {
  const appContextValue = useContext(AppContext)

  // 调用自定义hook
  const addToCard = useAddToCard()

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{ name }</h2>
      <p>{ email }</p>
      <p>作者：{ appContextValue.username }</p>
      <button onClick={() => addToCard(id,name)}>加入购物车</button>
    </div>
  );
};

export default RobotDisCount;
