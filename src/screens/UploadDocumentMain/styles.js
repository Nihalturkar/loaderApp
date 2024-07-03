import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

        // backgroundColor: '#E5E5E5',
    },

    // =============Top===========
    headPhoneIcon: {
        width: width * .062,
        height: width * .062
    },
    topMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: width * .05,
        justifyContent: 'space-between',
        marginTop: height * .02
    },
    topHiText: {
        color: COLORS.gray80,
        fontSize: width * .043,
        fontFamily: FONTS.medium,
        marginBottom: -2
    },
    topLetsText: {
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        fontSize: 12
    },
    topHelpText: {
        color: '#2E5EFE',
        fontFamily: FONTS.medium,
        marginBottom: -3
    },


    // ========second==========
    currentIcon: {
        width: width * .02,
        height: height * .023,
        marginTop: height * .006
    },
    secondMain: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: "#F2C94D",
        marginTop: height * .02,
        paddingHorizontal: width * .05,
        paddingVertical: height * .013
    },
    secondRegisterText: {
        color: COLORS.gray80,
        fontSize: 13.2,
        fontFamily: FONTS.medium,
        marginLeft: width * .02,
        marginBottom: -3
    },

    // ================active card==========
    numCircleMain: {
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: 100,
        width: width * .075,
        height: width * .075,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * .025
    },
    arrIcon: {
        width: width * .05,
        height: width * .05,
        tintColor: '#F2C94D'
    },
    numCircle: {
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        width: width * .055,
        height: width * .055,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numText: {
        color: COLORS.white,
        fontFamily: FONTS.medium
    },

    cardMain: {
        // backgroundColor:"#3E58E1",
        backgroundColor: COLORS.primary,
        width: width * .83,
        borderRadius: 7,
        paddingVertical: height * .018,
        paddingHorizontal: width * .037
    },
    arrowMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    uploadText: {
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontSize: 17
    },
    documentText: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginTop: 5
    },



    // ================inactive card==========
    inactivenumCircleMain: {
        borderWidth: 1.5,
        borderColor: COLORS.gray20,
        borderRadius: 100,
        width: width * .075,
        height: width * .075,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inactivecard_touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * .025
    },
    inactivebackArr: {
        width: width * .05,
        height: width * .05,
        tintColor: COLORS.white,
    },
    inactivenumCircle: {
        backgroundColor: COLORS.gray20,
        borderRadius: 100,
        width: width * .055,
        height: width * .055,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inactivenumText: {
        color: COLORS.white,
        fontFamily: FONTS.medium
    },

    inactivecardMain: {
        // backgroundColor:"#3E58E1",
        backgroundColor: COLORS.white,
        width: width * .83,
        borderRadius: 7,
        paddingVertical: height * .018,
        paddingHorizontal: width * .037,
        borderWidth: 1.3,
        borderColor: COLORS.gray20
    },
    inactivearrowMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inactiveuploadText: {
        color: COLORS.gray20,
        fontFamily: FONTS.medium,
        fontSize: 17
    },
    inactivedocumentText: {
        color: '#D4D4D4',
        fontFamily: FONTS.regular,
        fontSize: 13,
        marginTop: 5
    },

    bottom_row: {
        width: width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: height * .03,
        marginBottom: SIZES.height * .01,
    },

    submit_btn: {
        width: width * .3,
        height: height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        flexDirection: 'row'
    },

    submit_btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.white,
        marginBottom: -3,
    },

    input: {
        width: width * .5,
        borderWidth: 1,
        paddingLeft: width * .03,
        borderRadius: 4,
        borderColor: COLORS.gray30,
        paddingVertical: height * .007,
        color: COLORS.black,
        fontSize: 15,
        backgroundColor: COLORS.white,
    },

    superVisorImg: {
        width: SIZES.width * .13,
        height: SIZES.width * .13,
        borderRadius: 100
    },
    supervisorName: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },
    supervisorMob: {
        color: COLORS.gray50,
        fontSize: SIZES.width * .032,
        fontFamily: FONTS.regular,
        marginBottom: -2
    }

})