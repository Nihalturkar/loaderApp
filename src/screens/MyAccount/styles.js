import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },


    userProfile: {
        width: width * .32,
        height: width * .32,
        borderRadius: 100,
    },
    userProfileBox: {
        // width: width * .32,
        // height: height * .16,
        // borderRadius: 100,
        overflow: 'hidden',
        // borderWidth: 1,
    },
    profileBox: {
        alignItems: 'center',
        marginVertical: height * .03,
    },
    Edit: {
        width: width * .06,
        height: height * .03,
        position: 'absolute',
        right: 7,
        bottom: height * .015,
        tintColor: COLORS.blue,
    },
    userDetails: {
        alignItems: 'center',
        borderBottomColor: '#ADA4A5',
        borderBottomWidth: 1,
        paddingBottom: height * .01,
    },
    userName: {
        fontFamily: FONTS.semiBold,
        fontSize: 20,
        color: COLORS.black,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: COLORS.black,
    },

    profileIcon: {
        width: width * .08,
        height: height * .04,
        marginRight: width * .03,
        tintColor: COLORS.blue,
    },
    btnContainer: {
        marginTop: height * .02,
        marginBottom: height * .1,
        alignItems: 'center',
    },
    BtnRow: {
        flexDirection: 'row',
        marginTop: height * .01,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * .04,
        backgroundColor: COLORS.white,
        height: height * .06,
        // borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#A7A7A7',
    },
    arrow: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 20,
        lineHeight: 30,
        color: COLORS.black,
        marginBottom: -2,
    },


    modalMain: {
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.height * .025,
        paddingHorizontal: SIZES.width * .04,
        borderRadius: 5
    },
    upiInput: {
        borderWidth: 1,
        borderColor: COLORS.gray20,
        paddingLeft: SIZES.width * .03,
        borderRadius: 5,
        fontSize: SIZES.width * .038,
        fontFamily: FONTS.regular,
        paddingBottom: SIZES.height * .008,
        marginTop: SIZES.height * .01,
        color: COLORS.gray80
    },
    upiHeading: {
        color: COLORS.gray80,
        fontSize: SIZES.width * .04,
        fontFamily: FONTS.medium,
        marginBottom: -5
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
    validText: {
        color: 'red',
        fontSize: SIZES.width * .03,
        fontFamily: FONTS.regular,
        marginBottom: -3
    },


    driverText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .034,
        marginBottom: -3
    },
    driverCodeCont: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.height * .015,
    },
    code: {
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .034,
        marginBottom: -3
    },
    codeMain: {
        width: SIZES.width * .28
    },
    seeCodeTouch: {
        backgroundColor: COLORS.primary,
        width: SIZES.width * .22,
        height: SIZES.height * .04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    seeCodeText: {
        color: COLORS.white,
        fontSize: SIZES.width * .03,
        fontFamily: FONTS.medium,
        marginBottom: -3
    }

})