import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    OtpRow: {
        width: SIZES.width * .9,
    },
    OtpinputBox: {
        height: SIZES.height * .1,
    },
    titleBox: {
        width: SIZES.width * .9,
        height: SIZES.height * .2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: FONTS.medium,
        fontSize: 24,
        color: COLORS.gray20,
    },
    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        color: COLORS.primary,
    },

    boxstyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.gray20,
        fontFamily: FONTS.medium,
        fontSize: 14,
        color: COLORS.black,
        padding: 0,
        backgroundColor: COLORS.white,
    },
    timerText:{
        color:COLORS.gray70,
        fontSize:SIZES.width*.045,
        fontFamily:FONTS.regular
    },
    waitingText:{
        fontSize:SIZES.width*.038,
        
    }
})