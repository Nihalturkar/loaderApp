import { View, Text } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-video-controls'
import styles from './styles'

const VideoPreview = ({ navigation, route }) => {
  console.log("url", route.params.uri)
  return (
    <View style={styles.base}>
      <VideoPlayer
        style={{height: 200}}
        source={{ uri: route.params.uri }}
        navigator={navigation}
      />
    </View>
  )
}

export default VideoPreview