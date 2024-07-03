import { ADHAR_DETAILS, CITY_DATA, DL_DETAILS, GET_AADGAR_DETAILS, GET_DL_DETAILS, REFRAL_APPLY_DATA, VEHICLE_DETAILS_RC, VEHICLE_EXIST, VEHICLE_TYPE_DATA } from "../types";

const initialState = {
    cityData: null,
    vehicleTypeData: null,
    vehicleDetailsData: null,
    adharDetailsData: null,
    dlDetailsData: null,
    refralData: null,
    vehicleExist: null,
    getAadharDetails: null,
    getDLDetails: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CITY_DATA:
            return {
                ...state,
                cityData: action.payload
            }
        case VEHICLE_TYPE_DATA:
            return {
                ...state,
                vehicleTypeData: action.payload
            }
        case VEHICLE_DETAILS_RC:
            return {
                ...state,
                vehicleDetailsData: action.payload
            }
        case ADHAR_DETAILS:
            return {
                ...state,
                adharDetailsData: action.payload
            }
        case DL_DETAILS:
            return {
                ...state,
                dlDetailsData: action.payload
            }
        case REFRAL_APPLY_DATA:
            return {
                ...state,
                refralData: action.payload
            }
        case VEHICLE_EXIST:
            return {
                ...state,
                vehicleExist: action.payload
            }
        case GET_AADGAR_DETAILS:
            return {
                ...state,
                getAadharDetails: action.payload
            }
        case GET_DL_DETAILS:
            return {
                ...state,
                getDLDetails: action.payload
            }

        default:
            return state;
    }
}