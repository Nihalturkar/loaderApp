import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from '../Icons'
import { COLORS, SIZES } from '../../constants'

const DrawerButton = ({style,navigation }) => {
    return (
        <TouchableOpacity style={{...styles.btn, ...style}}
        onPress={() => navigation.toggleDrawer()}
        >
            <Icons
                name={"menu"}
                size={25}
                color={COLORS.black1}
            />
        </TouchableOpacity>
    )
}

DrawerButton.defaultProps = {
    navigation: null,
    style: null
}

export default DrawerButton

const styles = StyleSheet.create({

    btn: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderRadius: 50,
        left: SIZES.width * .03,
        top: SIZES.height * .02,
    },
})