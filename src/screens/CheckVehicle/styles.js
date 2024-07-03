import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    input: {
        width: SIZES.width * .9,
        fontFamily: FONTS.medium,
        fontSize: 14,
        paddingVertical: SIZES.height * .01,
        color: COLORS.black,
        borderWidth: 1,
        borderColor: '#BCA7A7',
        borderRadius: 8,
        paddingLeft: SIZES.width * .05,
    },

    title: {
        fontFamily: FONTS.semiBold,
        fontSize: 16,
        color: COLORS.black,
        marginVertical: SIZES.height * .01,
    },
    btn: {
        width: SIZES.width * .5,
        height: SIZES.height * .05,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderRadius: 5,
        marginVertical: SIZES.height * .03,
    },
    btn_text: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -3,
        color: COLORS.white,
    },
    not_exist: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -3,
        color: "#BB4444",
    },
    found: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        marginBottom: -3,
        color: "#00EA17",
    },
})