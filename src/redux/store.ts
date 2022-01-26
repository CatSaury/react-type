import { createStore } from 'redux'

const SHOPPING_CARD = 'shopping_card';


interface shoppingCardStateType {
    shoppingCart: { items: { name: string, id: number }[] }
}

interface shoppingCartActionType {
    type: string,
    payload: { name: string, id: number }
}

const shoppingCardState: shoppingCardStateType = {
    shoppingCart: {
        items: [ { name: 'ckw', id: 1 } ]
    }
}

// 创建一个store仓库,传入对应的reducer
export const store = createStore(shoppingCardReducer);

// 创建购物车reducer
function shoppingCardReducer(state: shoppingCardStateType = shoppingCardState, action: shoppingCartActionType) {
    switch (action.type) {
        case SHOPPING_CARD:
            return { ...state, shoppingCart: {
                items: [...state.shoppingCart.items, action.payload]
            } }
        default:
            return state
    }
    
}




