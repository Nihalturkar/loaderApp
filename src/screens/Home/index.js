import React, { useEffect, useState, } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, FlatList, AppRegistry, Linking, AppState, Alert, ScrollView, RefreshControl ,Button} from "react-native";
import { COLORS, SIZES, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Icons from "../../component/Icons";
import SwitchToggle from 'react-native-switch-toggle';
import { GetUserApi } from "../../redux/actions/authAction";
import { connect, useDispatch } from "react-redux";
import { DriverOnlineStatusApi, GetAllSupportApi, GetHomeApi, GetNotificationContApi, SetNewOrder, SetWatchId } from "../../redux/actions/homeAction";
import Loader from "react-native-modal-loader";
import BackgroundService from 'react-native-background-actions';
import { GetLiveOrderApi, GetOrderById } from "../../redux/actions/orderAction";
import { io } from "socket.io-client";
import { SOCKET_DATA } from "../../redux/types";
import invokeApp from 'react-native-invoke-app';
import messaging from '@react-native-firebase/messaging'
import Geolocation from "react-native-geolocation-service";
import { requestNotifications, RESULTS } from 'react-native-permissions';
import LoginButton from "../../component/Buttons/LoginButton";
import { OpenOptimizationSettings, BatteryOptEnabled } from "react-native-battery-optimization-check";
import { SOCKET_URL, http2 } from "../../services/api";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

import analytics from '@react-native-firebase/analytics';



const Home = ({ navigation, route, currentLocation, GetAllSupportApi, supportData, GetNotificationContApi, GetUserApi, liveOrderData, userData, DriverOnlineStatusApi, GetHomeApi, homeData, GetLiveOrderApi, SetNewOrder, newOrder, GetOrderById, socketData, SetWatchId, watchId }) => {

    const [bottomSheet, setBottomSheet] = useState(false)
    const [toggle, setToggle] = useState(userData?.drivingLicenceData?.vehicleId?.driverStatus)
    const [otpModal, setOtpModal] = useState(false)
    const [loadingModal, setLoadingModal] = useState(false)
    const [socketDisabled, setSocketDisabled] = useState(true)
    const [notificationPermission, setNotificationPermission] = useState(false)
    const [batterPermission, setBatterPermission] = useState()
    const [scrollRefresh, setScrollRefresh] = useState(false)
    const [visible, setVisible] = useState(false);

    const support = supportData?.find((item) => item?.type == "DRIVER")

    const dispatch = useDispatch()

    useEffect(() => {
        GetUserApi()
        GetAllSupportApi()
        GetNotificationContApi()
        GetHomeApi()
        GetLiveOrderApi()
        notification(false)
    }, [])


    useEffect(() => {
        if (socketData && socketData?.status == "ORDERED" && AppState.currentState == "active") {
            setTimeout(() => {
                navigation.navigate("OrderStatus")
            }, 1500);
        } 
    }, [socketData, AppState.currentState])

    useEffect(() => {
        messaging().onMessage((remoteMessage) => {
            invokeApp()
            GetOrderById(remoteMessage?.data?.orderId)
            console.log("remoteMessageOnMessage", remoteMessage)
            // if (remoteMessage.data.type == "message") {
            //     // GetHomeCountsApi()
            //     // GetMessagesListApi(false)
            // }
        });
        // messaging().onNotificationOpenedApp(notificationCallBack);
        // // Check whether an initial notification is available
        // messaging()
        //     .getInitialNotification()
        //     .then(notificationCallBack);
    }, [])

    messaging().setBackgroundMessageHandler(async remoteMessage => {
        invokeApp()
        GetOrderById(remoteMessage?.data?.orderId)
        console.log('Message handled in the background!', remoteMessage);
      });
      

    const notificationCallBack = (remoteMessage) => {
        console.log("remoteMessageCb", remoteMessage)
        
    }

    useEffect(() => {
        if (userData?.drivingLicenceData?.vehicleId?.driverStatus == true) {
            setToggle(true)
            setSocketDisabled(false)
            if (BackgroundService.isRunning() == false) {
                bgRun()
            }
        } else {
            setToggle(false)
            bgStop()
        }
    }, [userData, notificationPermission])

    //=========back dround run ================

    const veryIntensiveTask = async (taskDataArguments) => {

        const { delay } = taskDataArguments;
        let socket
        Geolocation.stopObserving()

        // const SOCKET_URL = "https://loaderBackend.booksica.in"
        socket = io(SOCKET_URL)
        socket.on("connect", () => {
            console.log("Connected to server")
        })
        socket.on("disconnect", () => {
            console.log("DisConnected to server")
        })


        // let itsEvent = `orderPopUpNotification65048c9804904681a84891b8`

        let itsEvent = `orderPopUpNotification${userData?.drivingLicenceData?.vehicleId?._id}`

        // console.log('first',userData?.drivingLicenceData?.vehicleId?._id)

        socket.on(itsEvent, (item) => {
            console.log("onnasdfgh", item)
            invokeApp()
            dispatch({
                type: SOCKET_DATA,
                payload: item
            })
        })

        let watchIdStatic = Geolocation.watchPosition(
            async (position) => {
                var NY = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                socket.emit("locationUpdated", {
                    coordinates: [NY.lng, NY.lat],
                    driverId: userData?.userData?._id
                });
            },
            (error) => {
                console.log("errol locat", error.code, error.message);
            },
            { enableHighAccuracy: true, accuracy: { android: "high" }, interval: 1000, forceRequestLocation: true, useSignificantChanges: true, distanceFilter: 1 }
        );
        console.log("watchIdStatic ", watchIdStatic)
        SetWatchId(watchIdStatic)
        await new Promise(async (resolve) => {
        });
    };


    const options = {
        taskName: 'Loader Driver',
        taskTitle: 'You are on duty',
        taskDesc: "Let's deliver some goods",
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',

        },
        location: true,
        linkingURI: 'loaderDriver://test',
        parameters: {
            delay: 2000,
        },

    };

    const bgRun = async () => {
        if (!notificationPermission) {
            await BackgroundService.start(veryIntensiveTask, options,);

        } else {
            await BackgroundService.stop();
        }
    }

    const bgStop = async () => {
        await BackgroundService.stop();
        Geolocation.clearWatch(watchId)
    }

    // ======================================

    const handleSwitchPress = () => {
        DriverOnlineStatusApi((dd) => setToggle(dd), (data) => setLoadingModal(data))
    }

    const notification = (openSettingsCondtion = true) => {
        requestNotifications(['alert', 'sound']).then(({ status, settings }) => {
            console.log(status)
            switch (status) {
                case RESULTS.UNAVAILABLE:
                    console.log('This feature is not available (on this device / in this context)');
                    requestNotifications()
                    break;
                case RESULTS.DENIED:
                    setNotificationPermission(true)
                    console.log('The permission has not been requested / is denied but requestable');
                    requestNotifications()
                    break;
                case RESULTS.LIMITED:
                    setNotificationPermission(false)
                    console.log('The permission is limited: some actions are possible');
                    requestNotifications()
                    break;
                case RESULTS.GRANTED:
                    setNotificationPermission(false)
                    console.log('The permission is granted');
                    break;
                case RESULTS.BLOCKED:
                    if (openSettingsCondtion) {
                        Linking.openSettings().finally(() => {
                            setTimeout(() => {
                                notification(false)
                            }, 1000);
                        })
                    }
                    setNotificationPermission(true)
                    console.log('The permission is denied and not requestable anymore');
                    break;
            }

        });
    }




    useEffect(() => {
        BatteryOptEnabled().then((isEnabled) => {
            setBatterPermission(isEnabled)
            console.log(".........")
        });
        batteyFun(false)
    }, [batterPermission])


    const batteyFun = (openSettingsCondtion = true) => {
        if (batterPermission) {
            if (openSettingsCondtion) {
                OpenOptimizationSettings()
                setTimeout(() => {
                    BatteryOptEnabled().then((isEnabled) => {
                        setBatterPermission(isEnabled)
                        console.log(".........")
                    });
                }, 1500);
            }
            console.log("enable", batterPermission)
        } else {
            console.log("enable", batterPermission)
        }
    }

    const onRefresh = () => {
        setScrollRefresh(true)
        GetUserApi()
        GetHomeApi()
        GetLiveOrderApi()
        notification()
        GetNotificationContApi()
        setTimeout(() => {
            setScrollRefresh(false)
        }, 500);
    }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            {notificationPermission ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={images.notipermission} resizeMode='contain' style={styles.notificationIcon} />
                    <Text style={styles.notificationTitle}>Notification permission</Text>
                    <Text style={styles.notificationSubTitle}>Notification permission is blocked in the device settings. Allow the app to access notification</Text>
                    <TouchableOpacity style={styles.allowBtn}
                        onPress={() => { notification() }}
                    >
                        <Text style={styles.allowBtnText}>Allow</Text>
                    </TouchableOpacity>
                </View>
                :
                <>
                    {batterPermission ?
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                            <Image source={images.battery} resizeMode='contain' style={styles.battery} />
                            <Text style={styles.batteryTitle}>Battery Optimization Permission</Text>
                            <Text style={styles.batterySubtitle}>Please off Battery Optimization Permission to run app in background</Text>
                            <TouchableOpacity style={styles.openSettingTouch} activeOpacity={0.5}
                                onPress={() => batteyFun()}
                            >
                                <Text style={styles.openSettingText}>Open Setting</Text> 
                            </TouchableOpacity>
                        </View>
                        :
                        <ScrollView style={{}} contentContainerStyle={{ alignItems: "center", flex: 1, width: SIZES.width }}

                            refreshControl={
                                <RefreshControl
                                    refreshing={scrollRefresh}
                                    onRefresh={onRefresh}
                                //   enabled={enablePTR}
                                />
                            }
                        >
                            {userData?.drivingLicenceData?.vehicleId && new Date(userData?.drivingLicenceData?.vehicleId?.insuranceValidity) < new Date() &&
                                <TouchableOpacity activeOpacity={0.8} style={styles.insurenceCard} onPress={() => navigation.navigate("UploadDocumentMain")}>
                                    <Image source={icons.insurance} resizeMode='contain' style={styles.insuranceIcon} />
                                    <Text style={styles.insurenceText}>Your vehicle insurance velidity is expired, Please renual your vehicle insurance.</Text>
                                </TouchableOpacity>
                            }
                            {!userData?.drivingLicenceData?.vehicleId &&
                                <View style={[styles.insurenceCard]}>
                                    <View style={styles.insuranceIcon}>
                                        <Image source={icons.vehicleId} resizeMode='contain' style={styles.vehicleIdIcon} />

                                    </View>
                                    <Text style={[styles.insurenceText]}>You have no vehicle assign, Contact your fleet to assign your vehicle.</Text>
                                </View>
                            }
                            <View style={styles.alert}
                            >
                                <View style={styles.alert_row}>
                                    <View style={styles.image_box}>
                                        <Image source={userData?.userData?.image ? { uri: http2 + userData?.userData?.image } : images.profile} style={styles.profile} resizeMode="contain" />
                                    </View>
                                    <View >
                                        <Text style={styles.name}>{userData?.userData?.fullName}</Text>
                                        {
                                            userData?.drivingLicenceData?.vehicleId?.registrationNumber &&
                                            <Text style={styles.id}>{userData?.drivingLicenceData?.vehicleId?.registrationNumber}</Text>
                                        }
                                    </View>
                                </View>
                                {
                                    // new Date(userData?.drivingLicenceData?.vehicleId?.insuranceValidity) > new Date() && userData?.drivingLicenceData?.vehicleId &&
                                    userData?.drivingLicenceData?.vehicleId &&
                                    <View>
                                        {
                                            userData?.drivingLicenceData?.vehicleId?.driverStatus == true ?
                                                <View style={styles.row1}>
                                                    <View style={styles.dot} />
                                                    <Text style={[styles.mode, { color: "#06AF12" }]}>Online</Text>
                                                </View>
                                                :
                                                <View style={styles.row1}>
                                                    <View style={[styles.dot, { backgroundColor: 'red' }]} />
                                                    <Text style={[styles.mode, { color: 'red' }]}>Offline</Text>
                                                </View>
                                        }
                                        <SwitchToggle
                                            onPress={() => liveOrderData?.pickUp || !userData?.drivingLicenceData?.vehicleId ? "" : handleSwitchPress()}
                                            switchOn={toggle}
                                            circleColorOff={COLORS.white}
                                            circleColorOn={COLORS.white}
                                            backgroundColorOn={COLORS.green1}
                                            backgroundColorOff={"#D9D9D9"}
                                            containerStyle={{ ...styles.toggleContainerStyle, }}
                                            circleStyle={styles.toggleCircleStyle}
                                        />
                                    </View>
                                }
                            </View>

                            <TouchableOpacity style={styles.wallet_btn}
                                onPress={() => navigation.navigate("TransactionHistory")}
                            >
                                <View style={styles.wallet_row}>
                                    <Icons name={"wallet1"} size={33} color={COLORS.white} />
                                    <View style={styles.wallet_box}>
                                        <Text style={styles.wallet_text}>Wallet Balance</Text>
                                        <Text style={styles.wallet_amount}>₹ {userData?.userData?.amount}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* ----------------------------------------------- */}


                            {/* ------------------------------------------------------ */}

                            <View style={styles.box_container}>
                                <TouchableOpacity style={styles.box_btn}
                                    activeOpacity={0.6}
                                    onPress={() => navigation.navigate("Filter", { name: "Today’s Order", status: "today" })}
                                >
                                    <Text style={styles.box_total}>{homeData?.todaysDriverOrder}</Text>
                                    <Text style={styles.box_title}>Today’s Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box_btn}
                                    activeOpacity={0.6}
                                    onPress={() => navigation.navigate("Filter", { name: "Today’s Earning", status: "todays" })}
                                >
                                    <Text style={styles.box_total}>₹ {homeData?.todayDriverEarning}</Text>
                                    <Text style={styles.box_title}>Today’s Earning</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box_btn}
                                    activeOpacity={0.6}
                                    onPress={() => navigation.navigate("Filter", { name: "Complete Order", status: "totals" })}
                                >
                                    <Text style={styles.box_total}>{homeData?.completedOrder}</Text>
                                    <Text style={styles.box_title}>Complete Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box_btn}
                                    activeOpacity={0.6}
                                    onPress={() => navigation.navigate("Filter", { name: "Total Earning", status: "totals" })}
                                >
                                    <Text style={styles.box_total}>₹ {homeData?.totalDrivingEarning}</Text>
                                    <Text style={styles.box_title}>Total Earning</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ flex: 1, position: 'absolute', bottom: SIZES.height * .11, right: SIZES.width * .03 }}>

                                <Menu
                                    visible={visible}
                                    anchor={<View style={styles.whatsappIconCont}>
                                        <TouchableOpacity
                                            onPress={() => { setVisible(!visible) }}
                                        >
                                            <Image source={icons.support} resizeMode='contain' style={styles.whatsappIcon} />
                                        </TouchableOpacity>
                                    </View>}
                                    onRequestClose={() => setVisible(!visible)}
                                    style={{ width: SIZES.width * .22, height: SIZES.height * .17, }}
                                >
                                    <MenuDivider color={COLORS.white} />
                                    <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible) }}>
                                        <TouchableOpacity style={styles.whatsappIconTouch}
                                            onPress={() => { setVisible(!visible), Linking.openURL(`whatsapp://send?phone=+91${support?.whatsappNumber}&text=helloo`) }}
                                        >
                                            <Image source={icons.whatsapp} resizeMode='contain' style={styles.whatsappIcon2} />
                                        </TouchableOpacity>
                                    </MenuItem>
                                    <MenuDivider color={COLORS.white} />
                                    <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible) }}>
                                        <TouchableOpacity style={[styles.whatsappIconTouch, { backgroundColor: '#DBE1FA' }]}
                                            onPress={() => { setVisible(!visible), Linking.openURL(`tel:${support?.mobileNumber}`) }}
                                        >
                                            <Image source={icons.call1} resizeMode='contain' style={[styles.whatsappIcon2]} />
                                        </TouchableOpacity>
                                    </MenuItem>
                                    <MenuDivider color={COLORS.white} />


                                </Menu>
                            </View>
                        </ScrollView>
                    }
                </>
            }
            {liveOrderData && liveOrderData?.pickUp &&
                <TouchableOpacity style={styles.user_box}
                    onPress={() => navigation.navigate("Booking")}
                >
                    <View style={styles.row}>
                        <View style={styles.user_image_box}>
                            <Image source={images.profile2} style={styles.user_image} resizeMode="contain" />
                            {/* <View style={styles.active} /> */}
                        </View>
                        <View>
                            <Text style={styles.user_name}>{liveOrderData?.customerId?.fullName}</Text>
                            <Text style={styles.loc_text}>{liveOrderData?.pickUp?.picked == false ? "Way to pick up" : "Way to deliver"}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.live_box}>
                            <View style={styles.dot} />
                            <Text style={styles.live}>Live</Text>
                        </View>
                        <TouchableOpacity style={styles.call_btn}
                            onPress={() => Linking.openURL(`tel:${liveOrderData?.customerId?.mobile}`)}
                        >
                            <View style={styles.call_box}>
                                <Icons name={"call"} size={20} color={COLORS.primary} />
                            </View>
                            <Text style={styles.call_text}>Call</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }
            <Loader
                loading={loadingModal}
                color={COLORS.primary}
                size='large'
            />



        </View>
    )
}

AppRegistry.registerHeadlessTask(
    'RNPushNotificationActionHandlerTask', () => notificationActionHandler,
);

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    token: state.auth.token,
    currentLocation: state.auth.currentLocation,
    homeData: state.home.homeData,
    liveOrderData: state.order.liveOrderData,
    newOrder: state.home.newOrder,
    socketData: state.order.socketData,
    watchId: state.home.watchId,
    supportData: state.home.supportData,
})

const mapDispatchToProps = {
    GetUserApi,
    DriverOnlineStatusApi,
    GetHomeApi,
    GetLiveOrderApi,
    SetNewOrder,
    SetWatchId,
    GetNotificationContApi,
    GetOrderById,
    GetAllSupportApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
