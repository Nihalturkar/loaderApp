import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { GET_ALL_ORDER, GET_FILTER_DATA, GET_SINGLE_ORDER, HOME_DATA, LIVE_ORDER, LOADING, SOCKET_DATA } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetUserApi } from "./authAction";
import { GetHomeApi } from "./homeAction";



export const GetOrderApi = (page, filter, startDate, endDate, cb) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    cb && cb(true)
    const userId = await AsyncStorage.getItem("@USER_ID")

    http.get(`orderDetail/getOrderByDriverId/${userId}`, {
        params: {
            page: page,
            filter: filter,
            startDate: startDate,
            endDate: endDate
        }
    })
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_ALL_ORDER,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                cb && cb(false)
            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
            dispatch({
                type: LOADING,
                payload: false,
            });
        })
};


export const GetLiveOrderApi = () => async (dispatch, getState) => {

    const userId = await AsyncStorage.getItem("@USER_ID")

    http.get(`order/liveOrder/${userId}`)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: LIVE_ORDER,
                    payload: response.data.data,
                });

                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
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


export const UpdateOrderStatusApi = (postData, navigation, cond) => async (dispatch, getState) => {
    const { liveOrderData } = getState().order

    console.log("ststts", postData)

    http.put(`orderDetail/updateStatus/${liveOrderData?._id}`, postData)
        .then(response => {
            if (response.data.success) {
                dispatch(GetLiveOrderApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                if (cond && cond == true) {
                    navigation.goBack()
                    dispatch(GetHomeApi())
                }
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


export const AcceptOrderApi = (postData, orderId, cb, navigation) => async (dispatch, getState) => {
    cb && cb(true)

    http.put(`orderDetail/aceptOrder/${orderId}`, postData)
        .then(response => {
            if (response.data.success) {
                dispatch(GetLiveOrderApi())
                dispatch(GetUserApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
                navigation.navigate("Home")
            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
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


export const GetSingleOrderApi = (id, navigation, cb) => async (dispatch, getState) => {

    cb && cb(true)
    http.get(`orderDetail/getOrderByOrderId/${id}`)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_SINGLE_ORDER,
                    payload: response.data.data,
                });
                navigation && navigation.navigate("OrderDetails")
                cb && cb(false)
            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
        })
};

export const GetOrderById = (id, navigation) => async (dispatch, getState) => {

    http.get(`orderDetail/getOrderByOrderId/${id}`)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: SOCKET_DATA,
                    payload: response.data.data,
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


export const CancelOrderApi = (id, navigation, cb) => async (dispatch, getState) => {
    cb && cb(true)

    http.put(`order/cancelOrder/${id}`, { userType: "DRIVER" })
        .then(response => {
            if (response.data.success) {
                navigation.goBack()
                dispatch(GetOrderApi(1, "total"))
                dispatch(GetLiveOrderApi())

                cb && cb(false)
            } else {

                cb && cb(false)
            }
        })
        .catch(error => {

            cb && cb(false)
        })
};



export const GetFilterApi = (page, filter, cb) => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true,
    });
    cb && cb(true)
    const userId = await AsyncStorage.getItem("@USER_ID")

    http.get(`orderDetail/getOrderByDriverId/${userId}`, {
        params: {
            page: page,
            filter: filter,
        }
    })
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_FILTER_DATA,
                    payload: response.data.data,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                cb && cb(false)
            } else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
            dispatch({
                type: LOADING,
                payload: false,
            });
        })
};