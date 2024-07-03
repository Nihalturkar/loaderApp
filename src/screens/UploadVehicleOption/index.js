import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import { COLORS, icons } from '../../constants'
import styles from './styles'
import { RadioButton } from 'react-native-paper'
import { GetCityApi, GetVehicleTypeApi } from '../../redux/actions/documentAction'
import { connect } from 'react-redux'
import { RNToasty } from 'react-native-toasty'


const { width, height } = Dimensions.get('window')

const UploadVehicleOption = ({ navigation, GetCityApi, GetVehicleTypeApi, userData }) => {
    const [vehicleOption, setVehicleOption] = useState();

    useEffect(() => {
        GetCityApi()
        GetVehicleTypeApi()
    }, [])

    return (
        <View style={styles.UploadVehicleOptionCont}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={styles.box_container}>
                <Text style={styles.chooseText}>Choose Option one of them : </Text>

                <TouchableOpacity style={styles.vehicle_btn}
                    onPress={() => setVehicleOption("ownVehicle")}
                >
                    <View style={styles.row}>
                        <Image source={vehicleOption == "ownVehicle" ? icons.activeIndicator : icons.inactiveIndicator} resizeMode='contain' style={styles.indicatorIcon} />
                        <Text style={styles.vehicle_text}>Own Vehicle</Text>
                    </View>
                    <Image source={icons.ownVehicle} resizeMode='contain' style={styles.ownVehicle} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.vehicle_btn}
                    onPress={() => setVehicleOption("anotherVehicle")}
                >
                    <View style={styles.row}>
                        <Image source={vehicleOption == "anotherVehicle" ? icons.activeIndicator : icons.inactiveIndicator} resizeMode='contain' style={styles.indicatorIcon} />
                        <Text style={styles.vehicle_text}>Another Person Vehicle</Text>
                    </View>

                    <Image source={icons.anotherVehicle} resizeMode='contain' style={styles.ownVehicle} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.btnTouch, vehicleOption && { backgroundColor: '#21AB18', }]}
                activeOpacity={0.4}
                disabled={vehicleOption ? false : true}
                onPress={() => {
                    if (vehicleOption == "ownVehicle") {
                        navigation.navigate("UploadDetails", { page: "RC" })
                    } else {
                        if (userData?.drivingLicenceData?.driverCode) {
                            navigation.navigate("ShareCode")
                        } else {
                            RNToasty.Normal({
                                title: "Please wait for admin approval"
                            })
                        }
                    }
                }}
            >
                <Text style={styles.btnText}>PROCEED</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    GetCityApi,
    GetVehicleTypeApi
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadVehicleOption)