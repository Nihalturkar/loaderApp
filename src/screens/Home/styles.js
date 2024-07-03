import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },

  alert: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    elevation: 4,
    borderColor: COLORS.black,
    borderRadius: 10,
    marginVertical: SIZES.height * .02,
    paddingVertical: SIZES.height * .01,
    paddingHorizontal: SIZES.width * .03,
  },
  alert_row: {
    width: SIZES.width * .5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "space-between",
    // marginVertical: SIZES.height * .02,
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
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_box: {

    borderRadius: SIZES.width * .1,
    backgroundColor: "#E9E6E6",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * .03,
    overflow: 'hidden'
  },

  box: {
    width: SIZES.width * .34,
    alignItems: 'center',
  },

  profile: {
    width: SIZES.width * .14,
    height: SIZES.width * .14,
  },


  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#34DD3A",
    marginRight: 3,
    borderRadius: 8,
  },


  amount: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#5F5A5A",
    marginBottom: -3,
  },
  mode: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.primary,
    marginBottom: -3,
  },
  name: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.primary,
    marginBottom: -3,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 7,
    color: "#797171",
    marginBottom: -1,
  },
  id: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: "#AC9B9B",
    marginBottom: -2,
  },

  toggleContainerStyle: {
    width: SIZES.width * .14,
    height: SIZES.height * .03,
    borderRadius: 25,
    padding: 3,
    marginTop: 3,
    // borderWidth: 1,
    // borderColor: '#6A6664',
  },


  toggleCircleStyle: {
    width: 15,
    height: 15,
    borderRadius: 20,
  },






  box_btn: {
    width: SIZES.width * .43,
    height: SIZES.height * .12,
    backgroundColor: COLORS.white,
    elevation: 10,
    borderRadius: 12,
    paddingLeft: SIZES.width * .05,
    justifyContent: 'center',
    marginVertical: SIZES.height * .01,
    // shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  box_container: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  box_total: {
    fontFamily: FONTS.semiBold,
    fontSize: 24,
    marginBottom: -6,
    color: COLORS.primary,
  },
  box_title: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginBottom: -3,
    color: "#926C6C",
    paddingVertical: 3,
  },

  title1: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    marginBottom: -3,
    color: "#926C6C",
    marginVertical: SIZES.height * .03,
  },





  wallet_btn: {
    width: SIZES.width * .9,
    height: SIZES.height * .1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: SIZES.height * .02,
  },
  wallet_row: {
    width: SIZES.width * .8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  wallet_text: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    marginBottom: -3,
    color: COLORS.white,
  },
  wallet_amount: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    marginBottom: -3,
    color: COLORS.white,
  },
  wallet_box: {
    marginLeft: SIZES.width * .04,
  },

  // =============modal ===============
  modal: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    // paddingVertical: SIZES.height * .02,
    alignItems: 'center',
  },

  modal_row: {
    width: SIZES.width * .8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.width * .03,
    marginTop: SIZES.height * .02,
  },

  modal_profile: {
    width: SIZES.width * .14,
    height: SIZES.height * .07,
  },

  modal_name: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.primary,
    marginBottom: -3,
  },

  modal_subtitle: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.black,
    marginBottom: -2,
  },

  modalBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * .8,
    height: SIZES.height * .06,
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    marginBottom: SIZES.height * .02,
  },
  modalBtnText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: 14,
    marginBottom: -3,
  },
  modalText: {
    fontFamily: FONTS.medium,
    fontSize: 9,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.height * .01,
  },

  modal_vehicle_text: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.primary,
    marginBottom: -3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },

  order: {
    width: SIZES.width * .2,
    height: SIZES.height * .1,
  },

  vehicle_type: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLORS.black,
    textAlign: "center",
  },

  join_text: {
    width: SIZES.width * .7,
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.black,
    textAlign: "center",
    marginVertical: SIZES.height * .015,
  },

  modal_box: {
    width: SIZES.width * .8,
    alignItems: 'center',
    marginVertical: SIZES.height * .01,
  },



  // ================== bottom sheet ================
  bottomSheet: {
    width: SIZES.width,
    height: SIZES.height * .9,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  back_btn: {
    width: SIZES.width * .1,
    // height: SIZES.height * .05,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    marginRight: SIZES.width * .03,
  },

  bottom_header_row: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * .03,
    // marginVertical: SIZES.height * .03,
  },

  bottom_hr_line: {
    width: SIZES.width,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    marginVertical: SIZES.height * .01,
  },

  vehicle_no: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: "#705F5F",
    marginBottom: -3,
  },

  vehicle_time: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#9E8B8B",
    marginBottom: -3,
  },

  loc_box: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * .02,
    // borderWidth: 1,
  },

  loc_row: {
    width: SIZES.width * .74,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },

  loc_dot: {
    width: 8,
    height: 8,
    backgroundColor: "#34DD3A",
    marginRight: 3,
    borderRadius: 8,
    marginRight: SIZES.width * .03,
  },

  loc_text: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#7C7070",
    marginBottom: -3,
  },

  dir_btn: {
    width: SIZES.width * .1,
    height: SIZES.height * .05,
    borderRadius: SIZES.width * .05,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    backgroundColor: '#CBD3FF',
  },

  ear_row: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * .01,
    // borderWidth: 1,
  },

  ear_title: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
    // marginBottom: -3,
  },

  settle_as: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#9E8B8B",
    marginBottom: -4,
  },

  ear_title1: {
    fontFamily: FONTS.semiBold,
    fontSize: 17,
    color: COLORS.black,
    marginBottom: -6,
    marginTop: SIZES.height * .01,
  },

  ear_text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.black,
    // marginBottom: -3,
  },

  btn_box: {
    width: SIZES.width,
    height: SIZES.height * .12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    // shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    // borderWidth: 1,
    borderColor: '#BEBEBE',
    borderRadius: 25,
  },

  btn_row: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.height * .01,
  },

  btn: {
    width: SIZES.width * .44,
    height: SIZES.height * .06,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },

  btn_text: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.white,
    marginBottom: -4,
  },

  //  verify otp modal
  verify_modal: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingVertical: SIZES.height * .04,
    alignItems: 'center',
  },

  verify_title: {
    fontFamily: FONTS.semiBold,
    fontSize: 24,
    // color: COLORS.white,
    color: "#0D0D26",
    marginVertical: SIZES.height * .01,
  },

  verify_subtitle: {
    width: SIZES.width * .8,
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.gray30,
    // color: "#0D0D26",
    marginBottom: -4,
    textAlign: 'center',
  },

  verify_btn: {
    width: SIZES.width * .8,
    height: SIZES.height * .06,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    // marginVertical: SIZES.height * .02,
  },

  verify_btn_text: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.white,
    marginBottom: -4,
  },

  OtpinputBox: {
    width: SIZES.width * .7,
    height: SIZES.height * .2,
  },
  boxstyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.gray20,
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.black,
    padding: 0,
    backgroundColor: COLORS.white,
  },

  //  =============  user box =============

  user_box: {
    width: SIZES.width * .9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1,
    // borderBottomWidth:1.3,
    // borderColor: '#D0D0D0',
    elevation: 5,
    backgroundColor: COLORS.white,
    paddingBottom: SIZES.height * .003,
    borderRadius: 8,
    // position: 'absolute',
    bottom: SIZES.height * .12,
    paddingHorizontal: SIZES.width * .03,
    paddingVertical: SIZES.height * .01,
    // marginTop: SIZES.height * .03,
    // marginBottom: SIZES.height * .01,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  user_image_box: {
    width: SIZES.width * .12,
    height: SIZES.height * .06,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "rgba(196, 196, 196, 0.75)",
    borderRadius: 100,
    marginRight: SIZES.width * .03,
    overflow: 'hidden',

  },

  user_image: {
    width: SIZES.width * .12,
    height: SIZES.height * .06,
    // marginTop: SIZES.height * .01,
  },

  active: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#47BB1E",
    position: 'absolute',
    right: 2,
    top: 2,
  },
  loc_text: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    marginBottom: -2,
    color: "#828282",
  },
  user_name: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    marginBottom: -3,
    color: COLORS.primary,
  },

  call_btn: {
    alignItems: 'center',
  },

  call_box: {
    width: SIZES.width * .1,
    height: SIZES.height * .05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#CBD3FF",
    borderRadius: SIZES.width * .05,
  },

  call_text: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    marginTop: 2,
    color: COLORS.black,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#47BB1E",
    marginRight: SIZES.width * .02,
  },

  live: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: "#47BB1E",
    marginBottom: -4,
  },
  live_box: {
    width: SIZES.width * .2,
    height: SIZES.height * .045,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: "#47BB1E",
    borderRadius: 10,
    marginRight: SIZES.width * .03,
  },


  battery: {
    width: SIZES.width * .6,
    height: SIZES.width * .6
  },
  batteryTitle: {
    color: COLORS.gray80,
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * .04
  },
  batterySubtitle: {
    color: COLORS.gray50,
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * .033,
    textAlign: "center",
    width: SIZES.width * .85
  },
  openSettingTouch: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * .4,
    height: SIZES.height * .06,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * .03
  },
  openSettingText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    marginBottom: -3
  },


  whatsappIcon: {
    width: SIZES.width * .18,
    height: SIZES.width * .18,
    // elevation:5,
    // backgroundColor:COLORS.white,
    borderWidth: 1
  },
  whatsappIcon2: {
    width: SIZES.width * .1,
    height: SIZES.width * .1,
    // elevation:5,
    // backgroundColor:COLORS.white,
    borderWidth: 1
  },
  whatsappIconTouch: {
    backgroundColor: '#25D366',
    width: SIZES.width * .13,
    height: SIZES.width * .13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // elevation: 8,
  },
  menuText: {
    alignItems: 'center',
    //    marginTop:SIZES.height*.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:COLORS.primary,
    height: SIZES.height * .07
  },
  whatsappIconCont: {
    // width: SIZES.width,
    // position: 'absolute',
    bottom: SIZES.height * .015,
    right: SIZES.width * .03
  },



  // insurence card
  insuranceIcon: {
    width: SIZES.width * .23,
    height: SIZES.width * .2,
    marginLeft: SIZES.width * .03
    // backgroundColor:COLORS.gray1
  },
  vehicleIdIcon: {
    width: SIZES.width * .17,
    height: SIZES.width * .2,
    marginLeft: SIZES.width * .03
    // backgroundColor:COLORS.gray1
  },
  insurenceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 6,
    width: SIZES.width * .9,
    borderRadius: 7,
    marginTop: SIZES.height * .015,
    overflow: 'hidden'
  },
  insurenceText: {
    color: "red",
    fontSize: SIZES.width * .033,
    width: SIZES.width * .6,
    fontFamily: FONTS.medium,
    lineHeight: 15,
    marginLeft: 5,
  }

})