import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#E5E5E5",
        backgroundColor: COLORS.white,
    },

    box: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 13,
        // elevation: 4,
        borderColor: '#F4E7E7',
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        alignItems: 'center',
        // marginTop: SIZES.height * .02,
    },

    week_title: {
        width: SIZES.width * .8,  
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: '#C8C2C2',
        marginTop: SIZES.height * .02,
    },

    today_text: {
        width: SIZES.width * .86,  
        fontFamily: FONTS.regular,
        fontSize: 14,
        color: '#C8C2C2',
        // borderWidth: 1,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .01,
    },

    box1: {
        alignItems: 'center',
        width: SIZES.width * .3,
        borderColor: '#B2ABAB',
        // borderWidth: 1,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        marginBottom: -4,
        color: COLORS.black,
    },

    text1: {
        fontFamily: FONTS.light,
        fontSize: 12,
        marginBottom: -3,
        color: '#B2ABAB',
    },
    
    row: {
        // width: SIZES.width * .8,  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },
 
    ear_box: {
        width: SIZES.width * .9,
        borderWidth: 1,
        borderRadius: 7,
        // elevation: 4,
        borderColor: '#E2E2E2',
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: SIZES.height * .02,
        paddingVertical: SIZES.height * .02,
    },

    ear_row: {
        width: SIZES.width * .8,  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginVertical: SIZES.height * .02,
    },

    status_text: {
        fontFamily: FONTS.light,
        fontSize: 18,
        marginBottom: -6,
        // color: '#B2ABAB',
    },

    status_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    time: {
        width: SIZES.width * .8, 
        fontFamily: FONTS.light,
        fontSize: 12,
        marginBottom: -3,
        color: '#B2ABAB',
    },

   
 
})