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
        justifyContent: 'center',
        marginBottom:SIZES.height*.02
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
        paddingHorizontal: width * .16,
        marginTop: height * .015
    },
    idDlText: {
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },



    // ==============adhar card===========
    adharCardPicTouch: {
        borderWidth: 1.7,
        borderColor: COLORS.primary,
        width: width * .44,
        height: height * .145,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
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
    cameraIcon: {
        width: width * .08,
        height: width * .08
    },
    sideText: {
        color: COLORS.primary,
        fontFamily: FONTS.medium,
    },
    adharImg: {
        width: width * .4,
        height: height * .13
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
        marginTop: height * .06
    },
    makeText: {
        color: COLORS.gray40,
        fontFamily: FONTS.regular,
        fontSize: 13
    },


    // ==============dl===========
    dlImg: {
        width: width * .65,
        height: height * .2,
        borderRadius: 10
    },

    // =========btn==========
    btnTouch: {
        // backgroundColor: '#21AB18',
        backgroundColor: COLORS.gray20,
        height: height * .067,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: height * .015,
        width: '92%',
        marginHorizontal: width * .04
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 17,
        marginBottom: -5
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

    bottomSheet: {
        // height: SIZES.height * .6,
        backgroundColor: COLORS.white,

        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titleBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .02,
        // borderWidth: 1,
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
  

    rejectTitle:{
        color:'red',
        fontFamily:FONTS.medium,
        fontSize:SIZES.width*.034,

    },
    rejectSubTitle:{
        color:'red',
        fontFamily:FONTS.regular,
        fontSize:SIZES.width*.03
    }
})