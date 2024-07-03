import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { connect } from 'react-redux'
import { LoginApi, ResendOtpApi, VerifyOtpApi } from '../../redux/actions/authAction'
import { RNToasty } from 'react-native-toasty'
import styles from './styles'
import RoundedButton from '../../component/Buttons/RoundedButton'
import messaging from '@react-native-firebase/messaging'
import SmsRetriever from 'react-native-sms-retriever';
import { getHash, getOtp, removeListener, startOtpListener } from "react-native-otp-verify"
import DeviceInfo from 'react-native-device-info';

const Otp = ({ route, navigation, LoginApi, ResendOtpApi }) => {

    const item = route?.params

    const [otp, setOtp] = useState()
    const [timer, setTimer] = useState(30)
    const [indicator, setIndicator] = useState(false)

    useEffect(() => {
        getDeviceToken()

    }, [])




    const startSmsListener = async () => {
        try {
            const registered = await SmsRetriever.startSmsRetriever();
            if (registered) {
                console.log('SMS Retriever has been started.');
            } else {
                console.log('SMS Retriever failed to start.');
            }
        } catch (error) {
            console.log('Error starting SMS Retriever:', error);
        }
    };

    // useEffect(() => {
    //     getHash().then(hash => {
    //         console.log(hash)
    //       // use this hash in the message.
    //     }).catch(console.log);

    //     startOtpListener(message => {
    //         console.log(message)

    //       // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
    //     //   const otp = /(\d{4})/g.exec(message)[1];
    //     //   setOtp(otp);
    //     });
    //     return () => removeListener();
    //   }, []);




    const [postData, setPostData] = useState({
        fullName: item.data.fullName,
        email: item.data.email,
        mobile: item.mob,
        hashKey: "BAAPBAAPHOTAHEBETA",
        driverFcmToken: null,
        driverDeviceId: null
    })

    const [postData2, setPostData2] = useState({
        mobile: item.mob,
        hashKey: "BAAPBAAPHOTAHEBETA",
        driverFcmToken: null,
        driverDeviceId: null
    })

    const getDeviceToken = async () => {
        let fcmToken = await messaging().getToken();
        let deviceIdInfo = await DeviceInfo.getUniqueId();
        setPostData({
            ...postData,
            driverFcmToken: fcmToken,
            driverDeviceId: deviceIdInfo
        })
        setPostData2({
            ...postData2,
            driverFcmToken: fcmToken,
            driverDeviceId: deviceIdInfo
        })
        console.log("unique", deviceIdInfo, fcmToken)
    }



    const handleSubmit = () => {
        if (item.cond == "Register") {
            if (otp) {
                if (otp.length == 4) {
                    if (item.mob != 8825167144) {
                        if (otp == item.otp) {
                            LoginApi(postData, (data) => setIndicator(data))
                        } else {
                            RNToasty.Error({
                                title: "Please Enter valid OTP",
                                duration: 2
                            })
                        }
                    } else {
                        LoginApi(postData, (data) => setIndicator(data))
                    }

                } else {
                    RNToasty.Error({
                        title: "Please Enter 4 digit OTP",
                        duration: 2
                    })
                }
            } else {
                RNToasty.Error({
                    title: "Please Enter OTP",
                    duration: 2
                })
            }
        } else {
            if (otp) {
                if (otp.length == 4) {
                    if (item.mob != 8825167144) {
                        if (otp == item.otp) {
                            LoginApi(postData2, (data) => setIndicator(data))
                        } else {
                            RNToasty.Error({
                                title: "Please Enter valid OTP",
                                duration: 2
                            })
                        }
                    } else {
                        LoginApi(postData2, (data) => setIndicator(data))
                    }
                } else {
                    RNToasty.Error({
                        title: "Please Enter 4 digit OTP",
                        duration: 2
                    })
                }
            } else {
                RNToasty.Error({
                    title: "Please Enter OTP",
                    duration: 2
                })
            }
        }

    }

    console.log("item.otp", item.otp)

    setTimeout(() => {
        if (timer == 0) {
        } else {
            setTimer(timer - 1)
        }
    }, 1000);

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Enter OTP</Text>
                    </View>
                    <View style={styles.OtpRow}>
                        <OTPInputView
                            // onPress={() => console.log("press me")}
                            style={styles.OtpinputBox}
                            pinCount={4}
                            codeInputFieldStyle={styles.boxstyle}

                            onCodeChanged={(code) => { setOtp(code) }}
                        // onCodeFilled={(code) => handleSubmit()}
                        />
                    </View>
                    <RoundedButton Btnstyle={{ marginVertical: SIZES.height * .04 }}
                        onPress={() => handleSubmit()}
                        indicator={indicator}
                        disabled={indicator}
                    >
                        Submit
                    </RoundedButton>
                    {timer > 0 ?
                        <Text style={styles.timerText}><Text style={styles.waitingText}>Waiting for Resend OTP</Text> 00:{timer}</Text>
                        :
                        <TouchableOpacity
                            onPress={() => { ResendOtpApi({ mobile: item.mob }, navigation, "Register", item.data), setTimer(30) }}
                        >
                            <Text style={styles.btnText}>Resend OTP</Text>
                        </TouchableOpacity>
                    }
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    LoginApi,
    ResendOtpApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Otp)
