import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants';
import Icons from '../Icons';

const CheckBox = ({
    size,
    color,
    style,
    backgroundColor
}) => {
    const [checked, setchecked] = useState(true)
    color = backgroundColor == COLORS.white ? COLORS.black : COLORS.white;
    return (
        <TouchableOpacity
            style={[{
                width: size,
                height: size,
                backgroundColor: checked ? backgroundColor : COLORS.white,
                borderColor: backgroundColor ? backgroundColor : COLORS.black,
            }, styles.checkBox, style]}
            onPress={() => setchecked(!checked)}
        >
            <Icons
                name={"check"}
                color={ checked ? color : "transparent"}
                size={size - 3}
            />
        </TouchableOpacity>
    )
}

CheckBox.defaultProps = {
    size: 20,
    color: COLORS.black,
    backgroundColor: COLORS.white,
}

export default CheckBox;

const styles = StyleSheet.create({
    checkBox: {
        borderWidth: 1,
        borderRadius: 50,
        // borderColor: COLORS.black,
        alignItems: "center",
        justifyContent: "center",
    }
})