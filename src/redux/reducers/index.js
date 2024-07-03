import { combineReducers } from "redux";
import auth from "./auth";
import document from "./document";
import home from "./home";
import bilance from "./bilance";
import order from "./order";
import company from "./company";
import internet from "./internet";
import treaning from "./treaning";




export default combineReducers({
    auth,
    document,
    home,
    bilance,
    order,
    company,
    internet,
    treaning
})
