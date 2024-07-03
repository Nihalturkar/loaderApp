import { HOME_DATA, NEW_ORDER, NOTIFICATION_COUNT, NOTIFICATION_DATA, SUPPORT_DATA, WATCH_ID, } from "../types";

const initialState = {
    homeData: null,
    newOrder: false,
    watchId: null,
    notificationCount: null,
    notificationData: null,
    supportData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOME_DATA:
            return {
                ...state,
                homeData: action.payload
            }
        case NEW_ORDER:
            return {
                ...state,
                newOrder: action.payload
            }
        case WATCH_ID:
            return {
                ...state,
                watchId: action.payload
            }
        case NOTIFICATION_COUNT:
            return {
                ...state,
                notificationCount: action.payload
            }
        case NOTIFICATION_DATA:
            return {
                ...state,
                notificationData: action.payload
            }
            case SUPPORT_DATA:
                return {
                    ...state,
                    supportData: action.payload
                }
        default:
            return state;
    }
}