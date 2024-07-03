import React, { useEffect, useState } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { Image, LogBox, StyleSheet, View, StatusBar, Text, Alert, PermissionsAndroid, TouchableOpacity, Linking, AppState } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Loading from "../component/Loading"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN, CURRENT_LOCATION, INTERNET_CONNECTION } from '../redux/types';
import HeaderLeft from '../component/HeaderLeft';
import UploadDocumentMain from '../screens/UploadDocumentMain';
import UploadDriverDocument from '../screens/UploadDriverDocument';
import UploadVehicleOption from '../screens/UploadVehicleOption';
import UploadDetails from '../screens/UploadDetails';
import ShareCode from '../screens/ShareCode';
import Training from '../screens/Training';
import { GetUserApi, LogoutApi } from '../redux/actions/authAction';
import { HomeStack } from '../navigation/stackNavigator';
import { useNetInfo, NetInfoState } from "@react-native-community/netinfo";
import Geolocation from 'react-native-geolocation-service';

import LocationPermission from '../component/LocationPermission';
import Help from '../screens/Help';
import { GetApplyRefralApi, GetCityApi } from '../redux/actions/documentAction';
// import { View,Image } from 'react-native';
import { checkPermission } from 'react-native-floating-bubble';
import { RNToasty } from 'react-native-toasty';
import DeviceInfo from 'react-native-device-info';
import VideoPreview from '../screens/VideoPreview';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = ({ token, GetUserApi, userData, LogoutApi, GetApplyRefralApi, GetCityApi }) => {

    const [rootLoading, setRootLoading] = useState(true)
    const dispatch = useDispatch()
    const [locationCondition, setLocationCondition] = useState(false)
    const [internetConnection, setInternetConnection] = useState(true)
    const [overAppPermission, setOverAppPermission] = useState(false)
    const [deviceId, setDeviceId] = useState(null)

    const preLoad = async () => {
        await AsyncStorage.getItem('@USER_TOKEN').then(value => {
            if (value) {
                dispatch({
                    type: AUTH_TOKEN,
                    payload: value
                })
                setRootLoading(false)
                GetUserApi()
            } else {
                setRootLoading(false)
            }

        })
            .catch(err => console.log("Root error : ", err))
    }

    useEffect(() => {
        GetUserApi()
        GetCityApi()
        GetApplyRefralApi()
        preLoad()
        deviceUniqueId()
    }, [])

    const deviceUniqueId = async () => {
        let deviceIdInfo = await DeviceInfo.getUniqueId();
        setDeviceId(deviceIdInfo)
    }

    useEffect(() => {
        // alert(deviceId != userData?.userData?.driverDeviceId)
        if (token && userData && userData?.userData && deviceId && deviceId != userData?.userData?.driverDeviceId) {
            LogoutApi()
            Alert.alert(
                'Logout',
                "You are logout in this device because your id is loged in another device.",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'Okay', onPress: () => { console.log("okay") }
                    },
                ]
            );
        }
    }, [token, userData])

    useEffect(() => {
        if (token && userData?.userData?.isDriverProfile == true) {
            permission(false)
        }
    }, [token, userData])

    const onCheckPermissoin = (openSettingsCondition = true) => {
        checkPermission()
            .then((value) => {
                // RNToasty.Normal({ title: `Permission: ${value ? 'Yes' : 'No'}` })
                if (!value) {
                    setOverAppPermission(true)
                    if (openSettingsCondition) {
                        Linking.openSettings().then(() => {
                            setTimeout(() => {
                                onCheckPermissoin(false)
                            }, 1500);
                        })
                    }
                } else {
                    setOverAppPermission(false)
                }
            })
            .catch(() => {
                RNToasty.Error({ title: "Failed to check" })
            })
    }



    const permissionCheck = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        )
        console.log("grantedgranted", granted)
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
            setLocationCondition(false)
            onCheckPermissoin(false)
        }
        else {
            setLocationCondition(true)

        }
    }

    const internetState = useNetInfo();

    useEffect(() => {
        if (internetState.isConnected === false) {
            dispatch({
                type: INTERNET_CONNECTION,
                payload: false
            })
        } else {
            dispatch({
                type: INTERNET_CONNECTION,
                payload: true
            })
        }
        preLoad()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [internetState.isConnected])



    const permission = async (openSettingsCondition = true) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
            )
            // console.log("first", PermissionsAndroid.RESULTS.GRANTED, granted)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    async (position) => {
                        setLocationCondition(false)
                        onCheckPermissoin(false)
                        var NY = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        dispatch({
                            type: CURRENT_LOCATION,
                            payload: NY
                        })
                    },
                    (error) => {
                        console.log("errol locat", error.code, error.message);
                        setLocationCondition(true)
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                setLocationCondition(true)
                if (openSettingsCondition) {
                    Linking.openSettings().finally(() => {
                        setTimeout(() => {
                            permissionCheck()
                            console.log("s")
                        }, 1000);
                    })
                }
            }
        } catch (err) {
            console.warn(err)
        }
    }


    console.log("ii", userData?.userData?.isDriverVerify)

    return (
        <>

            <>
                {locationCondition ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white }}>
                        <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
                        <LocationPermission
                            allowPress={permission}
                        />
                    </View>
                    :
                    <>
                        {overAppPermission ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
                                <Image source={images.appOverTheApp} resizeMode='contain' style={styles.notificationIcon} />
                                <Text style={styles.notificationTitle}>Display over other app permission</Text>
                                <Text style={styles.notificationSubTitle}>Please 'Allow' Display over other app permission to show order when you use another app.</Text>
                                <TouchableOpacity style={styles.allowBtn}
                                    onPress={() => onCheckPermissoin()}
                                >
                                    <Text style={styles.allowBtnText}>Open Settings</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <>
                                {
                                    rootLoading ?
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor: COLORS.white }}>
                                            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
                                            <Image source={icons.loading} style={{ width: SIZES.width * .2, height: SIZES.width * .2 }} />
                                        </View>
                                        :
                                        token === null ?
                                            < Stack.Navigator
                                                screenOptions={() => ({
                                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                                })}
                                                initialRouteName='Login'
                                            >


                                                <Stack.Screen name="Login" component={Login}
                                                    options={({ navigation }) => ({
                                                        headerShown: false,
                                                    })}
                                                />

                                                <Stack.Screen name="Register" component={Register}
                                                    options={({ navigation }) => ({
                                                        headerShown: false,
                                                    })}
                                                />
                                                <Stack.Screen name="Otp" component={Otp}
                                                    options={({ navigation }) => ({
                                                        headerStyle: styles.headerStyle,
                                                        headerTitleStyle: styles.headerTitle,
                                                        headerTitle: "Otp verification",
                                                        headerLeft: () => (
                                                            <HeaderLeft navigation={navigation} />
                                                        ),
                                                    })}
                                                />

                                            </Stack.Navigator>
                                            :
                                            userData?.userData?.isDriverProfile == false && userData?.userData?.isDriverVerify == false ?
                                                <Stack.Navigator
                                                    screenOptions={() => ({
                                                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                                    })}
                                                >
                                                    {/* <Stack.Screen name="Training" component={Training}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Training",
                                                            headerTintColor: COLORS.white,
                                                        })}
                                                    /> */}
                                                    <Stack.Screen name="UploadDocumentMain" component={UploadDocumentMain}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: styles.headerTitle,
                                                            headerTitleAlign: 'center',
                                                            headerTitle: () => (
                                                                <Image source={icons.loaderLogo} resizeMode='contain' style={styles.logo} />
                                                            ),
                                                            headerTintColor: COLORS.white,
                                                            headerRight: () => (
                                                                <TouchableOpacity
                                                                    onPress={() => LogoutApi()}
                                                                >
                                                                    <Image source={icons.logout} resizeMode='contain' style={styles.logoutIcon} />
                                                                </TouchableOpacity>
                                                            )
                                                        })}
                                                    />
                                                    <Stack.Screen name="UploadDriverDocument" component={UploadDriverDocument}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Upload Documents",
                                                            headerTintColor: COLORS.white
                                                        })}
                                                    />
                                                    <Stack.Screen name="UploadVehicleOption" component={UploadVehicleOption}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Upload Vehicle Option",
                                                            headerTintColor: COLORS.white
                                                        })}
                                                    />
                                                    <Stack.Screen name="UploadDetails" component={UploadDetails}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Upload Details",
                                                            headerTintColor: COLORS.white
                                                        })}
                                                    />
                                                    <Stack.Screen name="ShareCode" component={ShareCode}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Share code",
                                                            headerTintColor: COLORS.white,
                                                        })}
                                                    />
                                                    <Stack.Screen name="Training" component={Training}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Training",
                                                            headerTintColor: COLORS.white,
                                                        })}
                                                    />
                                                    <Stack.Screen name="videoPreview" component={VideoPreview}
                                                        options={({ navigation }) => ({
                                                            headerShown: false
                                                        })}
                                                    />
                                                    <Stack.Screen name="Help" component={Help}
                                                        options={({ navigation }) => ({
                                                            headerStyle: [styles.headerStyle, { backgroundColor: COLORS.primary }],
                                                            headerTitleStyle: [styles.headerTitle, { color: COLORS.white }],
                                                            headerTitleAlign: 'center',
                                                            headerTitle: "Help",
                                                            headerTintColor: COLORS.white,
                                                        })}
                                                    />
                                                </Stack.Navigator>
                                                :

                                                <Stack.Navigator
                                                // drawerContent={props => <DrawerContent {...props} />}

                                                >
                                                    <Drawer.Screen name="HomeStack" component={HomeStack}
                                                        options={() => ({
                                                            headerShown: false,
                                                        })}
                                                    />

                                                </Stack.Navigator>

                                }
                            </>
                        }
                    </>
                }
            </>
            {/* //     
            //     <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center' }}>
            //         <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            //         <Image
            //             source={images.noInternet}
            //             resizeMode='contain'
            //             style={styles.noInternetIcon}
            //         />
            //         <Text style={styles.noInternetText}>🤪No Internet Connection🤪</Text>
            //     </View> */}


        </>
    )
}
const mapStateToProps = (state) => ({
    token: state.auth.token,
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    GetUserApi,
    LogoutApi,
    GetApplyRefralApi,
    GetCityApi
}
export default connect(mapStateToProps, mapDispatchToProps)(Root);

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: COLORS.white,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.25)'
    },

    headerTitle: {
        fontFamily: FONTS.medium,
        fontSize: 17,
        color: COLORS.black,
        marginBottom: -6,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },
    logo: {
        width: SIZES.width * .35,
        height: SIZES.height * .065,
        // backgroundColor:COLORS.black
    },
    noInternetIcon: {
        width: SIZES.width * .75,
        height: SIZES.width * .75
    },
    noInternetText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        fontSize: 18,
        marginTop: SIZES.height * .02,
        marginBottom: SIZES.height * .07
    },
    logoutIcon: {
        width: SIZES.width * .08,
        height: SIZES.width * .08,
        tintColor: COLORS.white,
        margin: 10
    },
    //====notificationIcon
    notificationIcon: {
        width: SIZES.width * .75,
        height: SIZES.height * .25
    },
    notificationTitle: {
        color: COLORS.gray80,
        fontSize: SIZES.width * .045,
        fontFamily: FONTS.medium
    },
    notificationSubTitle: {
        color: COLORS.gray60,
        fontSize: SIZES.width * .034,
        fontFamily: FONTS.regular,
        textAlign: 'center',
        width: SIZES.width * .85
    },
    allowBtn: {
        width: SIZES.width * .6,
        height: SIZES.height * .06,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 6,
        marginTop: SIZES.height * .02
    },
    allowBtnText: {
        color: COLORS.white,
        fontSize: SIZES.width * .04,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },
    //====
})