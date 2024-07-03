import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imgBox: {
        width: width * .197,
        height: height * .1,
        borderRadius: width * .1,
        overflow: 'hidden',
        // borderWidth: 1,
        // borderColor: COLORS.white,
    },

    profileImage: {
        width: width * .197,
        height: height * .1,
        borderRadius: width * .1,
    },

    profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * .18,
        // justifyContent: 'center',
        // paddingVertical: height * .05,
        paddingHorizontal: width * .03,
        backgroundColor: COLORS.primary,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightBox: {
        marginLeft: width * .02,
    },
    name: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        marginBottom: -3,
        color: COLORS.white,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        marginBottom: -2,
        color: COLORS.white,
    },
    buttonContainer: {
        marginVertical: height * .02,
        marginRight: width * .05,
    },


    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: SIZES.width * .6,
        height: SIZES.height * .07,
        backgroundColor: COLORS.lightGray1,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: width * .05,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        marginBottom: SIZES.height * .02,
    },
   
    labels: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.black,
        marginBottom: -4,
    },
   
})