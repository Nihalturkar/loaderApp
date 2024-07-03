import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    UploadVehicleOptionCont: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    box_container: {
        width:width*.93,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: height * .04,
        paddingHorizontal: width * .04,
        elevation:5
    },

    box: {
        width:width * .9,
        alignItems: 'center',
    },

    chooseText: {
        color: COLORS.gray30,
        fontFamily: FONTS.medium,
        fontSize: 16,
    },

    indicatorIcon:{
        width:width*.05,
        height:width*.05,
        marginRight: width * .03,
    },

    ownVehicle: {
        width: width * .2,
        height: height * .1,
    },

    vehicle_btn: {
        // width: width * .9,
        borderWidth: 1,
        borderColor: COLORS.gray20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: width * .05,
        paddingVertical: height * .01,
        marginTop: height * .02,
    },

    row: {
        width: width * .56,
        flexDirection: 'row',
        alignItems: 'center', 
    },

    vehicle_text: {
        color: COLORS.black,
        fontFamily: FONTS.medium,
        fontSize: 15,
        marginBottom: -5,
    },

    btnTouch: {
        // backgroundColor: '#21AB18',
        backgroundColor: COLORS.gray20,
        height: height * .067,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: height * .015,
        width: '92%',
        marginHorizontal: width * .04
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: 17,
        marginBottom: -5
    },
})