import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from '../Icons'
import { COLORS, SIZES } from '../../constants'

const NotificationButton = ({navigation,notification,style}) => {
  return (
    <TouchableOpacity style={{...styles.btn, ...style}}
    onPress={() => navigation.navigate("Notoification")}
>
    <Icons
        name={"notificaiton"}
        size={25}
        color={COLORS.black1}
    />
    <View style={styles.no_box}>
    <Text>{notification}</Text>
    </View>
</TouchableOpacity>
  )
}

NotificationButton.defaultProps = {
    onPress: null,
    notification: 0,
}

export default NotificationButton

const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderRadius: 50,
        right: SIZES.width * .03,
        top: SIZES.height * .02,
    },

    no_box: {
        padding: 3,
        backgroundColor:"#FF0000",
        position: 'absolute',
        top: 0,
        right: 0,
    },
})