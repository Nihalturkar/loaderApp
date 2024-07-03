import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { connect } from "react-redux";
import Icons from "../../component/Icons";
import { icons, images } from "../../constants";
import styles from "./styles";
import { RNToasty } from "react-native-toasty";


const ScreenBtnComponent = ({ title, iconName, iconStyle, onPress, bg }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onPress}>
            {/* <View style={[styles.iconBox, { backgroundColor: bg }]}>
                <Icons name={iconName} size={20} color={COLORS.white} />
            </View> */}
            <Text style={styles.labels}>{title}</Text>
        </TouchableOpacity>
    )
}
2
const DrawerContent = ({ navigation, }) => {

    return (
        <View style={styles.container}>
            <View style={styles.profileBtn}>
                <View style={styles.row}>
                    <View style={styles.imgBox}>
                        <Image source={images.profile} style={styles.profileImage} resizeMode="contain" />
                    </View>
                    <View style={styles.rightBox}>
                        <Text style={styles.name}>{"John"}</Text>
                        <Text style={styles.text}>{"example@gmail.com"}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <ScreenBtnComponent title={"Home"} bg="#FF5441"
                    onPress={() => navigation.navigate('Home')} />
                <ScreenBtnComponent title={"My Account"} bg="#eb4d4b"
                    onPress={() => navigation.navigate('MyAccount')} />
                <ScreenBtnComponent title={"Terms & Conditions"} bg="#eb4d4b"
                    onPress={() => navigation.navigate('TermsAndCondition')} />
                <ScreenBtnComponent title={"About Us"} bg="#eb4d4b"
                    onPress={() => navigation.navigate('AboutUs')} />
                <ScreenBtnComponent title={"PrivacyPolicy"} bg="#33d9b2"
                    onPress={() => navigation.navigate('PrivacyPolicy')} />

            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);