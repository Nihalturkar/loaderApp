import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '../Icons'
import { COLORS, FONTS } from '../../constants'


const HeaderLeft1 = ({ navigation }) => {
    return (
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icons
            name={"back"}
            size={20}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    )
  }

  HeaderLeft1.defaultProps = {
    title: "",
    navigation: null
  }
  

export default HeaderLeft1

const styles = StyleSheet.create({
    headerTitle: {
        fontFamily: FONTS.medium,
        fontSize: 17,
        color: COLORS.black,
        marginBottom: -6,
    },

    headerRow: {
        flexDirection: 'row',
        alignItems:'center'
    },

    backBtn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: SIZES.width * .02,
    },

})