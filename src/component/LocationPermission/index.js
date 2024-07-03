import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet,Image } from 'react-native'
import { COLORS, FONTS, icons, images } from '../../constants'



const { width, height } = Dimensions.get('window')

const LocationPermission = ({name,mainStyle,allowPress}) => {
    return (
        <View style={[styles.no_data_cont,mainStyle]}>
            <View style={styles.nodata_main}>
                <Image source={icons.locationVector} resizeMode='contain' style={styles.nodata_vec} />
                <Text style={styles.nodataFound_text}>Please change your Location service to 'Allow all the time' so you can see your location on map.</Text>
                {/* <Text style={styles.nodataFound_text}>Location Permission is off. We are unable to find your location.</Text> */}
                <TouchableOpacity style={styles.btnTouch}
                onPress={allowPress}
                >
                    <Text style={styles.btnText}>Open Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LocationPermission

const styles = StyleSheet.create({
    nodata_vec: {
        width: width * .54,
        height: width * .54,
        marginTop:10,
    },
    nodata_main: {
        backgroundColor: COLORS.white,
        elevation: 8,
        shadowColor: COLORS.gray70,
        // marginBottom: height * .05,
        borderRadius: 7,
        alignItems: 'center',
        paddingBottom: height * .03,
        width: width * .7,
        height: width * .95,
        marginTop:height*.03
    },
    no_data_cont: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    nodataFound_text: {
        color: COLORS.gray50,
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -4,
        marginTop: height * .02,
        textAlign:'center'
    },
    btnTouch:{
        width:width*.36,
        height:height*.056,
        backgroundColor:COLORS.primary,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:height*.019
    },
    btnText:{
        color:COLORS.white,
        fontFamily:FONTS.semiBold,
        marginBottom:-3,
        fontSize:15
    }
})