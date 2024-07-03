import React from "react"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image, StyleSheet } from "react-native"
import { icons, images } from "../../constants"




const Icons = ({ name, color, size, style }) => {
    switch (name) {

        // bottom tab icons
        case 'home1':
            return <Image source={icons.home1}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'discount':
            return <Image source={icons.discount}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'chart':
            return <Image source={icons.chart}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'profile2':
            return <Image source={icons.profile2}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'whatsapp':
            return <Image source={icons.whatsapp}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'home':
            return <Image source={icons.home}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'clock':
            return <Image source={icons.clock}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'wallet':
            return <Image source={icons.wallet}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'profile':
            return <Image source={icons.profile}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'back':
            return <Image source={icons.back}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'notification':
            return <Image source={icons.notification}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'search':
            return <Image source={icons.search}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'calendar':
            return <Image source={icons.calendar}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'arrowLeft':
            return <Image source={icons.arrowLeft}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'gps':
            return <Image source={icons.gps}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'menu':
            return <Image source={icons.menu}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />
        case 'deliver':
            return <Image source={images.delivered}
                style={[{ tintColor: color, height: size, width: size }, style]}
                resizeMode='contain'
            />


        // icons
        case 'call':
            return <Ionicons style={StyleSheet.create(style)} name="call" size={size} color={color} />
        case 'direction':
            return <FontAwesome5 style={StyleSheet.create(style)} name="directions" size={size} color={color} />
        case 'wallet1':
            return <FontAwesome5 style={StyleSheet.create(style)} name="wallet" size={size} color={color} />
        case 'search1':
            return <Ionicons style={StyleSheet.create(style)} name="md-search-sharp" size={size} color={color} />
        case 'closecircle':
            return <AntDesign style={StyleSheet.create(style)} name="closecircle" size={size} color={color} />
        case 'arrowright':
            return <AntDesign style={StyleSheet.create(style)} name="arrowright" size={size} color={color} />
        case 'up':
            return <Feather style={StyleSheet.create(style)} name="chevron-up" size={size} color={color} />
        case 'down1':
            return <Feather style={StyleSheet.create(style)} name="chevron-down" size={size} color={color} />
        case 'share':
            return <Entypo style={StyleSheet.create(style)} name="share" size={size} color={color} />
        case 'info':
            return <Feather style={StyleSheet.create(style)} name="info" size={size} color={color} />
        case 'cancel':
            return <MaterialCommunityIcons style={StyleSheet.create(style)} name="cancel" size={size} color={color} />
        case 'right':
            return <Feather style={StyleSheet.create(style)} name="chevron-right" size={size} color={color} />
        case 'menu1':
            return <Feather style={StyleSheet.create(style)} name="menu" size={size} color={color} />
        case 'down':
            return <AntDesign style={StyleSheet.create(style)} name="caretdown" size={size} color={color} />
        case 'clock1':
            return <Feather style={StyleSheet.create(style)} name="clock" size={size} color={color} />
        case 'eye-off':
            return <Ionicons style={StyleSheet.create(style)} name="eye-off" size={size} color={color} />
        case 'eye':
            return <Ionicons style={StyleSheet.create(style)} name="eye" size={size} color={color} />
        case 'check':
            return <Feather style={StyleSheet.create(style)} name="check" size={size} color={color} />
        case 'close':
            return <AntDesign style={StyleSheet.create(style)} name="close" size={size} color={color} />
        case 'three-dots':
            return <Entypo style={StyleSheet.create(style)} name="dots-three-vertical" size={size} color={color} />
        case 'pluscircle':
            return <AntDesign style={StyleSheet.create(style)} name="pluscircle" size={size} color={color} />
        case 'star-outline':
            return <AntDesign style={StyleSheet.create(style)} name="staro" size={size} color={color} />


        default:
            return <MaterialIcons style={StyleSheet.create(style)} name="logout" size={size} color={color} />
    }
}

Icons.defaultProps = {
    style: null,
    color: null
}

export default Icons