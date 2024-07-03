import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { formatAMPM, formattedDate3 } from "../../services/date";

const Alert = ({ source, title, message, onPress, type, time }) => {
    return (
        <TouchableOpacity style={styles.alert} onPress={onPress} activeOpacity={0.6} disabled={true} >
            {type == "ORDER" ?
                <Image source={icons.notiIcon} resizeMode='contain' style={styles.alertImage} />
                :
                <View style={styles.alertImage} />
            }
            {/* <Image style={styles.alertImage} source={source} resizeMode="contain" /> */}
            <View style={styles.text_box}>
                <Text style={styles.alertTitle}>{title}</Text>
                <Text style={styles.alertContent}>{message}</Text>
            </View>
            <Text style={styles.timeDate}>{formatAMPM(new Date(time))} {formattedDate3(new Date(time))}</Text>
        </TouchableOpacity>
    )
}

Alert.defaultProps = {
    source: images.profile,
    title: "title",
    message: "message",
    onPress: null
}

export default Alert;

const styles = StyleSheet.create({
    alert: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#C8C8C8',
        borderRadius: 7,
        paddingVertical: SIZES.height * .01,
        paddingHorizontal: SIZES.width * .02,
        marginTop: SIZES.height * .02,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        height: SIZES.height * .09
    },
    alertImage: {
        width: SIZES.width * .14,
        height: SIZES.width * .14,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
    },
    text_box: {
        width: SIZES.width * .68,
        // borderWidth:1,
    },

    alertTitle: {
        fontFamily: FONTS.medium,
        fontSize: 12,
        color: '#353638',
    },
    alertContent: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: '#353638',
    },
    timeDate: {
        color: COLORS.gray50,
        position: 'absolute',
        right: SIZES.width * .03,
        bottom: 0,
        fontSize: SIZES.width * .025,
        fontFamily: FONTS.regular,
        marginBottom: -2
    }
})