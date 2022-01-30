import React from "react";
import { Outlet, Navigate } from "react-router-dom";


import { isAuth } from "../../utils";
import styles from "./Home.module.css";
import { Header, Footer, Aside } from "../../components";

interface homePropsType {}

export const Home: React.FC<homePropsType> = () => {

    // 路由拦截
  if (!isAuth()) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return (
      <div className={styles.root}>
        {/* 头部导航 */}
        <Header />
        <div className={styles.container}>
          {/* 左侧菜单 */}
          <Aside />
          {/* 右侧 */}
          <main className={styles.main}>
            {/* 内容区域 */}
            <article className={styles.article}>
              {/* 路由渲染 */}
              <Outlet />
            </article>
            {/* 底部 */}
           <Footer />
         </main>
       </div>
     </div>
  );
};




