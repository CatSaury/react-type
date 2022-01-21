import React, { useContext } from "react";
import { AppSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

// 创建高阶组件 高阶组件的定义遵循 with

export const withAddToCard = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  return (props: any) => {
    const setState = useContext(AppSetStateContext);

    const addToCart = (id: number, name: string) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };

    return <ChildComponent {...props} addToCard={addToCart}></ChildComponent>;
  };
};

// 创建自定义hook 自定义hook遵循 use
export const useAddToCard = () => {
  const setState = useContext(AppSetStateContext);

  const addToCard = (id: number, name: string) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCard;
};
