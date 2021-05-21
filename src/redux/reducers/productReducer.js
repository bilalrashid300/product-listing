import {ActionTypes} from '../constant/action-types'

const initialState = {
    products: []
}

export const productReducer = (state = {initialState}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:        
            return {...state, product: payload}
        case ActionTypes.SELECTED_PRODUCT:        
            return state
        default:
            return state
    }
}