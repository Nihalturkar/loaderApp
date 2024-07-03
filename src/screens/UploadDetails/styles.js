import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    UploadDriverDocumentCont: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    indicatorMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * .01,
        justifyContent: 'center'
    },
    horizontalLine: {
        width: width * .3,
        height: 2.4,
        backgroundColor: COLORS.gray20
    },
    dot: {
        width: width * .03,
        height: width * .03,
        backgroundColor: COLORS.gray20,
        borderRadius: 100
    },
    idTextMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: width * .0,
        marginTop: height * .015
    },
    idDlText: {
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        marginBottom: -3,
        width: width * .3,
        textAlign: 'center'
    },



    // ==============adhar card===========
    adharCardPicTouch: {
        // borderWidth: 1.7,
        borderColor: COLORS.primary,
        width: width * .8,
        height: height * .2,
        // borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    adharCardTouchMain: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginTop: height * .02
    },
    ownerText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 15
    },
    cameraIcon: {
        width: width * .08,
        height: width * .08
    },
    sideText: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
    },
    adharImg: {
        width: width * .8,
        height: height * .2,
    },




    // ======bts========
    imageBottomMain: {
        backgroundColor: COLORS.white,
        height: height * .25,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    galleryIcon: {
        width: width * .18,
        height: width * .18
    },
    galleryText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -4,
        fontSize: 15
    },



    // ============make========
    tipText: {
        color: COLORS.gray80,
        fontFamily: FONTS.semiBold,
        fontSize: 18,
        marginTop: height * .04
    },
    makeText: {
        color: COLORS.gray40,
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginBottom: height * .02
    },


    // ==============dl===========
    dlImg: {
        width: width * .6,
        height: height * .3,
        borderRadius: 10
    },
    dlTouch: {
        // borderWidth: 1.7,
        borderColor: COLORS.primary,
        width: width * .6,
        height: height * .3,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // =========btn==========
    btnTouch: {
        // backgroundColor: '#21AB18',
        backgroundColor: COLORS.gray20,
        height: height * .067,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',

        width: '92%',
        marginHorizontal: width * .04
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 17,
        marginBottom: -5
    },


    inputBox: {
        width: SIZES.width * .93,
        flexDirection: "row",
        alignItems: "center",
        // borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray20,
        marginBottom: SIZES.height * .015,
    },
    titleBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .02,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.black,
    },
    input: {
        height: SIZES.height * .05,
        paddingVertical: SIZES.height * .01,
        fontSize: 13,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        width: SIZES.width * .9,
        borderBottomWidth: 1,
        borderColor: COLORS.gray20,
        // marginBottom: SIZES.height * .02,
    },

    input1: {
        // height: SIZES.height * .05,
        paddingBottom: SIZES.height * .01,
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        width: SIZES.width * .85,
        paddingLeft: width * .03
    },

    bottomSheet: {
        // height: SIZES.height * .6,
        backgroundColor: COLORS.white,

        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    type_box: {
        width: SIZES.width * .9,
        marginBottom: SIZES.height * .02,
    },

    type: {
        fontSize: 14,
        fontFamily: FONTS.medium,
        color: COLORS.gray80,
        // borderWidth: 1,
        marginBottom: SIZES.height * .01,
        // width: SIZES.width * .8,
        borderBottomWidth: 1,
        borderColor: COLORS.gray20, paddingVertical: height * .01,
        paddingLeft: width * .01,
        // backgroundColor:COLORS.gray20
    },


    label: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.gray80,
        // marginBottom: -2
    },

    close_btn: {
        width: width * .07,
        height: width * .07,
        borderRadius: width * .04,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        position: 'absolute',
        right: width * -.03,
        top: height * -.014,
    },



    // ==============adhar card===========
    adharCardPicTouch: {
        borderWidth: 1,
        borderColor: COLORS.gray20,
        width: width * .44,
        height: height * .2,
        // borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7

    },
    adharCardTouchMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height * .02
    },
    ownerText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 17
    },
    cameraIcon2: {
        width: width * .1,
        height: width * .1
    },
    sideText: {
        color: COLORS.gray60,
        fontFamily: FONTS.medium,
    },
    adharImg: {
        width: width * .43,
        height: height * .19
    },
    vehicleImgTouch: {
        borderWidth: 1,
        borderColor: COLORS.gray20,
        paddingVertical: height * .03,
        borderRadius: 8
    },



    bottomHeading: {
        color: COLORS.gray80,
        fontSize: 18.5,
        fontFamily: FONTS.medium,
        borderBottomWidth: 1,
        width: width,
        paddingLeft: width * .04,
        paddingBottom: height * .01,
        marginBottom: height * .015,
        borderColor: COLORS.gray20
    },

    vehicleImg: {
        width: width * .2,
        height: width * .2,
        borderRadius: 6,

    },
    vehicleCrossTouch: {
        position: 'absolute',
        top: -height * .01,
        right: -width * .02,
        backgroundColor: COLORS.gray80,
        padding: 6,
        borderRadius: 100,
    },



    pendingCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    pendingMain: {
        borderWidth: 1,
        paddingHorizontal: width * .03,
        borderColor: "#F9B528",
        paddingVertical: height * .005,
        borderRadius: 5
    },
    pendingText: {
        color: "#F9B528",
        fontFamily: FONTS.medium,
        marginBottom: -3,
        fontSize: 12
    },
    inputLable: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginTop: height * .02
    },


    rejectTitle: {
        color: 'red',
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .034,

    },
    rejectSubTitle: {
        color: 'red',
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .03
    },


    verifyTouch: {
        backgroundColor: COLORS.primary,
        width: SIZES.width * .27,
        height: SIZES.height * .036,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 29,
        marginBottom: SIZES.height * .01,
        marginTop: SIZES.height * .005
    },
    verifyText: {
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .034,
        marginBottom: -3
    },



    
    not_exist: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -3,
        color: "#2DC73C",
        // marginTop: SIZES.height * .005,
    },
    found: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -3,
        color: "#BB4444",
        // marginTop: SIZES.height * .005,
    },
})