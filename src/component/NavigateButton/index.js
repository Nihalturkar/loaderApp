import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import Icons from '../Icons'

const NavigateButton = ({ children, source, onPress, rightIconVisible, iconStyle,iconColor, textColor }) => {
    return (
        <TouchableOpacity style={styles.BtnRow} onPress={onPress} >
            <View style={styles.row}>
                <Image source={source} style={{...styles.profileIcon, ...iconStyle, tintColor: iconColor}} resizeMode="contain" />
                <Text style={{...styles.btnTxt, color: textColor}}>{children}</Text>
            </View>
            {rightIconVisible &&
                <Icons name={"right"} size={20} color={COLORS.black} />
            }
        </TouchableOpacity>
    )
}

NavigateButton.defaultProps = {
    children: null,
    source: null,
    onPress: null,
    rightIconVisible: true,
    iconStyle: null, 
    textColor: COLORS.black,
    iconColor: null,
}

export default NavigateButton;

const styles = StyleSheet.create({
    BtnRow: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        marginTop: SIZES.height * .01,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        height: SIZES.height * .05,
        // borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnTxt: {
        fontFamily: FONTS.medium,
        fontSize: 14,
        marginBottom: -2,
        color: COLORS.black,
    },
    
    arrow: {
        fontFamily: FONTS.regular,
        fontSize: 20,
        color: COLORS.black,
        marginBottom: -2, 
    },
    profileIcon:{
        width: SIZES.width * .06,
        height: SIZES.height * .03,
        marginRight: SIZES.width * .03,
        // tintColor:COLORS.blue,
    },
})