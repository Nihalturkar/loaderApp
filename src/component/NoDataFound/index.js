import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS, FONTS, images } from '../../constants'



const { width, height } = Dimensions.get('window')

const NoDataFound = ({ name }) => {
    return (
        <View style={styles.no_data_cont}>
            <View style={styles.nodata_main}>
                <Image source={images.noDataFound} resizeMode='contain' style={styles.nodata_vec} />
                <Text style={styles.nodataFound_text}>No {name} Found</Text>
            </View>
        </View>
    )
}
export default NoDataFound

const styles = StyleSheet.create({
    nodata_vec: {
        width: width * .6,
        height: width * .54,
    },
    nodata_main: {
        backgroundColor: COLORS.white,
        elevation: 8,
        shadowColor: COLORS.gray70,
        marginBottom: height * .05,
        borderRadius: 7,
        alignItems: 'center',
        paddingBottom: height * .03
    },
    no_data_cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    nodataFound_text: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 16,
        marginBottom: -4,
        marginTop: height * .02
    }
})