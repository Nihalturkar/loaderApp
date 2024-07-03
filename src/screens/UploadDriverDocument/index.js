import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, StatusBar, ScrollView, TextInput } from 'react-native'
import { COLORS, Icons, SIZES, icons } from '../../constants'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import { BottomSheet } from 'react-native-btr';
import { connect } from 'react-redux';
import { AdharDetailsApi, DLDetailsApi } from '../../redux/actions/documentAction';
import Loader from "react-native-modal-loader";
import Input1 from '../../component/Inputs/Input1';
import DatePicker from 'react-native-date-picker'
import { formattedDateServer } from '../../services/date';


const { width, height } = Dimensions.get('window')

const UploadDriverDocument = ({ route, navigation, userData, AdharDetailsApi, DLDetailsApi, cityData, getAadharDetails, getDLDetails }) => {
    const [firstImg, setFirstImg] = useState(null)
    const [secondImg, setSecondImg] = useState(null)
    const [imageBottomSheet, setImageBottomSheet] = useState(false)
    const [conditionState, setConditionState] = useState(route?.params?.page)
    const [side, setSide] = useState(null)
    const [driverLicenceFront, setDriverLicenceFront] = useState(null)
    const [driverLicenceBack, setDriverLicenceBack] = useState(null)
    const [loadingModal, setLoadingModal] = useState(false)
    const [open, setOpen] = useState(null)
    const [date, setDate] = useState(new Date())
    const [cityBottom, setCityBottom] = useState(false)
    const [city, setCity] = useState('')


    const [postData, setPostData] = useState({
        document1: null,
        document2: null,
        userId: userData?.userData?._id
    })

    const [postData2, setPostData2] = useState({
        frontImage: null,
        backImage: null,
        driverId: userData?.userData?._id,
        dlNumber: null,
        DOB: null,
        cityId: null
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }
    const handleChange2 = (name, value) => {
        setPostData2({
            ...postData2,
            [name]: value
        })
    }

    const ImagePick = (cond) => {
        setImageBottomSheet(!imageBottomSheet)
        if (side == "front") {
            if (cond == "gallery") {
                ImagePicker.openPicker({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    // setImg(image.path)
                    setFirstImg(image.path)
                    handleChange("document1", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    // setImg(image.path)
                    setFirstImg(image.path)
                    handleChange("document1", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            }
        } else {
            if (cond == "gallery") {
                ImagePicker.openPicker({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    // setImg(image.path)
                    setSecondImg(image.path)
                    handleChange("document2", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    // setImg(image.path)
                    setSecondImg(image.path)
                    handleChange("document2", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            }
        }

    }

    const ImagePick2 = (cond) => {
        setImageBottomSheet(!imageBottomSheet)
        if (side == "front") {
            if (cond == "gallery") {
                ImagePicker.openPicker({
                    width: width,
                    height: height * .3,
                    cropping: true
                }).then(image => {
                    setDriverLicenceFront(image.path)
                    handleChange2("frontImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    setDriverLicenceFront(image.path)
                    handleChange2("frontImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            }
        } else {
            if (cond == "gallery") {
                ImagePicker.openPicker({
                    width: width,
                    height: height * .3,
                    cropping: true
                }).then(image => {
                    setDriverLicenceBack(image.path)
                    handleChange2("backImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .3,
                    cropping: true

                }).then(image => {
                    setDriverLicenceBack(image.path)
                    handleChange2("backImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            }
        }
    }

    console.log("getDLDetails", getDLDetails?._id)

    return (
        <View style={styles.UploadDriverDocumentCont}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={styles.idTextMain} >
                <Text style={[styles.idDlText, { marginLeft: width * .015 }]}>ID</Text>
                <Text style={styles.idDlText}>DL</Text>
            </View>
            <View style={styles.indicatorMain}>
                <View style={[styles.horizontalLine, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, conditionState == 'DL' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, conditionState == 'DL' && { backgroundColor: COLORS.primary }]} />
                <View style={styles.horizontalLine} />
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: height * .02, marginBottom: height * .1 }}>
                    <View style={{ width: width * .93, }}>
                        {
                            conditionState == "ID" ?
                                <>
                                    <View style={styles.pendingCont}>
                                        <Text style={styles.ownerText}>Owner Aadhar card</Text>
                                        {userData?.documentStatus.aadhar == "PENDING" ?
                                            <View style={styles.pendingMain}>
                                                <Text style={styles.pendingText}>● PENDING</Text>
                                            </View>
                                            :
                                            userData?.documentStatus.aadhar == "APPROVED" ?
                                                <View style={[styles.pendingMain, { borderColor: "#16C107" }]}>
                                                    <Text style={[styles.pendingText, { color: "#16C107" }]}>● APPROVED</Text>
                                                </View>
                                                :
                                                userData?.documentStatus.aadhar == "REJECTED" ?
                                                    <View style={[styles.pendingMain, { borderColor: "#EF1515" }]}>
                                                        <Text style={[styles.pendingText, { color: "#EF1515" }]}>● REJECTED</Text>
                                                    </View>
                                                    :
                                                    null
                                        }
                                    </View>
                                    <View style={styles.adharCardTouchMain}>
                                        <TouchableOpacity style={styles.adharCardPicTouch}
                                            activeOpacity={0.3}
                                            onPress={() => { setImageBottomSheet(!imageBottomSheet), setSide("front") }}
                                            disabled={userData?.documentStatus.aadhar == "PENDING" || userData?.documentStatus.aadhar == "APPROVED"}
                                        >
                                            {firstImg ?
                                                <Image source={{ uri: firstImg }} resizeMode='contain' style={styles.adharImg} />
                                                :
                                                <View style={{ alignItems: 'center' }}>
                                                    <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                    <Text style={styles.sideText}>Front side</Text>
                                                </View>
                                            }
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.adharCardPicTouch}
                                            activeOpacity={0.3}
                                            onPress={() => { setImageBottomSheet(!imageBottomSheet), setSide("back") }}
                                            disabled={userData?.documentStatus.aadhar == "PENDING" || userData?.documentStatus.aadhar == "APPROVED"}
                                        >
                                            {secondImg ?
                                                <Image source={{ uri: secondImg }} resizeMode='contain' style={styles.adharImg} />
                                                :
                                                <View style={{ alignItems: 'center' }}>
                                                    <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                    <Text style={styles.sideText}>Back side</Text>
                                                </View>
                                            }
                                        </TouchableOpacity>

                                    </View>
                                    {userData?.documentStatus.aadhar == "REJECTED" &&
                                        <View style={{ marginTop: SIZES.height * .025 }}>
                                            <Text style={styles.rejectTitle}>Your document was rejected with the following reasons:</Text>
                                            <Text style={styles.rejectSubTitle}>1. Document image is not proper</Text>
                                            <Text style={styles.rejectSubTitle}>2. Incorrect documents</Text>
                                            <Text style={styles.rejectSubTitle}>3. False/Fake documents</Text>
                                        </View>
                                    }
                                </>
                                :
                                conditionState == "DL" ?
                                    <>
                                        <View style={styles.pendingCont}>
                                            <Text style={styles.ownerText}>Upload Driving licence</Text>
                                            {userData?.documentStatus.DL == "PENDING" ?
                                                <View style={styles.pendingMain}>
                                                    <Text style={styles.pendingText}>● PENDING</Text>
                                                </View>
                                                :
                                                userData?.documentStatus.DL == "APPROVED" ?
                                                    <View style={[styles.pendingMain, { borderColor: "#16C107" }]}>
                                                        <Text style={[styles.pendingText, { color: "#16C107" }]}>● APPROVED</Text>
                                                    </View>
                                                    :
                                                    userData?.documentStatus.DL == "REJECTED" ?
                                                        <View style={[styles.pendingMain, { borderColor: "#EF1515" }]}>
                                                            <Text style={[styles.pendingText, { color: "#EF1515" }]}>● REJECTED</Text>
                                                        </View>
                                                        :
                                                        null
                                            }
                                        </View>
                                        <View style={styles.adharCardTouchMain}>
                                            <TouchableOpacity style={styles.adharCardPicTouch}
                                                activeOpacity={0.3}
                                                onPress={() => { setImageBottomSheet(!imageBottomSheet), setSide("front") }}
                                                disabled={userData?.documentStatus.DL == "PENDING" || userData?.documentStatus.DL == "APPROVED"}
                                            >
                                                {driverLicenceFront ?
                                                    <Image source={{ uri: driverLicenceFront }} resizeMode='contain' style={styles.adharImg} />
                                                    :
                                                    <View style={{ alignItems: 'center' }}>
                                                        <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                        <Text style={styles.sideText}>Front side</Text>
                                                    </View>
                                                }
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.adharCardPicTouch}
                                                activeOpacity={0.3}
                                                onPress={() => { setImageBottomSheet(!imageBottomSheet), setSide("back") }}
                                                disabled={userData?.documentStatus.DL == "PENDING" || userData?.documentStatus.DL == "APPROVED"}
                                            >
                                                {driverLicenceBack ?
                                                    <Image source={{ uri: driverLicenceBack }} resizeMode='contain' style={styles.adharImg} />
                                                    :
                                                    <View style={{ alignItems: 'center' }}>
                                                        <Image source={icons.camera} resizeMode='contain' style={styles.cameraIcon} />
                                                        <Text style={styles.sideText}>Back side</Text>
                                                    </View>
                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.inputLable}>Enter DL Number</Text>
                                        <Input1
                                            placeholder={"DL Number"}
                                            value={postData2.dlNumber}
                                            onChangeText={(text) => { handleChange2("dlNumber", text) }}
                                        />
                                        <Text style={[styles.inputLable, { marginTop: height * .005 }]}>Select DOB</Text>
                                        <TouchableOpacity
                                            onPress={() => setOpen(true)}
                                        >
                                            <Input1
                                                placeholder={"Select DOB"}
                                                editable={false}
                                                value={postData2.DOB}
                                            />
                                        </TouchableOpacity>
                                        <DatePicker
                                            modal
                                            open={open}
                                            date={postData2.DOB ? new Date(postData2.DOB) : date}
                                            mode="date"
                                            // textColor={COLORS.gray80}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                handleChange2('DOB', formattedDateServer(date))
                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }}
                                        />
                                        <Text style={[styles.inputLable, { marginTop: height * .005 }]}>City</Text>
                                        <TouchableOpacity
                                            onPress={() => setCityBottom(true)}
                                        >
                                            <Input1
                                                placeholder={"Select City"}
                                                editable={false}
                                                value={city}
                                            />
                                        </TouchableOpacity>
                                        <BottomSheet
                                            visible={cityBottom}
                                            onBackButtonPress={() => setCityBottom(!cityBottom)}
                                            onBackdropPress={() => setCityBottom(!cityBottom)}
                                        >
                                            <View style={styles.bottomSheet}>
                                                <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                                    <Text style={styles.bottomHeading}>City</Text>
                                                </View>
                                                <View style={styles.type_box}>
                                                    {cityData && cityData.map((item, index) => (
                                                        <TouchableOpacity key={index}
                                                            onPress={() => { handleChange2("cityId", item._id), setCity(item.name), setCityBottom(!cityBottom) }}
                                                        >
                                                            <Text style={styles.type}>{item.name}</Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </View>
                                            </View>
                                        </BottomSheet>

                                        {userData?.documentStatus.DL == "REJECTED" &&
                                            <View style={{ marginTop: SIZES.height * .025 }}>
                                                <Text style={styles.rejectTitle}>Your document was rejected with the following reasons:</Text>
                                                <Text style={styles.rejectSubTitle}>1. Document image is not proper</Text>
                                                <Text style={styles.rejectSubTitle}>2. Incorrect documents</Text>
                                                <Text style={styles.rejectSubTitle}>3. False/Fake documents</Text>
                                            </View>
                                        }
                                    </>
                                    :
                                    <></>
                        }
                        <Text style={styles.tipText}>Tip</Text>
                        <Text style={styles.makeText}>Make sure things like Names, Numbers, Address are cleary visible while taking photo</Text>
                    </View>
                </View>
            </ScrollView>
            {conditionState == "ID" ?
                userData?.documentStatus.aadhar == "PENDING" || userData?.documentStatus.aadhar == "APPROVED" ?
                    <TouchableOpacity style={[styles.btnTouch, { backgroundColor: '#21AB18', }]}
                        activeOpacity={0.4}
                        // disabled={firstImg && secondImg ? false : true}
                        onPress={() => { setConditionState("DL") }}
                    >
                        <Text style={styles.btnText}>NEXT</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={[styles.btnTouch, firstImg && secondImg && { backgroundColor: '#21AB18', }]}
                        activeOpacity={0.4}
                        disabled={firstImg && secondImg ? false : true}
                        onPress={() => {
                            if (userData?.documentStatus.aadhar == false) {
                                AdharDetailsApi(postData, (data) => { setLoadingModal(data) }, (data) => setConditionState(data))
                            } else {
                                AdharDetailsApi({ ...postData, aadharId: getAadharDetails?._id }, (data) => { setLoadingModal(data) }, (data) => setConditionState(data), navigation)
                            }
                        }}
                    >
                        <Text style={styles.btnText}>PROCEED</Text>
                    </TouchableOpacity>
                :
                conditionState == "DL" ?
                    <TouchableOpacity style={[styles.btnTouch, postData2.frontImage && postData2.backImage && postData2.dlNumber && postData2.DOB && postData2.cityId && { backgroundColor: '#21AB18', }]}
                        activeOpacity={0.4}
                        disabled={postData2.frontImage && postData2.backImage && postData2.dlNumber && postData2.DOB && postData2.cityId ? false : true}
                        onPress={() => { 
                            if (userData?.documentStatus.DL==false) {
                                DLDetailsApi(postData2, navigation, (data) => { setLoadingModal(data) }) 
                                
                            }else{
                                DLDetailsApi({...postData2,drivingLicenceId:getDLDetails?._id}, navigation, (data) => { setLoadingModal(data) }) 
                            }
                        }}
                    >
                        <Text style={styles.btnText}>PROCEED</Text>
                    </TouchableOpacity>
                    :
                    <></>
            }
            <BottomSheet
                visible={imageBottomSheet}
                onBackButtonPress={() => setImageBottomSheet(!imageBottomSheet)}
                onBackdropPress={() => setImageBottomSheet(!imageBottomSheet)}
            >
                <View style={styles.imageBottomMain}>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => { conditionState == 'ID' ? ImagePick('gallery') : ImagePick2('gallery') }}
                    >
                        <Image source={icons.gallery} resizeMode='contain' style={styles.galleryIcon} />
                        <Text style={styles.galleryText}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => { conditionState == 'ID' ? ImagePick('camera') : ImagePick2("camera") }}
                    >
                        <Image source={icons.camera1} resizeMode='contain' style={styles.galleryIcon} />
                        <Text style={styles.galleryText}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            <Loader
                loading={loadingModal}
                color={COLORS.primary}
                size='large'
                title="Loading..."
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    cityData: state.document.cityData,
    getAadharDetails: state.document.getAadharDetails,
    getDLDetails: state.document.getDLDetails,
})

const mapDispatchToProps = {
    AdharDetailsApi,
    DLDetailsApi
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDriverDocument)