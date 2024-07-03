import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StatusBar, ActivityIndicator } from 'react-native'
import { COLORS, SIZES, icons, images } from '../../constants'
import styles from './styles'
import ImagePicker from 'react-native-image-crop-picker';
import { BottomSheet } from 'react-native-btr';
import Icons from '../../component/Icons';
import Input1 from '../../component/Inputs/Input1';
import { connect, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { CheckVehicleApi, VehicleDetailsApi } from '../../redux/actions/documentAction';
import Loader from "react-native-modal-loader";
import { http2 } from '../../services/api';
import { VEHICLE_EXIST } from '../../redux/types';

const { width, height } = Dimensions.get('window')

const UploadDetails = ({ navigation, route, CheckVehicleApi, cityData, vehicleTypeData, userData, VehicleDetailsApi, vehicleDetailsData, vehicleExist }) => {

    const dispatch = useDispatch()

    const [regCertificate, setRegCertificate] = useState(null)
    const [poluCertificate, setPoluCertificate] = useState(null)
    const [imageBottomSheet, setImageBottomSheet] = useState(false)
    const [conditionState, setConditionState] = useState(route?.params?.page)
    const [conditionState2, setConditionState2] = useState(route?.params?.page == "PUC" ? route?.params?.page : null)
    const [firstImg, setFirstImg] = useState(null)
    const [loadingModal, setLoadingModal] = useState(false)
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [secondImg, setSecondImg] = useState(null)
    const [side, setSide] = useState(null)
    const [verifyHide, setVerifyHide] = useState(true)

    const [type, setType] = useState(null)
    const [city, setCity] = useState(null)

    const [typeBottom, setTypeBottom] = useState(false)
    const [cityBottom, setCityBottom] = useState(false)

    console.log("vehicleDetailsData", vehicleDetailsData?.registrationNumber)

    useEffect(() => {
        dispatch({
            type: VEHICLE_EXIST,
            payload: null,
        })
    }, [])

    const [postData, setPostData] = useState({
        frontImage: null,//
        backImage: null,//
        vehicleImage: [],//
        latitude: null,
        longitude: null,
        vehicleNumber: '',//
        // bodyType: null,
        vehicleTypeId: null,//
        userId: userData?.userData?._id,//
        cityId: null,//
        puc: null,//
    })



    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const ImagePick = (cond) => {
        setImageBottomSheet(!imageBottomSheet)
        if (side == "front") {
            if (cond == "gallery") {
                ImagePicker.openPicker({
                    width: width,
                    height: height * .5,
                    cropping: true
                }).then(image => {
                    setFirstImg(image.path)
                    handleChange("frontImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .5,
                    cropping: true

                }).then(image => {
                    setFirstImg(image.path)
                    handleChange("frontImage", {
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
                    height: height * .5,
                    cropping: true
                }).then(image => {
                    setSecondImg(image.path)
                    handleChange("backImage", {
                        uri: image.path,
                        name: image.filename || Date.now() + "-" + image.path.slice(-10),
                        type: image.mime
                    })
                });
            } else {
                ImagePicker.openCamera({
                    width: width,
                    height: height * .5,
                    cropping: true

                }).then(image => {
                    setSecondImg(image.path)
                    handleChange("backImage", {
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
        if (cond == "gallery") {
            ImagePicker.openPicker({
                width: width,
                height: height * .5,
                cropping: true
            }).then(image => {
                setPoluCertificate(image.path)
                handleChange("puc", {
                    uri: image.path,
                    name: image.filename || Date.now() + "-" + image.path.slice(-10),
                    type: image.mime
                })
            });
        } else {
            ImagePicker.openCamera({
                width: width,
                height: height * .5,
                cropping: true

            }).then(image => {
                setPoluCertificate(image.path)
                handleChange("puc", {
                    uri: image.path,
                    name: image.filename || Date.now() + "-" + image.path.slice(-10),
                    type: image.mime
                })
            });
        }
    }

    const ImagePick3 = (cond) => {
        setImageBottomSheet(!imageBottomSheet)
        let arr = [...postData.vehicleImage]
        if (cond == "gallery") {
            ImagePicker.openPicker({
                width: width,
                height: height * .5,
                cropping: true
            }).then(image => {
                arr.push({
                    uri: image.path,
                    name: image.filename || Date.now() + "-" + image.path.slice(-10),
                    type: image.mime
                })
                handleChange("vehicleImage", arr)
            });
        } else {
            ImagePicker.openCamera({
                width: width,
                height: height * .5,
                cropping: true

            }).then(image => {
                arr.push({
                    uri: image.path,
                    name: image.filename || Date.now() + "-" + image.path.slice(-10),
                    type: image.mime
                })
                handleChange("vehicleImage", arr)
            });
        }
    }

    const handleRemoveVehicleImg = (index) => {
        let arr = [...postData.vehicleImage]
        arr.splice(index, 1)
        handleChange("vehicleImage", arr)
    }

    return (
        <View style={styles.UploadDriverDocumentCont}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={styles.idTextMain} >
                <Text style={[styles.idDlText, { marginLeft: width * .0 }]}>RC</Text>
                <Text style={[styles.idDlText]}>PUC</Text>
                <Text style={styles.idDlText}>Vehicle image</Text>
            </View>
            <View style={styles.indicatorMain}>
                <View style={[styles.horizontalLine, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, conditionState2 == 'PUC' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, conditionState2 == 'PUC' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.horizontalLine, conditionState == 'VI' && { backgroundColor: COLORS.primary }]} />
                <View style={[styles.dot, conditionState == 'VI' && { backgroundColor: COLORS.primary }]} />
                <View style={styles.horizontalLine} />
            </View>
            <ScrollView keyboardShouldPersistTaps='handled' >
                <View style={{ alignItems: 'center', marginTop: height * .03, marginBottom: height * .1 }}>
                    <View style={{ width: width * .93, }}>
                        {conditionState == "RC" ?
                            <>
                                {/* vehicle type */}
                                <View style={styles.pendingCont}>
                                    <Text style={styles.ownerText}>Upload RC</Text>
                                    {userData?.documentStatus.Rc == "PENDING" ?
                                        <View style={styles.pendingMain}>
                                            <Text style={styles.pendingText}>● PENDING</Text>
                                        </View>
                                        :
                                        userData?.documentStatus.Rc == "APPROVED" ?
                                            <View style={[styles.pendingMain, { borderColor: "#16C107" }]}>
                                                <Text style={[styles.pendingText, { color: "#16C107" }]}>● APPROVED</Text>
                                            </View>
                                            :
                                            userData?.documentStatus.Rc == "REJECTED" ?
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
                                        disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                    >
                                        {firstImg ?
                                            <Image source={{ uri: firstImg }} resizeMode='contain' style={styles.adharImg} />
                                            :
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={icons.upload} resizeMode='contain' style={styles.cameraIcon2} />
                                                <Text style={styles.sideText}>Front side</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.adharCardPicTouch}
                                        activeOpacity={0.3}
                                        onPress={() => { setImageBottomSheet(!imageBottomSheet), setSide("back") }}
                                        disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                    >
                                        {secondImg ?
                                            <Image source={{ uri: secondImg }} resizeMode='contain' style={styles.adharImg} />
                                            :
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={icons.upload} resizeMode='contain' style={styles.cameraIcon2} />
                                                <Text style={styles.sideText}>Back side</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: height * .02 }}>
                                    <Text style={styles.label}>Vehicle Type</Text>
                                    <TouchableOpacity style={styles.inputBox}
                                        onPress={() => setTypeBottom(!typeBottom)}
                                        disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                    >
                                        <TextInput
                                            style={styles.input1}
                                            placeholderTextColor={COLORS.gray40}
                                            editable={false}
                                            value={type}
                                            placeholder='Select vehicle type'

                                        />
                                        <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
                                    </TouchableOpacity>

                                    <BottomSheet
                                        visible={typeBottom}
                                        onBackButtonPress={() => setTypeBottom(!typeBottom)}
                                        onBackdropPress={() => setTypeBottom(!typeBottom)}
                                    >
                                        <View style={styles.bottomSheet}>
                                            <View style={{ ...styles.titleBox, marginBottom: 0, }}>
                                                <Text style={styles.bottomHeading}>Vehicle Type</Text>
                                            </View>
                                            <View style={styles.type_box}>
                                                {vehicleTypeData && vehicleTypeData.map((item, index) => (
                                                    <TouchableOpacity key={index}
                                                        onPress={() => { handleChange("vehicleTypeId", item._id), setType(item?.name), setTypeBottom(!typeBottom) }}
                                                    >
                                                        <Text style={styles.type}>{item?.name}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                    </BottomSheet>
                                </View>

                                <View>
                                    <Text style={styles.label}>Vehicle number</Text>
                                    <Input1
                                        placeholderTextColor={COLORS.gray20}
                                        placeholder={"Enter vehicle number"}
                                        value={postData.vehicleNumber}
                                        onChangeText={(text) => {
                                            handleChange("vehicleNumber", text)
                                            if (text.length < 9) {
                                                dispatch({
                                                    type: VEHICLE_EXIST,
                                                    payload: null,
                                                })
                                            }
                                            if (vehicleDetailsData && vehicleDetailsData?.registrationNumber == text) {
                                                dispatch({
                                                    type: VEHICLE_EXIST,
                                                    payload: false,
                                                })
                                                setVerifyHide(false)
                                            } else {
                                                dispatch({
                                                    type: VEHICLE_EXIST,
                                                    payload: null,
                                                })
                                                setVerifyHide(true)
                                            }
                                        }}
                                        autoCapitalize="characters"
                                        editable={userData?.documentStatus.Rc == false || userData?.documentStatus.Rc == "REJECTED"}
                                    />

                                    {vehicleExist == true &&
                                        <Text style={styles.found}>Vehicle number is already used</Text>
                                    }
                                    {vehicleExist == false &&
                                        <Text style={styles.not_exist}>Verified vehicle number</Text>
                                    }
                                    {verifyHide &&
                                        <TouchableOpacity style={[styles.verifyTouch, postData?.vehicleNumber?.length < 9 && { backgroundColor: COLORS.gray30 }, vehicleExist == true && { backgroundColor: 'red' }, vehicleExist == false && vehicleExist != null && { backgroundColor: 'green' }]}
                                            onPress={() => {
                                                if (postData?.vehicleNumber && postData?.vehicleNumber?.length >= 9) {
                                                    CheckVehicleApi(postData.vehicleNumber, (data) => setLoadingIndicator(data))
                                                }
                                            }}
                                            disabled={loadingIndicator || postData?.vehicleNumber?.length < 9}
                                        >
                                            {loadingIndicator ?
                                                <ActivityIndicator size={22} color={COLORS.white} />
                                                :
                                                <Text style={styles.verifyText}>Verify</Text>
                                            }
                                        </TouchableOpacity>
                                    }
                                </View>
                                <View style={{ marginTop: height * .007 }}>
                                    <Text style={styles.label}>City</Text>
                                    <TouchableOpacity style={styles.inputBox}
                                        onPress={() => setCityBottom(!cityBottom)}
                                        disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                    >
                                        <TextInput
                                            style={styles.input1}
                                            placeholderTextColor={COLORS.gray40}
                                            editable={false}
                                            value={city}
                                            placeholder='Select city'
                                        />
                                        <Icons name="down1" size={20} style={styles.down} color={COLORS.black} />
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
                                                        onPress={() => { handleChange("cityId", item._id), setCity(item.name), setCityBottom(!cityBottom) }}
                                                    >
                                                        <Text style={styles.type}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                    </BottomSheet>
                                </View>
                                {userData?.documentStatus.Rc == "REJECTED" &&
                                    <View style={{ marginTop: SIZES.height * .025 }}>
                                        <Text style={styles.rejectTitle}>Your document was rejected with the following reasons:</Text>
                                        <Text style={styles.rejectSubTitle}>1. Document image is not proper</Text>
                                        <Text style={styles.rejectSubTitle}>2. Incorrect documents</Text>
                                        <Text style={styles.rejectSubTitle}>3. False/Fake documents</Text>
                                    </View>
                                }
                            </>
                            :
                            conditionState == "PUC" ?
                                <>
                                    <View style={styles.pendingCont}>

                                        <Text style={styles.ownerText}>Upload Pollution certificate.</Text>
                                        {userData?.documentStatus.puc == "PENDING" ?
                                            <View style={styles.pendingMain}>
                                                <Text style={styles.pendingText}>● PENDING</Text>
                                            </View>
                                            :
                                            userData?.documentStatus.puc == "APPROVED" ?
                                                <View style={[styles.pendingMain, { borderColor: "#16C107" }]}>
                                                    <Text style={[styles.pendingText, { color: "#16C107" }]}>● APPROVED</Text>
                                                </View>
                                                :
                                                userData?.documentStatus.puc == "REJECTED" ?
                                                    <View style={[styles.pendingMain, { borderColor: "#EF1515" }]}>
                                                        <Text style={[styles.pendingText, { color: "#EF1515" }]}>● REJECTED</Text>
                                                    </View>
                                                    :
                                                    null
                                        }
                                    </View>
                                    <View style={{ alignItems: 'center', }}>
                                        <View style={styles.adharCardTouchMain}>
                                            <TouchableOpacity style={styles.dlTouch}
                                                activeOpacity={0.3}
                                                onPress={() => { setImageBottomSheet(!imageBottomSheet) }}
                                                disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                            >
                                                <Image source={poluCertificate ? { uri: poluCertificate } : images.pollution} resizeMode='stretch' style={styles.dlImg} />
                                                <TouchableOpacity style={styles.close_btn}
                                                    onPress={() => {setPoluCertificate(null), handleChange("puc", null)}}
                                                >
                                                    <Icons name={'close'} size={15} color={COLORS.white} />
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    {userData?.documentStatus.Rc == "REJECTED" &&
                                        <View style={{ marginTop: SIZES.height * .025 }}>
                                            <Text style={styles.rejectTitle}>Your document was rejected with the following reasons:</Text>
                                            <Text style={styles.rejectSubTitle}>1. Document image is not proper</Text>
                                            <Text style={styles.rejectSubTitle}>2. Incorrect documents</Text>
                                            <Text style={styles.rejectSubTitle}>3. False/Fake documents</Text>
                                        </View>
                                    }
                                </>
                                :
                                conditionState == "VI" ?
                                    <>
                                        <View style={[styles.pendingCont, { marginBottom: height * .02 }]}>
                                            <Text></Text>
                                            {userData?.documentStatus.Rc == "PENDING" ?
                                                <View style={styles.pendingMain}>
                                                    <Text style={styles.pendingText}>● PENDING</Text>
                                                </View>
                                                :
                                                userData?.documentStatus.Rc == "APPROVED" ?
                                                    <View style={[styles.pendingMain, { borderColor: "#16C107" }]}>
                                                        <Text style={[styles.pendingText, { color: "#16C107" }]}>● APPROVED</Text>
                                                    </View>
                                                    :
                                                    userData?.documentStatus.Rc == "REJECTED" ?
                                                        <View style={[styles.pendingMain, { borderColor: "#EF1515" }]}>
                                                            <Text style={[styles.pendingText, { color: "#EF1515" }]}>● REJECTED</Text>
                                                        </View>
                                                        :
                                                        null
                                            }
                                        </View>
                                        <TouchableOpacity style={styles.vehicleImgTouch}
                                            onPress={() => setImageBottomSheet(!imageBottomSheet)}
                                            disabled={userData?.documentStatus.Rc != false && userData?.documentStatus.Rc != "REJECTED"}
                                        >
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={icons.upload} resizeMode='contain' style={styles.cameraIcon2} />
                                                <Text style={styles.sideText}>Select Vehicle Image</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: "wrap" }}>
                                            {postData?.vehicleImage?.map((item, index) => {
                                                return (
                                                    <View style={{ marginTop: height * .05, marginRight: width * .04 }}>
                                                        <Image source={{ uri: item.uri }} resizeMode="cover" style={styles.vehicleImg} />
                                                        {
                                                            userData?.documentStatus.Rc == false &&
                                                            <TouchableOpacity style={styles.vehicleCrossTouch}
                                                                onPress={() => handleRemoveVehicleImg(index)}
                                                            >
                                                                <Icons name={'close'} size={15} color={COLORS.white} />
                                                            </TouchableOpacity>
                                                        }
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    </>
                                    :
                                    <></>

                        }
                        <Text style={styles.tipText}>Tip</Text>
                        <Text style={styles.makeText}>Make sure things like Names, Numbers, Address are cleary visible while taking photo</Text>

                    </View>
                </View>
            </ScrollView>
            {conditionState == "RC" ?
                <View style={{
                    flexDirection: 'row', position: 'absolute',
                    bottom: height * .015,
                }}>
                    {/* {userData?.documentStatus.Rc == "REJECTED" ?
                        <TouchableOpacity style={[styles.btnTouch,

                        postData.frontImage && postData.backImage && postData.vehicleTypeId && postData.cityId && postData.vehicleNumber && { backgroundColor: "#21AB18", }

                        ]}
                            activeOpacity={0.4}
                            disabled={

                                postData.frontImage && postData.backImage && postData.vehicleTypeId && postData.cityId && postData.vehicleNumber ? false : true


                            }
                            onPress={() => { VehicleDetailsApi(postData, navigation, (data) => setLoadingModal(data)) }}
                        >
                            <Text style={styles.btnText}>PROCEED</Text>
                        </TouchableOpacity>
                        : */}

                    <TouchableOpacity style={[styles.btnTouch,
                    userData?.documentStatus.Rc == false || userData?.documentStatus.Rc == "REJECTED" ?
                        postData.frontImage && postData.backImage && postData.vehicleTypeId && postData.cityId && postData.vehicleNumber?.length >= 9 && vehicleExist == false && { backgroundColor: "#21AB18", }
                        :
                        { backgroundColor: "#21AB18", }
                    ]}
                        activeOpacity={0.4}
                        disabled={
                            userData?.documentStatus.Rc == false || userData?.documentStatus.Rc == "REJECTED" ?
                                postData.frontImage && postData.backImage && postData.vehicleTypeId && postData.cityId && postData.vehicleNumber?.length >= 9 && vehicleExist == false ? false : true
                                :
                                false
                        }
                        onPress={() => {
                            userData?.documentStatus.Rc == false ?
                                VehicleDetailsApi(postData, '', (data, success) => {
                                    setLoadingModal(data)
                                    if (success == "success") {
                                        setConditionState2("PUC"), setConditionState("PUC")
                                    }
                                })
                                :
                                VehicleDetailsApi({ ...postData, vehicleId: vehicleDetailsData?._id }, '', (data, success) => {
                                    setLoadingModal(data)
                                    if (success == "success") {
                                        setConditionState2("PUC"), setConditionState("PUC")
                                    }
                                })
                        }}
                    // onPress={() => { setConditionState2("PUC"), setConditionState("PUC") }}
                    >
                        <Text style={styles.btnText}>NEXT</Text>
                    </TouchableOpacity>
                    {/* } */}
                </View>
                :
                conditionState == "PUC" ?
                    <>
                        <View style={{
                            flexDirection: 'row', position: 'absolute',
                            bottom: height * .015,
                        }}>
                            <>
                                <TouchableOpacity style={[styles.btnTouch, { width: SIZES.width * .42, backgroundColor: '#4CD5F1' }]}
                                    onPress={() => { setConditionState2(''), setConditionState("RC") }}
                                >
                                    <Text style={styles.btnText}>Prev.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnTouch, { width: SIZES.width * .42 },

                                { backgroundColor: "#21AB18", }
                                ]}
                                    activeOpacity={0.4}
                                    // disabled={
                                    //     userData?.documentStatus.Rc == false || userData?.documentStatus.Rc == "REJECTED" ?
                                    //         poluCertificate ? false : true
                                    //         :
                                    //         false
                                    // }
                                    // onPress={() => setConditionState("VI")}
                                    onPress={() => {
                                        if(postData?.puc){
                                            userData?.documentStatus.Rc == false ?
                                            VehicleDetailsApi(postData, '', (data, success) => {
                                                setLoadingModal(data)
                                                if (success == "success") {
                                                    setConditionState("VI")
                                                }
                                            })
                                            :
                                            VehicleDetailsApi({ ...postData, vehicleId: vehicleDetailsData?._id }, '', (data, success) => {
                                                setLoadingModal(data)
                                                if (success == "success") {
                                                    setConditionState("VI")
                                                }
                                            })
                                        }else{
                                            setConditionState("VI")
                                        }
                                        
                                    }}
                                >
                                    <Text style={styles.btnText}>NEXT</Text>
                                </TouchableOpacity>
                            </>

                        </View>
                    </>
                   
                    :
                    conditionState == "VI" ?
                        <View style={{
                            flexDirection: 'row', position: 'absolute',
                            bottom: height * .015,
                        }}>
                            <TouchableOpacity style={[styles.btnTouch, { width: SIZES.width * .42, backgroundColor: '#4CD5F1' }]}
                                onPress={() => { setConditionState2("PUC"), setConditionState("PUC") }}
                            >
                                <Text style={styles.btnText}>Prev.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnTouch, { width: SIZES.width * .42 }, postData?.vehicleImage[0] && { backgroundColor: "#21AB18", }]}
                                activeOpacity={0.4}
                                disabled={postData?.vehicleImage[0] ? false : true}
                                onPress={() => {
                                    userData?.documentStatus.Rc == false ?
                                        VehicleDetailsApi(postData, navigation, (data) => setLoadingModal(data))
                                        :
                                        VehicleDetailsApi({ ...postData, vehicleId: vehicleDetailsData?._id }, navigation, (data) => setLoadingModal(data))
                                }}
                            >
                                <Text style={styles.btnText}>PROCEED</Text>
                            </TouchableOpacity>
                        </View>
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
                        onPress={() => {
                            conditionState == 'RC' ?
                                ImagePick('gallery')
                                :
                                conditionState == 'PUC' ?
                                    ImagePick2('gallery')
                                    :
                                    ImagePick3('gallery')
                        }}
                    >
                        <Image source={icons.gallery} resizeMode='contain' style={styles.galleryIcon} />
                        <Text style={styles.galleryText}>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => {
                            conditionState == 'RC' ?
                                ImagePick('camera')
                                :
                                conditionState == 'PUC' ?
                                    ImagePick2("camera")
                                    :
                                    ImagePick3("camera")
                        }}
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
        </View >

    )
}

const mapStateToProps = (state) => ({
    cityData: state.document.cityData,
    vehicleTypeData: state.document.vehicleTypeData,
    vehicleDetailsData: state.document.vehicleDetailsData,
    vehicleExist: state.document.vehicleExist,
    userData: state.auth.userData,

})

const mapDispatchToProps = {
    VehicleDetailsApi,
    CheckVehicleApi
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadDetails)