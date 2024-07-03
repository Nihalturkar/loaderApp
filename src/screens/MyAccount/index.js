import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator } from "react-native";
import { COLORS, SIZES, dummyData, icons, images, } from "../../constants";
import styles from "./styles";
import { connect } from "react-redux";
import Icons from "../../component/Icons";
import NavigateButton from "../../component/NavigateButton";
import { LogoutApi, UpdateDriverCodeApi } from "../../redux/actions/authAction";
import Modal from 'react-native-modal'
import { UpdateUpiApi } from "../../redux/actions/bilanceAction";
import { http2 } from "../../services/api";


const MyAccount = ({ navigation, LogoutApi, userData, UpdateUpiApi, UpdateDriverCodeApi }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [upi, setUpi] = useState(userData?.upi)
    const [upierror, setUpierror] = useState(false)
    const [loadingIndicator, setloadingIndicator] = useState(false)
    const [driverCode, setDriverCode] = useState(null)

    const upiVelidation = /[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}/

    const handleUpiVelidation = (text) => {
        if (upiVelidation.test(text)) {
            setUpierror(false)

        } else {
            setUpierror(true)
        }
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <View style={styles.profileBox}>
                <View >
                    <View style={styles.userProfileBox}>
                        {
                            userData?.userData?.image ?
                                <Image source={{ uri: http2 + userData?.userData?.image }} style={styles.userProfile} resizeMode='contain' />
                                :
                                <Image source={images.profile} style={styles.userProfile} resizeMode='contain' />
                        }
                    </View>
                </View>
            </View>
            <View style={styles.userDetails}>
                <Text style={styles.userName}>{userData?.userData?.fullName}</Text>
                <Text style={styles.text}>+91 {userData?.userData?.mobile}</Text>

                <View style={styles.driverCodeCont}>
                    <Text style={styles.driverText}>Driver Code : - </Text>
                    <View style={styles.codeMain}>
                        {driverCode ?
                            <Text style={[styles.code, { color: COLORS.black }]}>{driverCode}</Text>
                            :
                            <Text style={styles.code}>XXXXXXXXXX</Text>
                        }

                    </View>
                    <TouchableOpacity style={styles.seeCodeTouch}
                        activeOpacity={0.5} onPress={() => {
                            driverCode ?
                                setDriverCode(null)
                                :
                                UpdateDriverCodeApi(userData?.userData?._id, (data) => setloadingIndicator(data), (data) => setDriverCode(data))
                        }}
                    >
                        {loadingIndicator ?
                            <ActivityIndicator size={20} color={COLORS.white} />
                            :
                            <Text style={styles.seeCodeText}>{driverCode ? "Hide Code" : "See Code"}</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.btnContainer}>
                <NavigateButton source={icons.profile1}
                    onPress={() => navigation.navigate("EditProfile")}
                >
                    Edit Profile
                </NavigateButton>
                {!userData?.drivingLicenceData?.driverId?.isDriverProfile ? null :
                    <NavigateButton source={icons.profile1}
                        onPress={() => navigation.navigate("UploadDocumentMain")}
                    >
                        Document Verification
                    </NavigateButton>
                }
                {/* 
                <NavigateButton source={icons.vehicle}
                        onPress={() => navigation.navigate("CheckVehicle")}
                    >
                        Check vehicle
                    </NavigateButton> 
                    */}
                <NavigateButton source={icons.termsCondition}
                    onPress={() => navigation.navigate("TermsAndCondition")}
                >
                    Terms & conditions
                </NavigateButton>
                <NavigateButton source={icons.policyIcon}
                    onPress={() => navigation.navigate("PrivacyPolicy")}
                >
                    Privacy policy
                </NavigateButton>
                <NavigateButton source={icons.aboutUs}
                    onPress={() => navigation.navigate("AboutUs")}
                >
                    About Us
                </NavigateButton>
                <NavigateButton source={icons.policyIcon}
                    onPress={() => navigation.navigate("DriverPolicy")}
                >
                    Driver policy
                </NavigateButton>
                <NavigateButton source={icons.upi}
                    onPress={() => setModalOpen(!modalOpen)}
                >
                    UPI ID
                </NavigateButton>

                <NavigateButton source={icons.logout}
                    iconColor={COLORS.blue}
                    rightIconVisible={false}
                    textColor={COLORS.blue}
                    onPress={() => LogoutApi()}
                >
                    Logout
                </NavigateButton>

            </View>
            <Modal isVisible={modalOpen} backdropOpacity={0.3}
            // onBackButtonPress={() => setModalOpen(!modalOpen)}
            // onBackdropPress={() => setModalOpen(!modalOpen)}
            >
                <View style={styles.modalMain}>
                    <Text style={styles.upiHeading}>UPI ID</Text>
                    <TextInput
                        placeholder="uip@ybl"
                        style={styles.upiInput}
                        placeholderTextColor={COLORS.gray40}
                        value={upi}
                        onChangeText={(text) => { setUpi(text), handleUpiVelidation(text) }}
                    />
                    {upierror &&
                        <Text style={styles.validText}>Please enter valid UPI ID *</Text>
                    }
                    <View style={styles.modalBtnMain}>
                        <TouchableOpacity style={styles.cancelBtn}
                            onPress={() => setModalOpen(!modalOpen)}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.cancelBtn, { backgroundColor: COLORS.primary, borderColor: COLORS.primary, flexDirection: 'row' }]}
                            // disabled={!upi|| upierror}
                            onPress={() => UpdateUpiApi({ upi: upi }, (data) => { setloadingIndicator(data), setModalOpen(!modalOpen) })}
                        >
                            {loadingIndicator &&
                                <ActivityIndicator size={23} color={COLORS.white} style={{ marginRight: SIZES.width * .03 }} />
                            }
                            <Text style={[styles.btnText, { color: COLORS.white }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    LogoutApi,
    UpdateUpiApi,
    UpdateDriverCodeApi
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);