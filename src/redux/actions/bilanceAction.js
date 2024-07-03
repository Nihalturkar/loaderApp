import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { HOME_DATA, TRANSACTION_DATA } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetUserApi } from "./authAction";



export const GetTransactionApi = (page, cb) => async (dispatch, getState) => {
    cb && cb(true)
    const userId = await AsyncStorage.getItem("@USER_ID")
    // console.log(userId)
    const { transactionData } = getState().bilance
    // console.log(transactionData)
    http.get(`transaction/getAllTransactionByUserId/${userId}?page=${page}`,)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.data)
                if (page > 1) {
                    dispatch({
                        type: TRANSACTION_DATA,
                        payload: {
                            data: [...transactionData.data, ...response.data.data],
                            page: response.data.page,
                            total: response.data.total
                        },
                    });
                    // console.log("data"[...transactionData.data, response.data.data].length,)
                } else {
                    dispatch({
                        type: TRANSACTION_DATA,
                        payload: response.data,
                    });
                }
                cb && cb(false, "success")
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
                cb && cb(false)
            }
        })
        .catch(error => {
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
            cb && cb(false)
        })
};


export const AddAmountApi = (postData, cb, cb2) => async (dispatch, getState) => {
  console.log("AddAmountApi: ", postData)
    const userId = await AsyncStorage.getItem("@USER_ID")

    http.post(`transaction/addMoneyForDriver/${userId}`, {},  {
        params: postData
    })
    .then(response => {
        if (response.data.success) {
                // console.log( "success:" ,response.data.success)
                dispatch(GetTransactionApi())
                dispatch(GetUserApi())
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
                cb && cb(null)
                cb2 && cb2(true)
            } else {

                RNToasty.Info({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        
        // .then(response => {
        //     const config = response.config;
        //     const params = config.params;
        //     console.log('API Response:', response.data);
        //     // console.log("Response: ", response);
        //     if (response.status === 200) {
        //         dispatch(GetTransactionApi(1))
        //         dispatch(GetUserApi());
        //         cb && cb(null);
        //         cb2 && cb2(true);
        //         // return response.data;
        //     } else {
        //         RNToasty.Info({
        //             title: response.data.message,
        //             duration: 2,
        //         });
        //     }
        // })
        .catch(error => {

            RNToasty.Error({
                title: error.response.data.message,
                duration: 2,
            });
        })
};


export const UpdateUpiApi = (postData, cb) => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    console.log("ppp", userId)
    cb && cb(true)
    http.post(`upi/createAndUpdateUpi`, { ...postData, userId: userId })
        .then(response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
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


export const WithdrawRequestApi = (amount, cb) => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    cb && cb(true)
    http.post(`withdrawal/withdrawalAmount/${userId}`, { amount: amount })
        .then(response => {
            if (response.data.success) {
                dispatch(GetUserApi())
                dispatch(GetTransactionApi())
                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
                cb && cb(false, 'success')
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