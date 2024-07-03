import React, { useState } from 'react'
import { View, Text,StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'


const Location = ({ navigation }) => {
    
    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.image_box}>
                        <Image source={images.logo1} style={styles.image} resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>LOCATION</Text>
                        <Text style={styles.text}>PLease provide location Access to continue</Text>
                    </View>
                    <RoundedButton
                    backgroundColor={"#BFBFC1"}
                    Btnstyle={{ marginTop: SIZES.height * .01 }}
                    textColor={"#707070"}
                        onPress={() => navigation.navigate("Login")}
                    >
                        Ok
                    </RoundedButton>
                </View>
               
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)