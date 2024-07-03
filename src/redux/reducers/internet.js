import { INTERNET_CONNECTION,  } from "../types";

const initialState = {
 internetConnection:true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INTERNET_CONNECTION:
            return {
                ...state,
                internetConnection: action.payload
            }
       


        default:
            return state;
    }
}