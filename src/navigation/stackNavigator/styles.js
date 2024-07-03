import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: COLORS.white,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)'
    },
    headerStyle1: {
        backgroundColor: COLORS.primary,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)'
    },

    headerTitle: {
        fontFamily: FONTS.medium,
        fontSize: 17,
        color: COLORS.black,
        marginBottom: -6,
    },


    headerTitle1: {
        fontFamily: FONTS.medium,
        fontSize: 17,
        color: COLORS.black,
        marginBottom: -4,
        marginLeft: SIZES.width * -.04
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    drawer_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },

    logo1: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    header: {
        width: SIZES.width,
        height: SIZES.height * .08,
        backgroundColor: COLORS.white,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        // marginBottom: -4,
    },
    status: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: "#A09E9E",
        marginBottom: -2,
    },

    btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -2,
    },

    logo: {
        width: SIZES.width * .35,
        height: SIZES.height * .065,
        // backgroundColor:COLORS.black
    },
    logoutIcon: {
        width: SIZES.width * .08,
        height: SIZES.width * .08,
        tintColor: COLORS.white,
        margin: 10
    },
})