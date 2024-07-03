import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box_container: {
        width: width * .93,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: height * .02,
        paddingHorizontal: width * .03,
        elevation: 6
    },

    box: {
        marginVertical: height * .04,
        alignItems: 'center',
    },

    chooseText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 16,
    },
    text: {
        color: "#747171",
        fontFamily: FONTS.semiBold,
        fontSize: 15,
    },
    code_box: {
        width: width * .4,
        height: height * .06,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 8,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: height * .02,
    },
    code: {
        color: COLORS.gray50,
        fontFamily: FONTS.medium
    },

    btn: {
        width: width * .5,
        height: height * .06,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * .02,
    },
    btn_text: {
        color: "#515050",
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
    },

    or_text: {
        color: COLORS.black,
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        marginBottom: -5,
    },
    row: {
        width: width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * .04,
    },

    hr_line: {
        width: width * .4,
        // height: 1.3,
        borderBottomWidth: 1,
        borderColor: COLORS.gray20,
        // backgroundColor: COLORS.gray20,
    },

    document: {
        width: SIZES.width * .5,
        height: SIZES.width * .5
    },
    documentText: {
        fontSize: SIZES.width * .04,
        fontFamily: FONTS.medium,
        color: COLORS.gray80,
        textAlign: 'center',
        width: SIZES.width * .85,
        marginTop: 8
    }
})