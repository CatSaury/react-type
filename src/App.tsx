import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Robot from "./components/Robot";

import ShoppingCart from "./components/ShoppingCart";
import RobotDisCount from "./components/RobotDisCount";

interface Props {}

interface State {}

const App: React.FC<Props> = (props) => {
  // 替代的是 this.state = { count: 0 }
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // 监控cont值变化，调用的钩子函数
  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  // 组件初始化钩子函数 跟 componentDidMount 同样作用
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      <div>错误信息：{ error } </div>
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map(
            (item: { id: number; name: string; email: string }) => 
              item.id % 2 !== 0 ? (
                <Robot
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                />
              ) : (
                <RobotDisCount
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                ></RobotDisCount>
              )
          )}
        </div>
      ) : (
        <div>正在加载中</div>
      )}
    </div>
  );
};

export default App;
