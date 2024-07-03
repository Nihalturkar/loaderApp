// import http from "../../services/api";
import http from "../../services/api";
import { ABOUT_US_DATA, DRIVER_POLICY_DATA, PRIVACY_POLICY_DATA, TERMS_CONDITION_DATA, } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const GetPrivacyPolicyApi = (cb) => (dispatch, getState) => {
    cb && cb(true)
    http.get(`policy/getPolicy`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: PRIVACY_POLICY_DATA,
                    payload: response.data.data,
                });

                cb && cb(false)
            } else {


                cb && cb(false)
            }
        })
        .catch(error => {


            cb && cb(false)
        })
};
export const GetDriverPolicyApi = (cb) => (dispatch, getState) => {
    cb && cb(true)
    http.get(`driverPolicy/getPolicyForDriver`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: DRIVER_POLICY_DATA,
                    payload: response.data.data,
                });

                cb && cb(false)
            } else {


                cb && cb(false)
            }
        })
        .catch(error => {


            cb && cb(false)
        })
};

export const GetTermsConditionApi = (cb) => (dispatch, getState) => {
    cb && cb(true)
    http.get(`termAndCondition/getTermAndCondition`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: TERMS_CONDITION_DATA,
                    payload: response.data.data,
                });

                cb && cb(false)
            } else {

                cb && cb(false)
            }
        })
        .catch(error => {

            cb && cb(false)
        })
};



export const GetAboutUsApi = (cb) => (dispatch, getState) => {
    cb && cb(true)
    http.get(`aboutUs/getAbout`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: ABOUT_US_DATA,
                    payload: response.data.data,
                });

                cb && cb(false)
            } else {


                cb && cb(false)
            }
        })
        .catch(error => {


            cb && cb(false)
        })
};