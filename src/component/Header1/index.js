import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import Icons from '../Icons'
import { TouchableOpacity } from 'react-native'

const Header1 = ({ navigation, notification, style }) => {
    return (
        <View style={{ ...styles.header, ...style }}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icons
                        name={"menu"}
                        size={25}
                        color={COLORS.black1}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate("Notification")}
                >
                    <Icons
                        name={"notification"}
                        size={25}
                        color={COLORS.black1}
                    />
                    <View style={styles.no_box}>
                        {/* <Text>{notification}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Header1.defaultProps = {
    navigation: null,
    notification: null
}

export default Header1

const styles = StyleSheet.create({
    header: {
        width: SIZES.width,
        height: SIZES.height * .1,
        position: 'absolute',
        alignItems: 'center',
        top: SIZES.height * .02,
    },

    row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },

    btn: {
        width: SIZES.width * .12,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: 50,
    },

    no_box: {
        padding: 6,
        borderRadius: 6,
        backgroundColor: "#FF0000",
        position: 'absolute',
        top: 6,
        right: 10,
    },
})