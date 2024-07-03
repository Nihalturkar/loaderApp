import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,

    },

    logo: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        borderWidth: 1,
        borderColor: COLORS.white,
        marginTop: SIZES.height * .02,

    },

    text_box: {
        width: SIZES.width * .9,
        alignItems: 'center',
        marginVertical: SIZES.height * .02,
    },

    time: {
        fontFamily: FONTS.medium,
        fontSize: 13,
        // marginBottom: -4,
        color: COLORS.white,
    },

    amount: {
        fontFamily: FONTS.bold,
        fontSize: 24,
        marginBottom: -6,
        color: COLORS.white,
    },

    circle1: {
        width: SIZES.width * .3,
        height: SIZES.width * .3,
        position: 'absolute',
    },

    circle: {
        width: SIZES.width * .35,
        height: SIZES.width * .35,
        // width: SIZES.width * .456,
        // height: SIZES.width * .456,
        // height: SIZES.height * .225,
        // marginLeft: SIZES.width * -.026,
        // marginTop: SIZES.height * -.0073,
        marginLeft: SIZES.width * -.022,
        marginTop: SIZES.width * -.02,
        alignItems: 'center',
        justifyContent: 'center',
    },

    sec_box: {
        marginVertical: SIZES.height * .0,
    },

    sec_text: {
        fontFamily: FONTS.bold,
        fontSize: 17,
        marginBottom: -6,
        color: COLORS.white,
        textAlign: 'center',
    },

    distance: {
        fontFamily: FONTS.bold,
        fontSize: 15,
        // marginBottom: -6,
        color: COLORS.white,
        textAlign: 'center',
    },


    // ============= location box ===========
    loc_box: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .02,
        // borderWidth: 1,
    },

    loc_row: {
        width: SIZES.width * .74,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
    },

    loc_dot: {
        width: 8,
        height: 8,
        backgroundColor: "#34DD3A",
        marginRight: 3,
        borderRadius: 8,
        marginRight: SIZES.width * .03,
    },
    location_text: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white,
        // marginBottom: -5,
        marginBottom: SIZES.height * .01,
    },

    loc_text: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.white,
        marginBottom: -3,
    },

    dir_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        borderRadius: SIZES.width * .05,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        backgroundColor: '#CBD3FF',
    },

    //  verify otp modal
    verify_modal: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingVertical: SIZES.height * .04,
        alignItems: 'center',
    },

    verify_title: {
        fontFamily: FONTS.semiBold,
        fontSize: 24,
        // color: COLORS.white,
        color: "#0D0D26",
        marginVertical: SIZES.height * .01,
    },

    verify_subtitle: {
        width: SIZES.width * .8,
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.gray30,
        // color: "#0D0D26",
        marginBottom: -4,
        textAlign: 'center',
    },

    verify_btn: {
        width: SIZES.width * .8,
        height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
        // marginVertical: SIZES.height * .02,
    },

    verify_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white,
        marginBottom: -4,
    },

    OtpinputBox: {
        width: SIZES.width * .7,
        height: SIZES.height * .2,
    },
    boxstyle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.gray20,
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        padding: 0,
        backgroundColor: COLORS.white,
    },

})