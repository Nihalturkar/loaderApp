import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

   
    titleBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .04,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -4,
        color: COLORS.black,
    },

    btnContainer: {
        width: SIZES.width * .6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .04,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
    },

    india: {
        width: SIZES.width * .07,
        height: SIZES.height * .035,
        marginHorizontal: SIZES.width * .02,
    },

    input_row: {
        width: SIZES.width * .9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .02,
    },
  
    inputBox: {
        width: SIZES.width * .9,
        alignItems: "center",
        marginVertical: SIZES.height * .04,
    },


    mobile: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.black,
    },

    btnText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.primary,
    },

    input1: {
        width: SIZES.width * .43,
        height: SIZES.height * .06,
        paddingVertical: SIZES.height * .01,
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        borderBottomWidth: 1,
        borderRadius: 7,
        borderColor: COLORS.gray20,
    },

    input: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        paddingVertical: SIZES.height * .01,
        fontSize: 15,
        fontFamily: FONTS.regular,
        color: COLORS.black,
        borderBottomWidth: 1,
        borderRadius: 7,
        borderColor: COLORS.gray20,
    },

    image_container: {
        width: SIZES.width,
        height: SIZES.height * .15,
        alignItems: "center",
    },

   
    image_box: {
        width: SIZES.width,
        height: SIZES.height * .22,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: SIZES.width * .9,
        height: SIZES.height * .2,
    },

    dropdown_input: {
        marginVertical: SIZES.height * .02,
    },

    dropDown: {
        height: "30%",
        borderRadius: 7,
    },

    dropDownBtnStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLORS.gray20,
    },

    dropDownTextStyle: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        textAlign: 'left',
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        // marginBottom: -4,
        color: COLORS.gray20,
    },

    bottom_text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: "#726C6C",
        textAlign: 'center',
    },

    bottom_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZES.height * .02,
    },
})