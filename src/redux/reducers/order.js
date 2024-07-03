import { GET_ALL_ORDER, GET_FILTER_DATA, GET_SINGLE_ORDER, HOME_DATA, LIVE_ORDER, LOADING, MANUALLY_MODAL, SOCKET_DATA, } from "../types";

const initialState = {
    orderData: null,
    manuallyModal: false,
    loading: false,
    liveOrderData: null,
    singleOrderData: null,
    filterData:null,
    socketData:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                orderData: action.payload
            }
        case MANUALLY_MODAL:
            return {
                ...state,
                manuallyModal: action.payload
            }
        case LIVE_ORDER:
            return {
                ...state,
                liveOrderData: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_SINGLE_ORDER:
            return {
                ...state,
                singleOrderData: action.payload
            }
        case GET_FILTER_DATA:
            return {
                ...state,
                filterData: action.payload
            }
        case SOCKET_DATA:
            return {
                ...state,
                socketData: action.payload
            }

        default:
            return state;
    }
}