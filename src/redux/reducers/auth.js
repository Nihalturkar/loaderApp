import { AUTH_TOKEN, CURRENT_LOCATION, LOADING, USER_DATA, USER_ID } from "../types";

const initialState = {
    token: null,
    userId: null,
    loading: false,
    userData: null,
    currentLocation: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case USER_ID:
            return {
                ...state,
                userId: action.payload
            }
        case USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload
            }
        default:
            return state;
    }
}