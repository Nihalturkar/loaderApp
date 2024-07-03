import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES, icons, images } from '../../constants';
import styles from './styles';
import { http2 } from '../../services/api';
import VideoPlayer from 'react-native-video-controls';
import { GetTreaningVideoApi } from '../../redux/actions/treaningAction';
import { connect } from 'react-redux'


const Training = ({ navigation, GetTreaningVideoApi, getTreaningVideo }) => {

    const [loadingIndicator, setLoadingIndicator] = useState(false)

    useEffect(() => { GetTreaningVideoApi((data) => setLoadingIndicator(data)) }, [])

    // let video = 'loaderProduction/loaderTrainingVideo1.mp4'
    // console.log("getTreaningVideo", getTreaningVideo && getTreaningVideo)
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            {loadingIndicator ?
                <></>
                :
                <>
                    {getTreaningVideo?.[0] && getTreaningVideo?.map((item) => (
                        <ImageBackground source={item?.thumNail ? { uri: http2 + item?.thumNail } : images.training} resizeMode='cover' style={{ marginTop: SIZES.height * .03, backgroundColor: COLORS.black, overflow: 'hidden', borderRadius: 6 }} >
                            <TouchableOpacity style={[styles.overlayVideoContainer]} activeOpacity={0.7}
                                onPress={() => navigation.navigate("videoPreview", { uri: "https://satyakabirbucket.ap-south-1.linodeobjects.com/" + item?.video })}
                            >
                                <Image source={icons.playButton} style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        </ImageBackground>
                    ))}
                </>
            }

        </View>
    )
}

const mapStateToProps = (state) => ({
    getTreaningVideo: state.treaning.getTreaningVideo
})

const mapDispatchToProps = {
    GetTreaningVideoApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);