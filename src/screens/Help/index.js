import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, Linking } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'
import styles from './styles'
import { openWhatsApp } from '../../services/whatsapp'
import { connect } from 'react-redux'
import { GetAllSupportApi } from '../../redux/actions/homeAction'


const Help = ({GetAllSupportApi, navigation, supportData}) => {
    const support = supportData?.find((item) => item?.type == "DRIVER")

    // console.log("support help : ", supportData)

    return (
        <View style={styles.helpCont}>
            <View style={{ alignItems: 'center' }}>
                <Image source={icons.support} resizeMode='contain' style={styles.supportIcon} />
                <View style={{ width: SIZES.width * .89 }}>
                    <TouchableOpacity style={styles.touch}
                        activeOpacity={0.4}
                        onPress={() => { Linking.openURL(`tel:${support?.contactNumber}`) }}
                    >
                        <Image source={icons.call} resizeMode='contain' style={styles.callIcon} />
                        <View style={{ marginLeft: SIZES.width * .03 }}>
                            <Text style={styles.titleText}>Call</Text>
                            <Text style={styles.subTitleText}>24 x 7 Call support</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touch, { marginTop: SIZES.height * .013 }]}
                        activeOpacity={0.4}
                        onPress={() => openWhatsApp(support?.whatsappNumber, "Hello! I need help.")}
                    >
                        <Image source={icons.whatsapp2} resizeMode='contain' style={styles.callIcon} />
                        <View style={{ marginLeft: SIZES.width * .03 }}>
                            <Text style={styles.titleText}>WhatsApp Chat</Text>
                            <Text style={styles.subTitleText}>24 x 7 WhatsApp chat support</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touch, { marginTop: SIZES.height * .014 }]}
                        activeOpacity={0.4}
                        onPress={() => { Linking.openURL(`mailto:${support?.email}?subject=Driver query&body=Issue regarding app`) }}
                    >
                        <Image source={icons.email} resizeMode='contain' style={styles.callIcon} />
                        <View style={{ marginLeft: SIZES.width * .03 }}>
                            <Text style={styles.titleText}>E-mail</Text>
                            <Text style={styles.subTitleText}>24 x 7 Email support</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    supportData: state.home.supportData,
})

const mapDispatchToProps = {
    GetAllSupportApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)