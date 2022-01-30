import { stat } from 'fs';
import { createStore, combineReducers } from 'redux'

export const ADD_SHOPPING_CARD = 'add_shopping_card';
export const DELETE_SHOPPING_CARD = 'delete_shopping_card';
export const EMPTY_SHOPPING_CARD = 'empty_shopping_card';
export const CHANGE_NAME = 'change_name'


interface shoppingCardStateType {
    shoppingCart: { items: { name: string, id: number }[] }
}

interface addShoppingCartActionType {
    type: string,
    payload: { name: string, id: number }
}

interface deleteShoppingCartActionType {
    type: string,
    payload: { id: number, name: string }
}

interface emptyShoppingCardActionType {
    type: string,
    payload: any
}


export interface nameActionType {
    type: string,
    payload: string
}


interface nameStateType {
    name: string
}

export const addShoppingCardActionCreator = (
    id: number,
    name: string
): addShoppingCartActionType => {
    return {
        type: ADD_SHOPPING_CARD,
        payload: { id, name }
    }
}

export const deleteShoppingCartActionCreator = (
    id: number, 
    name: string
): deleteShoppingCartActionType => {
    return {
        type: DELETE_SHOPPING_CARD,
        payload: { id, name }
    }
}

export const emptyShoppingCardActionCreator = (): emptyShoppingCardActionType => {
    return {
        type: EMPTY_SHOPPING_CARD,
        payload: {}
    }
}


const shoppingCardState: shoppingCardStateType = {
    shoppingCart: {
        items: [{ name: 'ckw', id: 1 }]
    }
}

const nameState: nameStateType = {
    name: 'ckw'
}

type shoppingCardActionType = addShoppingCartActionType | emptyShoppingCardActionType;

function nameReducer(state: nameStateType = nameState, action:nameActionType) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }    
        default:
            return state;
    }

    
}

// 创建购物车reducer
function shoppingCardReducer(state: shoppingCardStateType = shoppingCardState, action: shoppingCardActionType) {
    switch (action.type) {
        case ADD_SHOPPING_CARD:
            return {
                ...state, shoppingCart: {
                    items: [...state.shoppingCart.items, action.payload]
                }
            }
        case DELETE_SHOPPING_CARD:
            return {
                ...state, shoppingCart: {
                    items: state.shoppingCart.items.filter(item => item.id !== action.payload.id)
                }
            }
        case EMPTY_SHOPPING_CARD:
            return {
                ...state, shoppingCart: {
                    items: []
                }
            }
        default:
            return state
    }

}

const reducerList = combineReducers({
    shoppingCardReducer,
    nameReducer
})

// 创建一个store仓库,传入对应的reducer
export const store = createStore(reducerList);

export type RootState = ReturnType<typeof store.getState>



