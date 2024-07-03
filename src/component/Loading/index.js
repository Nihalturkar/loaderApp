import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants';


const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.secondary} barStyle="light-content" />
      <Text
        style={styles.title}
      >
        Sorry for the interruption
      </Text>
      <ActivityIndicator color={COLORS.white} size={40} style={styles.loading} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.white,
    marginBottom: 30,
  },

  text: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.white,
  },

  loading: {
    marginBottom: 10,
  },

})