import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const EarningCard = ({ source, name, mode, time, type, amount, text }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.type_box}>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.row2}>
          <View style={styles.image_box}>
            <Image source={source} style={styles.image} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row1}>
              <View style={styles.row2}>
                <View style={[styles.dot, mode == "offline"&& {backgroundColor:  "#DD7134" }, mode == "on Trip" && {backgroundColor: COLORS.primary}]} />
              <Text style={[styles.mode, mode == "offline"&& {color:  "#DD7134" }, mode == "on Trip" && {color: COLORS.primary}]}>{mode}</Text>
              </View>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

EarningCard.defaultProps = {
  source: null,
  name: "",
  mode: "Online",
  time: "",
  type: "Driver",
  amount: "$10,000",
  text: "west Bombay 5th block,karachi ",
}

export default EarningCard

const styles = StyleSheet.create({
  card: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray20,
    width: SIZES.width,
    alignItems: 'center',
    paddingBottom: SIZES.height * .015,
  },

  row: {
    width: SIZES.width * .94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_box: {
    width: SIZES.width * .14,
    height: SIZES.height * .07,
    borderRadius: SIZES.width * .1,
    backgroundColor: "#E9E6E6",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * .015,
  },

  box: {
    width: SIZES.width * .34,
    alignItems: 'center',
  },

  image: {
    width: SIZES.width * .1,
    height: SIZES.height * .05,
  },

  type_box: {
    width: SIZES.width * .2,
    height: SIZES.height * .02,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: "#34DD3A",
    marginRight: 3,
    borderRadius: 5,
  },
  type: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.white,
    // marginBottom: -1,
  },

  amount: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: "#5F5A5A",
    marginBottom: -3,
  },
  mode: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: "#34DD3A",
    marginBottom: -3,
  },
  name: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: "#5F5A5A",
    marginBottom: -3,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 7,
    color: "#797171",
    marginBottom: -1,
  },
  time: {
    fontFamily: FONTS.medium,
    fontSize: 9,
    color: "#797171",
    marginBottom: -2,
    marginLeft: 5,
  },

})