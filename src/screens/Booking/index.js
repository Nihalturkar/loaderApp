import React, { useEffect, useRef, useState, useMemo } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Linking, StyleSheet, Alert } from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
import MapView, { PROVIDER_GOOGLE, Marker, Geojson } from 'react-native-maps'
import styles from "./styles";
// import Geolocation from "@react-native-community/geolocation";
import Icons from "../../component/Icons";
// import { BottomSheet } from 'react-native-btr'
import BottomSheet from '@gorhom/bottom-sheet';
import Modal from 'react-native-modal'
import RoundedButton from '../../component/Buttons/RoundedButton'
import { connect } from "react-redux";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { CancelOrderApi, UpdateOrderStatusApi } from "../../redux/actions/orderAction";
import { RNToasty } from "react-native-toasty";
import MapViewDirections from 'react-native-maps-directions';




const Booking = ({ navigation, liveOrderData, UpdateOrderStatusApi, currentLocation, CancelOrderApi }) => {
  const [bottom, setBottom] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [condition, setCondition] = useState("cancel")
  const [modal, setModal] = useState()
  const [otpModal, setOtpModal] = useState(false)
  const [otp, setOtp] = useState(null)
  const [status, setStatus] = useState(null)
  const [dropId, setdropId] = useState(null)
  const [deliverBtnCond, setDeliverBtnCond] = useState(false)
  const [position, setPosition] = useState({
    latitude: currentLocation.lat,
    longitude: currentLocation.lng,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  
  const [cordinates, setCordinates] = useState({
    driverLocation: {
      latitude: currentLocation.lat,
      longitude: currentLocation.lng
    },
    pickupLocation: {
      latitude: liveOrderData?.pickUp?.latitude,
      longitude: liveOrderData?.pickUp?.longitude
    },
  })

  const { driverLocation, pickupLocation } = cordinates

  const [cordinates1, setCordinates1] = useState([

  ])
  console.log("cor", cordinates1)


  useEffect(() => {
    findFun()
    if (!liveOrderData) {
      navigation.goBack()
    }
  }, [liveOrderData])

  useEffect(() => {
    let arr = []
    liveOrderData?.drop?.map((item) => {
      const post = {
        latitude: item.latitude,
        longitude: item.longitude
      }
      if (item?.deliverd == false) {
        arr.push(post)
      } else {

      }
    })
    setCordinates1(arr)
  }, [liveOrderData])

  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ['25%', '25%', '47%']);

  const handleVerifyStatus = () => {
    const picked = {
      picked: true,
      otp: Number(otp),
      status: "PICKED_ONTHEWAY"
    }

    const drop = {
      dropId: dropId,
      deliverd: true,
      status: "PICKED_ONTHEWAY",
      otp: Number(otp),
    }

    if (status == "pickup") {
      UpdateOrderStatusApi(picked)
      setOtpModal(!otpModal)
    } else {
      UpdateOrderStatusApi(drop, navigation, deliverBtnCond)
      setOtpModal(!otpModal)
    }

  }

  let dropStatusCount = 0

  const findFun = () => {
    liveOrderData?.drop?.find((item) => {
      dropStatusCount += item.deliverd == false
      console.log("drop", dropStatusCount)
      if (item.deliverd == false && dropStatusCount == 1) {
        setdropId(item._id)
        setDeliverBtnCond(true)
        console.log("id", item._id)
      } else if (dropStatusCount > 1) {
        setDeliverBtnCond(false)
      }

    })
  }

  const mapRef = useRef()


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />

      <View style={styles.header}>
        <View style={styles.header_row}>
          <TouchableOpacity style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icons name={"back"} size={25} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Trip CRN56787</Text>
        </View>
        <View style={styles.header_row}>
          <TouchableOpacity style={styles.live_box}>
            <View style={styles.dot} />
            <Text style={styles.live}>Live</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', marginRight: SIZES.width * .03 }}>
            <Image source={icons.headPhone} resizeMode='contain' style={styles.headPhoneIcon} />
            <Text style={styles.topHelpText}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ ...StyleSheet.absoluteFill }}
        initialRegion={position}

      >
        {
          liveOrderData?.pickUp?.picked &&
          cordinates1.map((item, index) => (
            <>
              <Marker draggable={false}
                coordinate={item}
              >
                <Image source={icons.locationPin} resizeMode="contain" style={styles.pinIcon} />
              </Marker>
              <Marker draggable={false}
                coordinate={driverLocation}
              >
                <Image source={images.delivery2} resizeMode="contain" style={styles.driverIcon} />
              </Marker>

              <MapViewDirections
                origin={driverLocation}
                destination={cordinates1[0]}
                waypoints={cordinates1.length > 0 ? cordinates1 : undefined}
                // waypoints={cordinates1}
                strokeWidth={3}
                strokeColor={'#4C8EF5'}
                apikey="AIzaSyAJN-FdjGGjrWZtsu_pqkY4SNNXRSq2gBI"
                optimizeWaypoints={true}
                onStart={(params) => {
                  console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                }}
                onReady={result => {
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 300,
                      left: 30,
                      top: 100
                    },
                    animated: true
                  })



                }}
              />
            </>
          ))}

        {liveOrderData?.pickUp?.picked == false &&
          <>
            <Marker draggable={false}
              coordinate={driverLocation}
            >
              <Image source={images.delivery2} resizeMode="contain" style={styles.driverIcon} />
            </Marker>
            <Marker draggable={false}
              coordinate={pickupLocation}
            >
              <Image source={icons.locationPinGreen} resizeMode="contain" style={styles.pinIcon} />
            </Marker>
            <MapViewDirections
              origin={driverLocation}
              destination={pickupLocation}
              strokeWidth={3}
              strokeColor={'#4C8EF5'}
              apikey="AIzaSyAJN-FdjGGjrWZtsu_pqkY4SNNXRSq2gBI"
              optimizeWaypoints={true}
              onReady={result => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100
                  },
                  animated: true
                })



              }}
            />
          </>
        }


      </MapView>

      {/* <TouchableOpacity style={styles.locationTextBtn}
        onPress={() => setCondition("booked")}
      >
        <TextInput placeholder="indore nunction ..."
          editable={false}
          style={styles.locationText} />
        <Icons name={"arrowright"} size={20} color={"#646464"} />
        <TextInput placeholder="indore nunction ..."
          editable={false}
          style={styles.locationText} />
      </TouchableOpacity> */}

      <BottomSheet
        ref={bottomSheetRef}
        // index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.bottomSheet}>


          {/* user box */}

          <View style={styles.user_box}>
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
            <TouchableOpacity style={styles.call_btn}
              onPress={() => Linking.openURL(`tel:${liveOrderData?.customerId?.mobile}`)}
            >
              <View style={styles.call_box}>
                <Icons name={"call"} size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.call_text}>Call</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.locationMain}>
            <View style={[styles.loc_row, { justifyContent: 'space-between' }]}>
              <View style={styles.loc_row}>
                <View style={styles.dot} />
                <Text style={[styles.location, liveOrderData?.pickUp?.picked && { textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: COLORS.gray80 }]}>{liveOrderData?.pickUp?.address.length > 32 ? `${liveOrderData?.pickUp?.address.slice(0, 32)}...` : liveOrderData?.pickUp?.address}</Text>
              </View>
              {!liveOrderData?.pickUp?.picked &&
                <TouchableOpacity style={styles.call_btn}
                  onPress={() => Linking.openURL(`tel:${liveOrderData?.pickUp?.mobileNumber}`)}
                >
                  <View style={[styles.call_box, { width: SIZES.width * .08, height: SIZES.height * .04 }]}>
                    <Icons name={"call"} size={18} color={COLORS.primary} />
                  </View>
                </TouchableOpacity>
              }
            </View>
            {liveOrderData?.drop?.map((item) => {

              return (
                <>
                  <View style={[styles.vt_line, { height: SIZES.height * .012 }]} />
                  <View style={[styles.loc_row, { justifyContent: 'space-between' }]}>
                    <View style={styles.loc_row}>
                      <View style={{ ...styles.dot, backgroundColor: 'red' }} />
                      <Text style={[styles.location, item?.deliverd && { textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: COLORS.gray80 }, item.deliverd == false && { width: SIZES.width * .62 }]}>{item.address.length > 32 ? `${item.address.slice(0, 32)}...` : item.address}</Text>
                    </View>
                    {liveOrderData?.pickUp?.picked &&
                      <>
                        {!item?.deliverd &&
                          <View style={styles.loc_row}>
                            {deliverBtnCond == false &&
                              <TouchableOpacity style={[styles.call_btn, { marginRight: SIZES.width * .03 }]}
                                onPress={() => { setOtpModal(!otpModal), setStatus("drop"), setdropId(item._id) }}
                              >
                                <View style={[styles.call_box, { width: SIZES.width * .08, height: SIZES.height * .04, backgroundColor: "#30C528", }]}>
                                  <Icons name={"deliver"} size={22} color={COLORS.white} />
                                </View>
                              </TouchableOpacity>
                            }
                            <TouchableOpacity style={styles.call_btn}
                              onPress={() => Linking.openURL(`tel:${item?.mobileNumber}`)}
                            >
                              <View style={[styles.call_box, { width: SIZES.width * .08, height: SIZES.height * .04 }]}>
                                <Icons name={"call"} size={18} color={COLORS.primary} />
                              </View>
                            </TouchableOpacity>
                          </View>
                        }
                      </>
                    }
                  </View>
                </>
              )
            })}
          </View>

          {/* cash box */}
          <View style={styles.trip_box}>
            <View style={styles.row}>
              <View style={styles.cash_img_box}>
                <Image source={images.cash} style={styles.cash} resizeMode="contain" />
              </View>
              <View>
                <Text style={styles.price}>₹ {liveOrderData?.tripAmount}</Text>
                <Text style={styles.cash_text}>Cash</Text>
              </View>
            </View>
            {/* <TouchableOpacity style={[styles.view_btn, { height: SIZES.height * .04 }]}>
              <Text style={[styles.view_btn_text, { fontSize: 12 }]}>View Details</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        {!liveOrderData?.pickUp?.picked &&
          <View style={{ alignItems: 'center' }}>

            <TouchableOpacity style={styles.cancelOrderTouch}
              onPress={() => {
                Alert.alert(
                  'Cancel Order',
                  'Are you sure to want to cancel this order?',
                  [
                    {
                      text: 'NO',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'CANCEL', onPress: () => { CancelOrderApi(liveOrderData?._id, navigation) } },
                  ]
                );
              }}
            >
              <Icons name={"closecircle"} size={20} color={"#D92020"} />
              <Text style={styles.cancelOrderText}>Cancel Order</Text>
            </TouchableOpacity>
          </View>
        }

        {!liveOrderData?.pickUp?.picked &&
          <View style={{ position: 'absolute', bottom: SIZES.height * .01, right: SIZES.width * .03 }}>
            <TouchableOpacity style={[styles.view_btn, { backgroundColor: "#14B20C" }]}
              onPress={() => {
                Alert.alert(
                  'Reguarding Payments',
                  'Have you taken payment from the customer?',
                  [
                    {
                      text: 'NO',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    { text: 'YES', onPress: () => { setOtpModal(!otpModal), setStatus("pickup") } },
                  ]
                );
              }}
            >
              <Text style={styles.view_btn_text}>Pick Up</Text>
            </TouchableOpacity>
          </View>
        }
        {liveOrderData?.pickUp?.picked && deliverBtnCond &&
          <View style={{ position: 'absolute', bottom: SIZES.height * .01, right: SIZES.width * .03 }}>
            <TouchableOpacity style={[styles.view_btn, { backgroundColor: "#14B20C" }]}
              onPress={() => { setOtpModal(!otpModal), setStatus("drop") }}
            >
              <Text style={styles.view_btn_text}>Delivered</Text>
            </TouchableOpacity>
          </View>
        }
      </BottomSheet>

      <Modal isVisible={isModalVisible && modal == "info"}>
        <View style={styles.modal}>
          <View style={styles.modal_row}>
            <Image source={images.order} style={{ ...styles.delivery, marginRight: SIZES.width * .02, }} resizeMode="contain" />
            <Text style={styles.title}>Tata Ace</Text>
          </View>
          <View style={styles.modal_row1}>
            <Text style={styles.modal_place_text}>Capacity</Text>
            <Text style={styles.modal_text}>1000 kg</Text>
          </View>
          <View style={styles.modal_row1}>
            <Text style={styles.modal_place_text}>size</Text>
            <Text style={styles.modal_text}>7ft×4.5ft×6ft</Text>
          </View>

          <View style={styles.modal_dot_row}>
            <View style={styles.modal_dot} />
            <Text style={styles.modal_text1}>Fare does’t include labour charge for loading & unloading</Text>
          </View>
          <View style={styles.modal_dot_row}>
            <View style={styles.modal_dot} />
            <Text style={styles.modal_text1}>charge for loading & unloading</Text>
          </View>
          <View style={styles.modal_dot_row}>
            <View style={styles.modal_dot} />
            <Text style={styles.modal_text1}>Fare does’t include labour charge for loading & unloading</Text>
          </View>
          <View style={styles.modal_dot_row}>
            <View style={styles.modal_dot} />
            <Text style={styles.modal_text1}>charge for loading & unloading</Text>
          </View>

          <TouchableOpacity style={styles.modal_btn}
            onPress={() => { setModalVisible(!isModalVisible), navigation.navigate("AllOrders", { status: "success" }) }}
          >
            <Text style={styles.modal_btn_text}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible && modal == "cancel"}>
        <View style={styles.cancel_modal}>
          <Text style={styles.modal_title}>Booking cancelled</Text>
          <View style={styles.hr_line} />
          <Text style={styles.cancel_modal_text}>Your booking with CRN433787 has been cancelled.</Text>
          <TouchableOpacity style={styles.cancel_modal_btn}
            onPress={() => { setModalVisible(!isModalVisible), navigation.navigate("AllOrders", { status: "cancel" }) }}
          >
            <Text style={styles.cancel_modal_btn_text}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* verify otp modal  */}
      <Modal isVisible={otpModal}
        backdropOpacity={0.3}
        onBackButtonPress={() => { setOtpModal(!otpModal) }}
        onBackdropPress={() => { setOtpModal(!otpModal) }}
      >
        <View style={styles.verify_modal}>
          <Text style={styles.verify_title}>Verify Code</Text>
          <Text style={styles.verify_subtitle}>Enter your verification code from your
            customer that we’ve sent</Text>

          <View style={styles.OtpRow}>
            <OTPInputView
              // onPress={() => console.log("press me")}
              style={styles.OtpinputBox}
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.boxstyle}
              onCodeFilled={(code => setOtp(code))}
            // onCodeFilled={(code => setOtp(code))}
            />
          </View>
          <TouchableOpacity style={styles.verify_btn}
            onPress={() => {
              if (otp) {
                if (otp.length == 4) {
                  handleVerifyStatus()
                } else {
                  RNToasty.Error({
                    title: "Enter 4 digit otp"
                  })
                }
              } else {
                RNToasty.Error({
                  title: "Enter otp"
                })
              }

            }}
          >
            <Text style={styles.verify_btn_text}>Verify</Text>
          </TouchableOpacity>
        </View>
      </Modal>


    </View >
  )
}

const mapStateToProps = (state) => ({
  liveOrderData: state.order.liveOrderData,
  currentLocation: state.auth.currentLocation,
})

const mapDispatchToProps = {
  UpdateOrderStatusApi,
  CancelOrderApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)


