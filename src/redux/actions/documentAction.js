import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { AUTH_TOKEN, CITY_DATA, GET_AADGAR_DETAILS, GET_DL_DETAILS, LOADING, REFRAL_APPLY_DATA, USER_DATA, USER_ID, VEHICLE_DETAILS_RC, VEHICLE_EXIST, VEHICLE_TYPE_DATA } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import objectToFormData from "../../services/objectToFormData";
import { GetUserApi } from "./authAction";


export const AdharDetailsApi = (postData, cb, cb2, navigation) => async (dispatch, getState) => {
    cb && cb(true)
    const adharId = postData?.aadharId
    postData = await objectToFormData(postData)
    const { internetConnection } = getState().internet

    if (internetConnection) {
        http.post("aadharDetail/createAadharDetails", postData, {
            enctype: "multipart/form-data",
            headers: {
                "Content-Type": "multipart/form-data",
                "Content-Disposition": "form-data",
            },
        })
            .then(response => {
                if (response.data.success) {
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    cb && cb(false)
                    if (adharId) {
                        navigation && navigation.goBack()
                    } else {
                        cb2 && cb2("DL")
                    }
                    dispatch(GetUserApi())
                    dispatch(GetAadharDetailsApi())
                } else {
                    dispatch({
                        type: LOADING,
                        payload: false,
                    });
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

    } else {
        cb && cb(false)
        RNToasty.Info({
            title: "Please check internet connection",
            duration: 2,
            position: 'top'
        });
    }
};

export const DLDetailsApi = (postData, navigation, cb) => async (dispatch, getState) => {
    cb && cb(true)
    postData = await objectToFormData(postData)
    const { internetConnection } = getState().internet

    if (internetConnection) {
        http.post("vehicleDetail/createDrivingLicenseDetails", postData, {
            enctype: "multipart/form-data",
            headers: {
                "Content-Type": "multipart/form-data",
                "Content-Disposition": "form-data",
            },
        })
            .then(response => {
                if (response.data.success) {
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    navigation.goBack()
                    cb && cb(false)
                    dispatch(GetUserApi())
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
                // console.log("dl", error.response.data)
                RNToasty.Normal({
                    title: error.response.data.message,
                    duration: 2,
                });
            })
    } else {
        cb && cb(false)
        RNToasty.Info({
            title: "Please check internet connection",
            duration: 2,
            position: 'top'
        });
    }
};

export const VehicleDetailsApi = (postDataIn, navigation, cb) => async (dispatch, getState) => {
    cb && cb(true)
    let postData = objectToFormData(postDataIn)
    postDataIn.vehicleImage.map((item, index) => {
        postData.append("vehicleImage", item)
    })
    const { internetConnection } = getState().internet

    if (internetConnection) {
        http.post("vehicleDetail/createvehicleDetails", postData, {
            enctype: "multipart/form-data",
            headers: {
                "Content-Type": "multipart/form-data",
                "Content-Disposition": "form-data",
            },
        })
            .then(response => {
                if (response?.data?.success) {
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    cb && cb(false, "success")
                    navigation && navigation?.pop(2)
                    dispatch(GetUserApi())
                } else {
                    RNToasty.Info({
                        title: response.data.message,
                        duration: 2,
                    });
                    cb && cb(false)
                }
            })
            .catch(error => {
                console.log("error update", error.response.data)
                cb && cb(false)
                RNToasty.Normal({
                    title: error.response.data.message,
                    duration: 2,
                });
            })

    } else {
        cb && cb(false)
        RNToasty.Info({
            title: "Please check internet connection",
            duration: 2,
            position: 'top'
        });
    }
};

export const GetCityApi = () => (dispatch, getState) => {

    http.get(`city/getAllcity`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: CITY_DATA,
                    payload: response.data.data
                })


            } else {

                RNToasty.Success({
                    title: response.data.message,
                    duration: 2,
                });
            }
        })
        .catch(error => {

        })
};

export const GetVehicleTypeApi = () => (dispatch, getState) => {

    http.get(`vehicleType/getAllvehicleTypes`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: VEHICLE_TYPE_DATA,
                    payload: response.data.data
                })


            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
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

        })
};

export const GetVehicleDetailsApi = () => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")

    http.get(`vehicleDetail/getSinglevehicleDetailById/${userId}`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: VEHICLE_DETAILS_RC,
                    payload: response.data.data
                })


            } else {
                dispatch({
                    type: LOADING,
                    payload: false,
                });
                RNToasty.Success({
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
            // RNToasty.Error({
            //     title: error.response.data.message,
            //     duration: 2,
            // });
        })
};

export const ApplyRefralApi = (refral, cb) => async (dispatch, getState) => {
    const uId = await AsyncStorage.getItem("@USER_ID")
    cb && cb(true)
    const postData = {
        referCode: refral,
        userId: uId
    }
    const { internetConnection } = getState().internet

    if (internetConnection) {

        http.post("referal/applyReferal", postData)
            .then(response => {
                if (response.data.success) {
                    RNToasty.Success({
                        title: response.data.message,
                        duration: 2,
                    });
                    dispatch(GetApplyRefralApi())
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
    } else {
        cb && cb(false)
        RNToasty.Info({
            title: "Please check internet connection",
            duration: 2,
            position: 'top'
        });
    }
};

export const GetApplyRefralApi = () => async (dispatch) => {
    const uId = await AsyncStorage.getItem("@USER_ID")
    http.get(`referal/referalDetailByDriverId/${uId}`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: REFRAL_APPLY_DATA,
                    payload: response.data.data
                })
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {

            }
        })
        .catch(error => {

        })
};




export const CheckVehicleApi = (vehicleNumber, cb) => async dispatch => {
    cb && cb(true)
    http.get(`vehicle/vehicleExist?vehicleNumber=${vehicleNumber}`)
        .then(async response => {
            if (response.data.success) {
                dispatch({
                    type: VEHICLE_EXIST,
                    payload: true,
                })
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
                cb && cb(false)
            } else {
                dispatch({
                    type: VEHICLE_EXIST,
                    payload: false,
                })
                // RNToasty.Info({
                //     title: response.data.message,
                //     duration: 2,
                // });
                cb && cb(false)
            }
        })
        .catch(error => {
            console.log("check vehicle error ; ", error)
            cb && cb(false)
            dispatch({
                type: VEHICLE_EXIST,
                payload: false,
            })
            // RNToasty.Error({
            //     title: error.response?.data?.message,
            //     duration: 2,
            // });

        })
};



export const GetAadharDetailsApi = () => async (dispatch) => {
    const uId = await AsyncStorage.getItem("@USER_ID")
    http.get(`aadharDetail/getSingleAadharDetailById/${uId}`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_AADGAR_DETAILS,
                    payload: response.data.data
                })
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {

            }
        })
        .catch(error => {

        })
};
export const GetDLDetailsApi = () => async (dispatch) => {
    const uId = await AsyncStorage.getItem("@USER_ID")
    http.get(`vehicleDetail/getSingleDrivingLicenseDetailById/${uId}`,)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: GET_DL_DETAILS,
                    payload: response.data.data
                })
                // RNToasty.Success({
                //     title: response.data.message,
                //     duration: 2,
                // });
            } else {

            }
        })
        .catch(error => {

        })
};