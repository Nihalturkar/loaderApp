import React from 'react';
import { View,  StyleSheet, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Input1 = ({ 
    placeholder, 
    onChangeText, 
    value, 
    style,
    keyboardType,
    maxLength,
    editable,
    autoCapitalize,
    secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray40}
                onChangeText={onChangeText}
                value={value}
                style={[styles.inputStyle,style]}
                keyboardType={keyboardType}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                editable={editable}
                autoCapitalize={autoCapitalize}
            />
        </View>
    )
}

Input1.defaultProps = {
    style: null,
    onChangeText: null,
    placeholder: "placeholder",
    value: null,
    keyboardType: "default",
    maxLength: null,
    secureTextEntry: false,
}

export default Input1;

const styles = StyleSheet.create({
    inputStyle: {
        ...FONTS.body4,
        color: COLORS.black,
        width: SIZES.width * .93,
        height: SIZES.height * .06,
        paddingBottom: 7,
        borderWidth: 1,
        borderRadius: SIZES.base,
        paddingLeft: 15,
        backgroundColor: COLORS.white,
        borderColor: COLORS.light,
        marginBottom: 5,
        fontFamily:FONTS.regular
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})