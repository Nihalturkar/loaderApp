import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, TextInput, Image, BackHandler, ScrollView, Vibration } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'
import Icons from '../../component/Icons'
import Modal from 'react-native-modal'
import OTPInputView from "@twotalltotems/react-native-otp-input";
import CircularProgress from 'react-native-circular-progress-indicator';
import { AcceptOrderApi, GetLiveOrderApi } from '../../redux/actions/orderAction'
import { formatAMPM, formattedDate3 } from '../../services/date'
import { useFocusEffect, useIsFocused, useRoute } from '@react-navigation/native'
import { SetSocketData } from '../../redux/actions/homeAction'
import { OrderAudio } from '../../services/audio'
import { SOCKET_URL } from '../../services/api'
import { SOCKET_DATA } from '../../redux/types'
import { io } from "socket.io-client";



const LocationBox = ({ location, status }) => {
    return (
        <View style={styles.loc_box}>
            <View style={styles.loc_row}>
                <View style={{ ...styles.loc_dot, backgroundColor: status == "active" ? "#00FF47" : "#FF494E" }} />
                <Text style={styles.loc_text}>{location}</Text>
            </View>
            {/* <TouchableOpacity style={styles.dir_btn}>
                <Icons name={"direction"} size={20} color={COLORS.black} />
            </TouchableOpacity> */}
        </View>
    )
}

const OrderStatus = ({ navigation, route, SetSocketData, AcceptOrderApi, userData, socketData, GetLiveOrderApi }) => {

    const item = socketData
    // const item = route?.params?.item
    const [loadingIndicator, setloadingIndicator] = useState(false)

    // console.log("item", item?.status)

    const [otpModal, setOtpModal] = useState(false)
    const [countdown, setCountdown] = useState('')
    let [countdownValue, setCountdownValue] = useState(30)

    const isFocused = useIsFocused()
    const routes = useRoute();

    console.log("isFocused", isFocused, routes)

    useFocusEffect(
        React.useCallback(() => {
            OrderAudio()
            socketFun()
            Vibration.vibrate()
            setCountdownValue(30)
            return () => {

                // setCountdownValue(0)
                // clearInterval(countdown)
            }
        }, [])
    )

    const socketFun = () => {
        socket = io(SOCKET_URL)
        let itsCancelEvent1 = `orderCancellation/${item?._id}`
        if (isFocused == true && routes.name == "OrderStatus") {
            socket.on(itsCancelEvent1, (item) => {
               
                console.log("onn cancel123", item)
                GetLiveOrderApi()
                if (isFocused == true) {
                    navigation.navigate("Home")
                 
                }
            })
        }
    }


    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => {
            backHandler.remove()
        }
        // return () => backHandler.remove()
    }, [])

    const coundown = () => {
        // const countdown = setInterval(() => {
        //     setCountdownValue(countdownValue)

        //     if (countdownValue-- <= 0) {
        //         clearInterval(countdown)
        //     }
        //     if (countdownValue == 0) {
        //         if (isFocused==true) {
        //             navigation.goBack()
        //             alert(1234)
        //         }
        //     }
        // }, 1000);
    }
    setTimeout(() => {
        if (countdownValue > 0) {
            setCountdownValue(countdownValue - 1)
        } else {
            if (isFocused == true) {
                navigation.goBack()
             
            }
        }
    }, 1000);


    useEffect(() => {
        coundown()
        return () => {
            SetSocketData()
        }
    }, [])

    useEffect(() => {
        if (item?.status != "ORDERED") {
            navigation.goBack()
        }
    }, [item?.status])

    const handleAccept = () => {
        const post = {
            status: "ACCEPTED",
            driverId: userData?.userData?._id,
            vehicleId: userData?.drivingLicenceData?.vehicleId?._id
        }
        AcceptOrderApi(post, item._id, (data) => setloadingIndicator(data), navigation)
    }

    const date = formattedDate3(new Date(item?.createdAt))
    const time = formatAMPM(new Date(item?.createdAt))

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.header}>
                    <View style={styles.image_box}>
                        <Image source={images.logo1} style={styles.logo} resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.text_box}>
                    <Text style={styles.time}>{date}, {time}</Text>
                    <Text style={styles.time}>PickUp Distance {item?.pickUpDistance}</Text>
                </View>

                {/* coundown progress container */}
                <View style={styles.sec_box}>
                    <CircularProgress
                        value={countdownValue}
                        radius={60}
                        duration={1000}
                        progressValueColor={'#ecf0f1'}
                        maxValue={30}
                        title={'Sec'}
                        titleColor={'white'}
                        inActiveStrokeColor={COLORS.white}
                        activeStrokeColor={"#DF6756"}
                        // inActiveStrokeOpacity={0.2}
                        progressValueStyle={{ ...styles.sec_text, fontSize: 20, }}
                        titleStyle={styles.sec_text}
                    // inActiveStrokeWidth={20}
                    // activeStrokeWidth={12}
                    />
                </View>
                <View style={{ marginBottom: SIZES.height * .02, marginTop: SIZES.height * .01 }}>
                    {/* <Text style={styles.distance}>Time: 45 min</Text> */}
                    <Text style={styles.distance}>Distance: {item?.totalDistance} KM</Text>
                </View>

                <View>
                    <Text style={styles.location_text}>Location :</Text>
                    <LocationBox
                        status={"active"}
                        location={item?.pickUp?.address}
                    />
                    {item?.drop.map((item) => (

                        <LocationBox
                            status={"inActive"}
                            location={item?.address}
                        />
                    ))}
                </View>

                {/* <View style={styles.sec_box}>
                <Image source={images.circle1} style={styles.circle1} resizeMode='contain' />
                <ImageBackground source={images.circle} style={styles.circle}
                    resizeMode='contain'
                >
                    <Text style={styles.sec_text}>29{"\n"}Sec</Text>
                </ImageBackground>
            </View> */}


                <RoundedButton
                    backgroundColor={COLORS.white}
                    textColor={COLORS.primary}
                    Btnstyle={styles.btn}
                    // onPress={() => navigation.navigate("Register")}
                    onPress={() => handleAccept()}
                    indicator={loadingIndicator}
                    disabled={loadingIndicator}
                >
                    ACCEPT ORDER
                </RoundedButton>
                <RoundedButton
                    backgroundColor={COLORS.primary}
                    textColor={COLORS.white}
                    Btnstyle={styles.btn}
                    onPress={() => { navigation.goBack() }}
                >
                    REJECT ORDER
                </RoundedButton>

            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    socketData: state.order.socketData
})

const mapDispatchToProps = {
    AcceptOrderApi,
    SetSocketData,
    GetLiveOrderApi
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus)