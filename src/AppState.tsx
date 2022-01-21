import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

// 全局状态默认值
export const defaultContextValue: AppStateValue = {
  username: "无名",
  shoppingCart: { items: [] },
};

// 主要负责给子组件传递数据
export const AppContext = React.createContext(defaultContextValue);
// 主要负责给子组件传递方法
export const AppSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
    // 定义状态数据，并增加修改状态的方法
    const [state, setState] = useState(defaultContextValue);

    return(
        // 传递全局状态数据
        <AppContext.Provider value={state}>
            {/* 传递全局状态修改方法 */}
            <AppSetStateContext.Provider value={setState}>
                { props.children }
            </AppSetStateContext.Provider>
        </AppContext.Provider>
    )
};