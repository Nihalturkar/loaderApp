// import http from "../../services/api";
import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { GET_TREANING_VIDEO, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const GetTreaningVideoApi = (cb) => (dispatch, getState) => {
    cb && cb(true)
    http.get(`traneeVideo/getAllTraneeVideo`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_TREANING_VIDEO,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                //     position: 'top'
                // })
                cb && cb(false)
            } else {


                cb && cb(false)
            }
        })
        .catch(error => {


            cb && cb(false)
        })
};