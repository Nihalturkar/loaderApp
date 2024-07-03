import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },

    // ================= header =============
    headPhoneIcon: {
        // width: SIZES.width * .062,
        // height: SIZES.width * .062
        width: SIZES.width * .05,
        height: SIZES.width * .05
    },
    topHelpText: {
        color: '#2E5EFE',
        fontFamily: FONTS.medium,
        marginBottom: -3
    },

    dot: {
        width: 7,
        height: 7,
        borderRadius: 7,
        backgroundColor: "#47BB1E",
        marginRight: SIZES.width * .02,
    },

    live: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: "#47BB1E",
        marginBottom: -4,
    },
    live_box: {
        width: SIZES.width * .2,
        height: SIZES.height * .045,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: "#47BB1E",
        borderRadius: 10,
        marginRight: SIZES.width * .03,
    },
    headerTitle: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        // marginBottom: -4,
    },



    header_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
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
        fontFamily: FONTS.semiBold,
        fontSize: 16,
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

    // ====== map ====

    map: {
        // flex:1,
        // width: SIZES.width,
        // height: SIZES.height,
        ...StyleSheet.absoluteFill
    },

    locationTextBtn: {
        flexDirection: 'row',
        width: SIZES.width * .94,
        alignItems: "center",
        justifyContent: 'center',
        position: 'absolute',
        top: SIZES.height * .15,
        backgroundColor: COLORS.white,
        borderRadius: 20,
    },

    locationText: {
        width: SIZES.width * .35,
        fontFamily: FONTS.medium,
        fontSize: 13,
        color: COLORS.black,
        marginBottom: -5,
    },


    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },



    //  ============== bottom sheet =======
    bottomSheet: {
        // position: 'absolute',
        // bottom: 0,
        width: SIZES.width,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * .04,
        // paddingBottom: SIZES.height * .01,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
    },
    bar_box: {
        alignItems: 'center',
    },
    bar: {
        width: SIZES.width * .15,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#C4C4C4",
    },


    title1: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
        color: COLORS.black,
        marginVertical: SIZES.height * .02,
    },

    //  ============ cash box ==========

    trip_box: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth:1,
        borderBottomWidth: 1.3,
        borderColor: '#D0D0D0',
        paddingBottom: SIZES.height * .01,
        // marginBottom: SIZES.height * .05,
        marginTop: SIZES.height * .013
    },

    cash_img_box: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(196, 196, 196, 0.75)",
        borderRadius: SIZES.width * .3,
        marginRight: SIZES.width * .03,
    },

    cash: {
        width: SIZES.width * .08,
        height: SIZES.height * .04,
        marginTop: SIZES.height * .01,
    },

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -2,
        color: COLORS.black,
    },
    cash_text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -2,
        color: "#605A5A",
    },


    //   ========== view button ===========

    view_btn: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        marginTop: SIZES.height * .01,
    },

    view_btn_text: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        marginBottom: -2,
        color: COLORS.white,
    },

    //  =============  user box =============

    user_box: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth:1,
        borderBottomWidth: 1.3,
        borderColor: '#D0D0D0',
        paddingBottom: SIZES.height * .003,
        // marginVertical: SIZES.height * .02,
        // marginTop: SIZES.height * .03,
        // marginBottom: SIZES.height * .01,

    },

    user_image_box: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: "rgba(196, 196, 196, 0.75)",
        borderRadius: SIZES.width * .3,
        marginRight: SIZES.width * .03,
        overflow: 'hidden',
        // borderRadius:100
    },

    user_image: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        // marginTop: SIZES.height * .01,
    },

    active: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#47BB1E",
        position: 'absolute',
        right: 2,
        top: 2,
    },
    loc_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: "#828282",
    },
    user_name: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: -3,
        color: COLORS.primary,
    },

    call_btn: {
        // width: SIZES.width * .3,
        // height: SIZES.height * .04,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: COLORS.primary,
        // borderRadius: 5,
        // marginTop: SIZES.height * .01,
    },

    call_box: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CBD3FF",
        borderRadius: SIZES.width * .05,
    },

    call_text: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginTop: 2,
        color: COLORS.black,
    },




    loc_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: SIZES.width * .032,
        height: SIZES.width * .032,
        borderRadius: 70,
        backgroundColor: "#47BB1E",
        marginRight: SIZES.width * .02,
    },

    vt_line: {
        height: SIZES.height * .04,
        borderLeftWidth: 1.1,
        borderStyle: 'dotted',
        borderColor: COLORS.black,
        marginLeft: 6,

    },
    location: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.gray70,
        marginBottom: -4,
        // backgroundColor:COLORS.primary,

    },

    locationMain: {
        width: SIZES.width * .9,
        borderBottomWidth: 1,
        borderColor: '#D0D0D0',
        // paddingBottom: SIZES.height * .003,
        paddingLeft: SIZES.width * .01,
        paddingVertical: SIZES.height * .015
    },











    //  verify otp modal
    verify_modal: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
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


    pinIcon: {
        width: SIZES.width * .06,
        height: SIZES.height * .05,
    },
    driverIcon: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
    },


    cancelOrderTouch: {
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center'
        // backgroundColor:COLORS.primary
    },
    cancelOrderText: {
        color: 'red',
        fontFamily: FONTS.medium,
        marginLeft: SIZES.width * .02,
        marginBottom: -3
    }
})