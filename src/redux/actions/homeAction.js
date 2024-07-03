import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { HOME_DATA, LOADING, NEW_ORDER, NOTIFICATION_COUNT, NOTIFICATION_DATA, SOCKET_DATA, SUPPORT_DATA, WATCH_ID } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetUserApi } from "./authAction";



export const DriverOnlineStatusApi = (cb, cb2) => async (dispatch, getState) => {
    cb2 && cb2(true)
    const { userData } = getState().auth
    http.put(`vehicleDetail/driverStatusOnAndOff/${userData?.drivingLicenceData?.vehicleId?._id}`,)
        .then(response => {
            if (response.data.success) {
                cb && cb(response.data.online)
                dispatch(GetUserApi())
                console.log("driverState", response.data)
                cb2 && cb2(false)
            } else {
                cb2 && cb2(false)
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            // console.log("onlone", error.response.data)
            cb2 && cb2(false)
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
            // cb&&cb(false)
        })
};

export const GetHomeApi = () => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    const { userData } = getState().auth
    http.get(`order/orderBydriverIdHome/${userId}`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: HOME_DATA,
                    payload: response.data.data,
                });
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
                dispatch(GetUserApi())
            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false,
            });
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
        })
};


export const SetNewOrder = () => async (dispatch, getState) => {
    dispatch({
        type: NEW_ORDER,
        payload: true
    })
}



export const SetSocketData = (data = null) => async (dispatch, getState) => {
    dispatch({
        type: SOCKET_DATA,
        payload: data
    })
}

export const SetWatchId = (id = null) => async (dispatch, getState) => {
    dispatch({
        type: WATCH_ID,
        payload: id
    })
}


export const GetNotificationContApi = () => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    http.post(`notification/seenCount/${userId}?userType=DRIVER`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: NOTIFICATION_COUNT,
                    payload: response.data.count,
                });
            } else {
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
        })
};
export const GetNotificationDataApi = () => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    http.get(`notification/getNotificationByUserId/${userId}?userType=DRIVER`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: NOTIFICATION_DATA,
                    payload: response.data.data,
                });
                dispatch(GetNotificationContApi())
            } else {
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
        })
};

export const GetAllSupportApi = () => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    http.get(`support/getAllSupport`,)
        .then(response => {
            if (response?.data?.status) {
                dispatch({
                    type: SUPPORT_DATA,
                    payload: response?.data?.data,
                });
            } else {
                dispatch({
                    type: SUPPORT_DATA,
                    payload: null,
                });
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
            }
        })
        .catch(error => {
            dispatch({
                type: SUPPORT_DATA,
                payload: null,
            });
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};