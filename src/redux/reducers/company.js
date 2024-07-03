import { ABOUT_US_DATA, DRIVER_POLICY_DATA, PRIVACY_POLICY_DATA, TERMS_CONDITION_DATA, } from "../types";

const initialState = {
    privacyPolicyData: null,
    termsConditionData: null,
    aboutUsData: null,
    driverPolicyData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRIVACY_POLICY_DATA:
            return {
                ...state,
                privacyPolicyData: action.payload
            }
        case TERMS_CONDITION_DATA:
            return {
                ...state,
                termsConditionData: action.payload
            }
        case ABOUT_US_DATA:
            return {
                ...state,
                aboutUsData: action.payload
            }
        case DRIVER_POLICY_DATA:
            return {
                ...state,
                driverPolicyData: action.payload
            }
        default:
            return state;
    }
}