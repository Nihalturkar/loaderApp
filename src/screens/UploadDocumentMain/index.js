import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, StatusBar, Image, TextInput, ActivityIndicator, RefreshControl } from 'react-native'
import { COLORS, SIZES, icons, images } from '../../constants'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { ApplyRefralApi, GetAadharDetailsApi, GetApplyRefralApi, GetDLDetailsApi, GetVehicleDetailsApi } from '../../redux/actions/documentAction'
import { GetUserApi } from '../../redux/actions/authAction'


const { width, height } = Dimensions.get('window')

const UploadDocumentMain = ({ navigation, userData, GetVehicleDetailsApi, ApplyRefralApi, GetAadharDetailsApi,GetDLDetailsApi, GetUserApi, GetApplyRefralApi, refralData }) => {
    const docCon = userData?.documentStatus
    const [refralCode, setRefralCode] = useState(null)
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [scrollRefresh, setScrollRefresh] = useState(false)

    useEffect(() => {
        GetAadharDetailsApi()
        GetVehicleDetailsApi()
        GetDLDetailsApi()
        GetApplyRefralApi((data) => { setLoadingIndicator(data) })
    }, [])

    const handleRefralSubmit = () => {
        if (refralCode) {
            ApplyRefralApi(refralCode, (data) => { setLoadingIndicator(data) })
        }
    }

    const onRefresh = () => {
        setScrollRefresh(true)
        GetVehicleDetailsApi()
        GetUserApi()
        GetAadharDetailsApi()
        GetDLDetailsApi()
        GetApplyRefralApi((data) => { setLoadingIndicator(data) })
        setTimeout(() => {
            setScrollRefresh(false)
        }, 500);
    }

    console.log("refralData", userData?.drivingLicenceData?.driverCode, docCon)
    return (
        <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{ paddingBottom: SIZES.height * .02 }}
            keyboardShouldPersistTaps='handled'
            refreshControl={
                <RefreshControl
                    refreshing={scrollRefresh}
                    onRefresh={onRefresh}
                //   enabled={enablePTR}
                />
            }
        >
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={styles.topMain}>
                <View>
                    <Text style={styles.topHiText}>Hi,</Text>
                    <Text style={styles.topLetsText}>Let's start you journey as a Partner!</Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }}
                    onPress={() => navigation.navigate("Help")}
                >
                    <Image source={icons.headPhone} resizeMode='contain' style={styles.headPhoneIcon} />
                    <Text style={styles.topHelpText}>Help</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secondMain}>
                <Image source={icons.current} resizeMode='contain' style={styles.currentIcon} />
                <Text style={styles.secondRegisterText}>We are charging ₹ 100 registration fees and that will be added in wallet, means no signup fees.</Text>
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                {/* refer code input box */}
                {refralData == null ?
                    <View style={styles.bottom_row}>
                        <TextInput placeholder='Supervisor Refer code'
                            placeholderTextColor={COLORS.gray30} style={styles.input}
                            value={refralCode}
                            onChangeText={(text) => setRefralCode(text)}
                        />
                        <TouchableOpacity style={[styles.submit_btn, refralCode == null || refralCode == "" ? { backgroundColor: COLORS.gray } : null]} disabled={loadingIndicator || refralCode == null || refralCode == ""}
                            onPress={() => handleRefralSubmit()}
                        >
                            {loadingIndicator &&
                                <ActivityIndicator color={COLORS.white} size={22} style={{ marginRight: SIZES.width * .03 }} />
                            }
                            <Text style={styles.submit_btn_text}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={[styles.bottom_row, { justifyContent: 'flex-start', marginLeft: SIZES.width * .04 }]}>
                        <Image source={images.profile2} resizeMode='contain' style={styles.superVisorImg} />
                        <View style={{ marginLeft: SIZES.width * .03 }}>
                            <Text style={styles.supervisorName}>{refralData?.supervisorId?.fullName} (Supervisor)</Text>
                            <Text style={styles.supervisorMob}>{refralData?.supervisorId?.mobile}</Text>
                        </View>
                    </View>
                }

                <View style={{ width: width * .94, marginTop: height * .0 }}>
                    <TouchableOpacity
                        style={[styles.card_touch]}
                        onPress={() => { navigation.navigate("UploadDriverDocument", docCon?.aadhar == false || docCon?.aadhar == "REJECTED" ? { page: "ID" } : { page: "DL" }) }}
                        activeOpacity={0.6}
                        disabled={docCon?.aadhar == "APPROVED" && docCon?.DL == "APPROVED" || docCon?.aadhar == "PENDING" && docCon?.DL == "PENDING" || docCon?.aadhar == "APPROVED" && docCon?.DL == "PENDING" || docCon?.aadhar == "PENDING" && docCon?.DL == "APPROVED"}
                    >
                        <View style={[styles.numCircleMain, docCon?.aadhar == "PENDING" || docCon?.DL == "PENDING" ? { borderColor: '#F9B528' } : null, docCon?.aadhar == "APPROVED" && docCon?.DL == "APPROVED" && { borderColor: '#16C107' }, docCon?.aadhar == "REJECTED" || docCon?.DL == "REJECTED" ? { borderColor: '#EF1515' } : null]} >
                            <View style={[styles.numCircle, docCon?.aadhar == "PENDING" || docCon?.DL == "PENDING" ? { backgroundColor: '#F9B528' } : null, docCon?.aadhar == "APPROVED" && docCon?.DL == "APPROVED" && { backgroundColor: '#16C107' }, docCon?.aadhar == "REJECTED" || docCon?.DL == "REJECTED" ? { backgroundColor: '#EF1515' } : null]} >
                                <Text style={styles.numText} >1</Text>
                            </View>
                        </View>
                        <View style={[styles.cardMain, docCon?.aadhar == "PENDING" || docCon?.DL == "PENDING" ? { backgroundColor: '#F9B528' } : null, docCon?.aadhar == "APPROVED" && docCon?.DL == "APPROVED" && { backgroundColor: '#16C107' }, docCon?.aadhar == "REJECTED" || docCon?.DL == "REJECTED" ? { backgroundColor: '#EF1515' } : null]}>
                            <View style={styles.arrowMain}>
                                <Text style={[styles.inactiveuploadText, { color: COLORS.white }]} >Upload driver documents</Text>
                                <Image source={icons.backArr} resizeMode='contain' style={styles.inactivebackArr} />
                            </View>
                            <Text style={[styles.inactivedocumentText, { color: COLORS.white }]} >Driving license, Adhar card.</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.inactivecard_touch}
                        onPress={() => {
                            userData?.userData?.fleetvehicleExist ?
                                navigation.navigate("ShareCode")
                                :
                                docCon?.Rc != false ? navigation.navigate("UploadDetails", docCon?.Rc == "REJECTED" || docCon?.Rc == false ? { page: "RC" } : { page: "PUC" }) : navigation.navigate("UploadVehicleOption")
                        }}
                        activeOpacity={0.5}
                        disabled={docCon?.aadhar == false || docCon?.DL == false || docCon?.Rc != false && docCon?.Rc != "REJECTED"}
                    >
                        <View style={docCon?.aadhar != false && docCon?.DL != false ? [styles.numCircleMain, docCon?.Rc == "PENDING" && { borderColor: '#F9B528' }, docCon?.Rc == "APPROVED" && { borderColor: '#16C107' }, docCon?.Rc == "REJECTED" && { borderColor: '#EF1515' }] : styles.inactivenumCircleMain} >
                            <View style={docCon?.aadhar != false && docCon?.DL != false ? [styles.numCircle, docCon?.Rc == "PENDING" && { backgroundColor: '#F9B528' }, docCon?.Rc == "APPROVED" && { backgroundColor: '#16C107' }, docCon?.Rc == "REJECTED" && { backgroundColor: '#EF1515' }] : styles.inactivenumCircle} >
                                <Text style={styles.inactivenumText} >2</Text>
                            </View>
                        </View>
                        <View style={docCon?.aadhar != false && docCon?.DL != false ? [styles.cardMain, docCon?.Rc == "PENDING" && { backgroundColor: '#F9B528' }, docCon?.Rc == "APPROVED" && { backgroundColor: '#16C107' }, docCon?.Rc == "REJECTED" && { backgroundColor: '#EF1515' }] : styles.inactivecardMain}>
                            <View style={styles.inactivearrowMain}>
                                <Text style={docCon?.aadhar != false && docCon?.DL != false ? styles.uploadText : styles.inactiveuploadText} >Upload Vehicle documents</Text>
                                <Image source={icons.backArr} resizeMode='contain' style={styles.inactivebackArr} />
                            </View>
                            <Text style={docCon?.aadhar != false && docCon?.DL != false ? styles.documentText : styles.inactivedocumentText} >Registration certificate, puc.</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.inactivecard_touch}
                        disabled={docCon?.Rc == false}
                        onPress={() => navigation.navigate("Training")}
                    >
                        <View style={docCon?.Rc == false ? styles.inactivenumCircleMain : styles.numCircleMain} >
                            <View style={docCon?.Rc == false ? styles.inactivenumCircle : styles.numCircle} >
                                <Text style={styles.inactivenumText} >3</Text>
                            </View>
                        </View>
                        <View style={docCon?.Rc == false ? styles.inactivecardMain : styles.cardMain}>
                            <View style={styles.inactivearrowMain}>
                                <Text style={docCon?.Rc == false ? styles.inactiveuploadText : styles.uploadText} >Training</Text>
                                <Image source={icons.backArr} resizeMode='contain' style={styles.inactivebackArr} />
                            </View>
                            <Text style={docCon?.Rc == false ? styles.inactivedocumentText : styles.documentText} >Get self trained on how to use the app</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.inactivecard_touch}
                        disabled={true}
                    >
                        <View style={styles.inactivenumCircleMain} >
                            <View style={styles.inactivenumCircle} >
                                <Text style={styles.inactivenumText} >4</Text>
                            </View>
                        </View>
                        <View style={styles.inactivecardMain}>
                            <View style={styles.inactivearrowMain}>
                                <Text style={styles.inactiveuploadText} >Get your first trip</Text>
                                <Image source={icons.backArr} resizeMode='contain' style={styles.inactivebackArr} />
                            </View>
                            <Text style={styles.inactivedocumentText} >Voila! You are ready to do your first trip</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                {/* refer code input box */}
                {/* {refralData == null ?
                    <View style={styles.bottom_row}>
                        <TextInput placeholder='Supervisor Refer code'
                            placeholderTextColor={COLORS.gray30} style={styles.input}
                            value={refralCode}
                            onChangeText={(text) => setRefralCode(text)}
                        />
                        <TouchableOpacity style={styles.submit_btn}
                            onPress={() => handleRefralSubmit()}
                        >
                            {loadingIndicator &&
                                <ActivityIndicator color={COLORS.white} size={22} style={{ marginRight: SIZES.width * .03 }} />
                            }
                            <Text style={styles.submit_btn_text}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={[styles.bottom_row, { justifyContent: 'flex-start', marginLeft: SIZES.width * .04 }]}>
                        <Image source={images.profile2} resizeMode='contain' style={styles.superVisorImg} />
                        <View style={{ marginLeft: SIZES.width * .03 }}>
                            <Text style={styles.supervisorName}>{refralData?.supervisorId?.fullName} (Supervisor)</Text>
                            <Text style={styles.supervisorMob}>{refralData?.supervisorId?.mobile}</Text>
                        </View>
                    </View>
                } */}
            </View>

        </KeyboardAwareScrollView>
    )
}


const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    refralData: state.document.refralData,
})

const mapDispatchToProps = {
    GetVehicleDetailsApi,
    ApplyRefralApi,
    GetApplyRefralApi,
    GetUserApi,
    GetAadharDetailsApi,
    GetDLDetailsApi
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDocumentMain)