import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
    },

    image_box: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    image: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },

    container1: {
        width: SIZES.width,
        height: SIZES.height * .9,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
   
    titleBox: {
        width: SIZES.width * .9,
        marginTop: SIZES.height * .1,
        marginBottom: SIZES.height * .04,
        // alignItems: "center",
        // marginVertical: SIZES.height * .04,
        // borderWidth: 1,
    },

    title: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        marginBottom: -4,
        color: COLORS.primary,
    },

    text: {
        width: SIZES.width * .35,
        fontFamily: FONTS.light,
        fontSize: 14,
        marginBottom: -4,
        color: "#959595",
        marginTop: SIZES.height * .02,
    },

})