import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'
import { RNToasty } from 'react-native-toasty'
import { SendOtpApi } from '../../redux/actions/authAction'
import SmsRetriever from 'react-native-sms-retriever';


const Login = ({ navigation, SendOtpApi }) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [phone, setPhone] = useState()
    const [indicator, setIndicator] = useState(false)

    useEffect(() => {
        onSmsListenerPressed()
        return () => {
            SmsRetriever.removeSmsListener();
        }
    }, [])


    const handleSubmit = () => {
        const postData = {
            mobile: phone
        }
        if (phone) {
            if (phone.length == 10) {
                SendOtpApi(postData, navigation, (data) => setIndicator(data))
                // setPhone(null)
            } else {
                RNToasty.Error({
                    title: "Please Enter 10 digit mobile number",
                    duration: 2
                })
            }
        } else {
            RNToasty.Error({
                title: "Please Enter mobile number",
                duration: 2
            })
        }
    }

    const onSmsListenerPressed = async () => {
        try {
            const registered = await SmsRetriever.startSmsRetriever();
            console.log("SON.stringify(error)");
            if (registered) {
                console.log("SON sadasd");
                SmsRetriever.addSmsListener(event => {
                    console.log(event);
                    SmsRetriever.removeSmsListener();
                });
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    };

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />

            <View style={styles.header}>
                <View style={styles.image_box}>
                    <Image source={images.logo1} style={styles.image} resizeMode='contain' />
                </View>
            </View>
            <View style={styles.container1}>
                <View style={styles.box}>
                    <Text style={styles.label}>Mobile Number</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter mobile number'
                            placeholderTextColor={COLORS.gray20}
                            keyboardType='numeric'
                            maxLength={10}
                            value={phone}
                            onChangeText={(text) => { setPhone(text) }}
                        />
                        <Image source={images.india} style={styles.india} resizeMode='contain' />
                    </View>
                </View>
                <RoundedButton
                    onPress={() => handleSubmit()}
                    indicator={indicator}
                    disabled={indicator}
                >
                    Login
                </RoundedButton>
                <View style={styles.titleBox}>
                    <View style={styles.row}>
                        <Text style={styles.text}>By logging in you agree to the</Text>
                        <Text style={{ ...styles.text, color: COLORS.primary, }}> terms of service</Text>
                        <Text style={styles.text}> and </Text>
                        <Text style={{ ...styles.text, color: COLORS.primary, }}>privacy policy</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    SendOtpApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)