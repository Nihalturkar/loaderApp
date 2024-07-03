import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

    order_box: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#F4E7E7',
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        alignItems: 'center',
        // paddingHorizontal: SIZES.width * .05,
        marginTop: SIZES.height * .025,
    },

    date_box: {
        width: SIZES.width * .8,
        marginVertical: SIZES.height * .01,
    },

    hr_line: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#D7D7D7',
        // marginVertical: SIZES.height * .01,
    },

    order_row: {
        width: SIZES.width * .8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .012,
    },

    order_id: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        color: '#6B5E5E',
        // marginBottom: -5,
    },

    order_date: {
        fontFamily: FONTS.light,
        fontSize: 12,
        color: COLORS.gray40,
        marginBottom: -3,
    },

    cod_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.primary,
        marginBottom: -2,
    },

    order_status: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: '#06AF12',
        marginBottom: -4,
    },

    order_amount: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: '#5E5252',
        marginBottom: -4,
    },

    dot: {
        width: SIZES.width * .02,
        height: SIZES.width * .02,
        borderRadius: SIZES.width * .02,
        backgroundColor: '#06AF12',
        marginRight: SIZES.width * .01,
    },

    order_cod: {
        backgroundColor: "rgba(184, 84, 84, 0.11)",
        borderBottomLeftRadius: 13,
        paddingHorizontal: 5,
        paddingVertical: 2,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    dot_row: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },



    // =======manuallyModalMain===========
    manuallyModalMain: {
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.height * .02,
        borderRadius: 4,
        paddingHorizontal: SIZES.width * .035
    },
    selectDateText: {
        color: COLORS.gray80,
        fontSize: 19,
        fontFamily: FONTS.medium
    },

    modalBtnMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02
    },
    cancelBtn: {
        width: SIZES.width * .4,
        height: SIZES.height * .063,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray20,
        borderRadius: 5
    },
    btnText: {
        color: COLORS.gray50,
        fontFamily: FONTS.medium,
        marginBottom: -3,
        fontSize: 16
    },



    threeDot: {
        width: SIZES.width * .045,
        height: SIZES.width * .045,
        tintColor: COLORS.white
    },
    threedotMain: {
        width: SIZES.width * .095,
        height: SIZES.width * .095,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: 'center'
    },
    menuText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },

    downLoadingMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})