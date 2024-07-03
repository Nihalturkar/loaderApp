import { GET_TREANING_VIDEO,  } from "../types";

const initialState = {
 getTreaningVideo:true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TREANING_VIDEO:
            return {
                ...state,
                getTreaningVideo: action.payload
            }
       


        default:
            return state;
    }
}