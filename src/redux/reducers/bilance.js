import { HOME_DATA, TRANSACTION_DATA, } from "../types";

const initialState = {
    transactionData: null,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTION_DATA:
            return {
                ...state,
                transactionData: action.payload
            }
      
        default:
            return state;
    }
}