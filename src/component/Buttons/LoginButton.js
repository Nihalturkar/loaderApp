import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import Icons from '../Icons'

const LoginButton = ({
    icon,
    iconSize,
    iconStyle,
    style,
    children,
    width,
    backgroundColor,
    textColor,
    onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, style, { backgroundColor: backgroundColor, width: width }]}
            onPress={onPress}
        >
            <View
                style={styles.iconBox}
            >
                <Icons
                    name={icon}
                    size={iconSize}
                    style={iconStyle}
                />
            </View>

            <Text
                style={[styles.btnText, { color: textColor }]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    )
}

LoginButton.defaultProps = {
    style: null,
    textColor: COLORS.black1,
    backgroundColor: COLORS.white,
    width: SIZES.width * .65,
    children: null,
    onPress: null,
    icon: null,
    iconStyle: null,
    iconSize: 20,
}

export default LoginButton;

const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .65,
        height: SIZES.height * .05,
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: SIZES.base,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        marginBottom: SIZES.height * .015,
    },

    btnText: {
        fontFamily: FONTS.regular,
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black1,
    },

    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: 10,
    },
})