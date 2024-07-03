import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    icons: {
        marginBottom: -5,
    },

    labelStyle: {
        fontFamily: FONTS.medium,
        fontSize: 10,
        marginBottom: 4
        // color: COLORS.black,
    },
    headerStyle1: {
        backgroundColor: COLORS.primary,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)'
    },
    logo1: {
        width: SIZES.width * .3,
        height: SIZES.height * .05,
    },
    tabBarStyle: {
        width: SIZES.width * .9,
        height: SIZES.height * .08,
        backgroundColor: COLORS.primary,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 15,
        borderRadius: 12,
        position: 'absolute',
        bottom: SIZES.height * .02,
        marginHorizontal: SIZES.width * .05,
        justifyContent: 'flex-start',
        borderTopWidth: 0,
        paddingVertical: SIZES.height * .01
    },
    threeDot: {
        width: SIZES.width * .045,
        height: SIZES.width * .045,
        tintColor: COLORS.white
    },
    threedotMain: {
        width: SIZES.width * .095,
        height: SIZES.width * .095,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: 'center'
    },
    menuText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },

    notificationIcon:{
        width:SIZES.width*.07,
        height:SIZES.width*.07,
        tintColor:COLORS.white
    },
    notificationTouch:{
        padding:8,
        borderRadius:4,
        marginRight:SIZES.width*.035
    },
    notificationCountmain:{
        position:'absolute',
        width:SIZES.width*.06,
        height:SIZES.height*.03,
        backgroundColor:'red',
        right:0,
        zIndex:1,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1.8,
        borderColor:COLORS.primary,
        top:-3
    },
    notificationcountText:{
        color:COLORS.white,
        fontSize:SIZES.width*.029,
        fontFamily:FONTS.medium,
        marginBottom:-3
    }
})