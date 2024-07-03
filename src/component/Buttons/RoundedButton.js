import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const RoundedButton = ({
    Btnstyle,
    children,
    width,
    backgroundColor,
    textColor,
    disabled,
    indicator,
    onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, Btnstyle, { backgroundColor: backgroundColor, width: width }]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            {indicator &&
                <ActivityIndicator size={24} color={COLORS.white} style={{ marginRight: width * .03 }} />
            }
            <Text
                style={[styles.btnText, { color: textColor }]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    )
}

RoundedButton.defaultProps = {
    Btnstyle: null,
    textColor: COLORS.white,
    backgroundColor: COLORS.primary,
    width: SIZES.width * .9,
    children: null,
    onPress: null
}

export default RoundedButton;

const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        flexDirection: 'row'
    },

    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.white,
        marginBottom: -4,
    },

})