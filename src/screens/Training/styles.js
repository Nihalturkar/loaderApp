import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

    text: {
        color: "#747171",
        fontFamily: FONTS.semiBold,
        fontSize: 15,
    },

    backgroundVideoContainer: {
        width: SIZES.width * .9,
        height: height * .2,
        borderWidth: 1,
        borderRadius: 15,
        // backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: COLORS.gray30,
        marginTop: height * .02,
        overflow: 'hidden',
    },
    backgroundVideo: {
        width: SIZES.width * .9,
        height: height * .23,
        borderWidth: 1.3,
        borderRadius: 8,
        borderColor: COLORS.gray30,
        overflow: 'hidden',
        marginTop: height * .03,
    },
    play: {
        width: width * .08,
        height: height * .05,
    },
    playBtn: {
        position: 'absolute',
        top: height * .1,
        left: width * .42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    volumeBtn: {
        position: 'absolute',
        bottom: height * .01,
        right: width * .02,
        width: width * .12,
        height: height * .06,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.red,
    },


    row: {
        width: width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * .04,
    },

    videoContainer: {
        borderRadius: 25,
        // backgroundColor: COLORS.black,
        borderRadius: 20,
        overflow: "hidden",
        height: height * .25,
        width: width * .925,
        position: "absolute"
        // overlayColor: COLORS.black
    },
    overlayVideoContainer: {
        // backgroundColor: COLORS.black,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        // borderRadius: 20,
        // overflow: "hidden",
        height: height * .25,
        width: width * .925,

    },
    video: {
        width: width * .925,
        height: height * .2,
        // backgroundColor: COLORS.black,
        borderRadius: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: height * .2,
        width: width * .925
    },

})