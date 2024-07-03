import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
    },

    header: {
        width: SIZES.width * .9,
        // height: SIZES.height * .06,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        borderColor: COLORS.white,
    },

    bal_text: {
        fontFamily: FONTS.regular,
        fontSize: 19,
        color: COLORS.white,
        marginBottom: -6,
    },

    back_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: SIZES.width * .04
        // borderWidth: 1,
    },

    btn: {
        width: SIZES.width * .3,
        borderWidth: 1,
        borderColor: COLORS.white,
        marginVertical: SIZES.height * .02,
    },

    flex_end: {
        width: SIZES.width * .9,
        alignItems: 'flex-end',
        marginVertical: SIZES.height * .01,
    },

    balance: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.white,
        marginBottom: -6,
    },

    container1: {
        width: SIZES.width,
        // height: SIZES.height * .9,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        flex: 1,
    },

    titleBox: {
        width: SIZES.width * .9,
        // alignItems: "center",
        marginTop: SIZES.height * .02,
        borderBottomWidth: 1.3,
        borderColor: COLORS.gray20
    },

    title: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        // marginBottom: -4,
        color: COLORS.black,
    },







    trans_box: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 7,
        // elevation: 4,
        borderColor: '#E2E2E2',
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .01,
        paddingVertical: SIZES.height * .02,
        paddingHorizontal: SIZES.width * .05,
    },

    status_text: {
        fontFamily: FONTS.light,
        fontSize: 18,
        marginBottom: -6,
        // color: '#B2ABAB',
    },

    row: {
        width: SIZES.width * .78,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    status_text: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        marginBottom: -6,
        // color: '#B2ABAB',
    },

    status_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    trans_type: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
        // textAlign: 'center'
    },
    trans_id: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -4,
        color: COLORS.black,
        // textAlign: 'center'
    },

    text: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -4,
        color: COLORS.black,
        // textAlign: 'center'
    },


    //   ==========modal==========
    modalMain: {
        backgroundColor: COLORS.white,
        width: SIZES.width * .9,
        paddingVertical: SIZES.height * .02,
        borderRadius: 4,
        paddingHorizontal: SIZES.width * .04
    },
    enteramtText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 17,
        marginBottom: -2
    },
    modalBtnMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .02
    },
    cancelBtn: {
        width: SIZES.width * .39,
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
        fontSize: 15
    },


    // paymentModal==============
    paymentSuccessfullModal: {
        backgroundColor: COLORS.white,
        width: SIZES.width * .78,
        paddingVertical: SIZES.height * .03,
        borderRadius: 6,
        alignItems: 'center'
    },
    tickIcon: {
        width: SIZES.width * .5,
        height: SIZES.width * .5,
        // backgroundColor:COLORS.gray1
    },
    addPaymentText: {
        color: COLORS.primary,
        fontSize: 19,
        fontFamily: FONTS.semiBold,
        // width:SIZES.width*.7,
        textAlign: 'center',
        marginTop: SIZES.height * .03
    },
    youText: {
        color: COLORS.gray40,
        fontFamily: FONTS.regular,
        textAlign: 'center',
        width: SIZES.width * .7
    },
    doneTouch: {
        backgroundColor: COLORS.primary,
        width: SIZES.width * .7,
        height: SIZES.height * .065,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.height * .02
    },

    btnMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: SIZES.width * .9
    },


    withdrawMain: {
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.height * .02,
        paddingHorizontal: SIZES.width * .03,
        borderRadius: 5
    },
    withdrawTitle: {
        color: COLORS.black,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .045
    },
    errorText: {
        color: 'red',
        fontSize: SIZES.width * .029,
        fontFamily: FONTS.regular, marginLeft: SIZES.width * .02
    }










})