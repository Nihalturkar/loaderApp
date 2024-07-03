import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { ADHAR_DETAILS, AUTH_TOKEN, DL_DETAILS, GET_AADGAR_DETAILS, GET_DL_DETAILS, LOADING, REFRAL_APPLY_DATA, USER_DATA, USER_ID, VEHICLE_DETAILS_RC, VEHICLE_EXIST } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import SplashScreen from 'react-native-splash-screen'
import { combineReducers } from "redux";
import { GetApplyRefralApi } from "./documentAction";



export const SendOtpApi = (postData, navigation, cb) => dispatch => {

    cb(true)
    console.log("postData", postData)
    http.post("user/sendOtp", postData)
        .then(response => {
            if (response.data.success) {
                if (response.data.condition) {
                    navigation.navigate('Otp', { mob: postData.mobile, otp: response.data.otp, data: postData, cond: "login" })
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    cb(false)
                } else {
                    navigation.navigate('Register', { mob: postData.mobile, otp: response.data.otp })
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    cb(false)
                }
            } else {
                console.log("response.data.message", response.data)
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb(false)
            }
        })
        .catch(error => {
            console.log("check", error.response.data)
            cb(false)



        })
};

export const LoginApi = (postData, cb) => dispatch => {
    cb(true)
    http.post("driver/logInForDriver", postData)
        .then(async response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                await AsyncStorage.setItem('@USER_TOKEN', response.data.token);
                await AsyncStorage.setItem("@USER_ID", response.data.data._id)
                dispatch({
                    type: AUTH_TOKEN,
                    payload: response.data.token
                })
                dispatch(GetApplyRefralApi())



                cb(false)
            } else {

                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });

                cb(false)
            }
        })
        .catch(error => {

            cb(false)
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });


        })
};

export const ResendOtpApi = (postData, navigation, condition, data) => dispatch => {


    http.post("user/reSendOtp", postData)
        .then(response => {
            if (response.data.success) {
                if (condition == "Register") {
                    // RNToasty.Success({
                    //     title: "OTP send successfully",
                    //     duration: 2,
                    // });

                    navigation.navigate('Otp', { mob: postData.mobile, otp: response.data.otp, data: data, cond: "Register" })
                } else {
                    // RNToasty.Success({
                    //     title: response.data.message,
                    //     duration: 2,
                    // });
                }

            } else {
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {


            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });


        })
};

export const GetUserApi = () => (dispatch, getState) => {

    http.get(`user/getDriverByToken`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: USER_DATA,
                    payload: response.data
                })
                // console.log("message", response.data)
            } else {

                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {

        })
};

export const UpdateDriverCodeApi = (id, cb, cb2) => (dispatch, getState) => {

    cb && cb(true)
    http.put(`driver/generateCodeforDriver/${id}`,)
        .then(response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                cb && cb(false)
                cb2 && cb2(response?.data?.data?.driverCode)
                // console.log("message", response.data)
            } else {
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
        })
};

export const UpdateUserApi = (postData, id, navigation, cb) => async (dispatch, getState) => {
    postData = await objectToFormData(postData)
    cb && cb(true)
    http.put(`user/updateUser/${id}`, postData, {
        enctype: "multipart/form-data",
        headers: {
            "Content-Type": "multipart/form-data",
            "Content-Disposition": "form-data",
        },
    })
        .then(response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                cb && cb(false)
                navigation && navigation.goBack()
            } else {
                cb && cb(false)
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
            cb && cb(false)
        })
};

export const LogoutApi = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: null
    })
    dispatch({
        type: VEHICLE_DETAILS_RC,
        payload: null
    })
    dispatch({
        type: REFRAL_APPLY_DATA,
        payload: null
    })
    dispatch({
        type: ADHAR_DETAILS,
        payload: null
    })
    dispatch({
        type: DL_DETAILS,
        payload: null
    })
    dispatch({
        type: REFRAL_APPLY_DATA,
        payload: null
    })
    dispatch({
        type: VEHICLE_EXIST,
        payload: null
    })
    dispatch({
        type: GET_AADGAR_DETAILS,
        payload: null
    })
    dispatch({
        type: GET_DL_DETAILS,
        payload: null
    })

    dispatch({
        type: USER_DATA,
        payload: null
    })
    AsyncStorage.removeItem('@USER_TOKEN')
    AsyncStorage.removeItem('@USER_ID')

}
