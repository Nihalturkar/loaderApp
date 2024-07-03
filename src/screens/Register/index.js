import React, { useState } from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../../constants'
// import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { ResendOtpApi, SignUpApi } from '../../redux/actions/authAction'
import { RNToasty } from 'react-native-toasty'
import styles from './styles'
import RoundedButton from '../../component/Buttons/RoundedButton'
import SelectDropdown from 'react-native-select-dropdown'
import Icons from '../../component/Icons'
import CheckBox from '@react-native-community/checkbox'



const Register = ({ navigation, ResendOtpApi, route }) => {
    const [postData, setPostData] = useState({
        fullName: null,
        email: null,
    })

    const data = ["I will be using Porter for", "Business Usage", "Personal Usage", "House Shifting Usage"]


    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleSubmit = () => {
        const data = {
            mobile: route.params.mob
        }
        if (postData.fullName || postData.email) {
            if (postData.fullName) {
                if (postData.email) {
                    if (postData.email.match(validRegex)) {
                        ResendOtpApi(data, navigation, "Register", postData)
                    } else {
                        RNToasty.Error({
                            title: "Please enter valid email",
                            duration: 2
                        })
                    }
                } else {
                    RNToasty.Error({
                        title: "Please enter email",
                        duration: 2
                    })
                }
            } else {
                RNToasty.Error({
                    title: "Please enter full name",
                    duration: 2
                })
            }
        } else {
            RNToasty.Error({
                title: "Please enter full name and email",
                duration: 2
            })
        }
    }


    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
            >
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.image_container}>
                        <View style={styles.image_box}>
                            <Image source={images.logo} style={styles.image} resizeMode='contain' />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.row}>
                            <Image source={images.india} style={styles.india} resizeMode='contain' />
                            <Text style={styles.mobile}>{route.params.mob}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={styles.btnText}>change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={{ marginBottom: SIZES.height * .02, }}>
                            <TextInput
                                style={styles.input}
                                placeholder='Full Name'
                                placeholderTextColor={COLORS.gray20}
                                value={postData.fullName}
                                onChangeText={(text) => handleChange("fullName", text)}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Id'
                            placeholderTextColor={COLORS.gray20}
                            value={postData.email}
                            onChangeText={(text) => handleChange("email", text)}
                        />

                        {/* <View style={styles.dropdown_input}>
                            <Text style={styles.text}>Requirements</Text>
                            <SelectDropdown
                                dropdownIconPosition={'right'}
                                rowTextStyle={{ textAlign: 'center', padding: 0 }}
                                renderDropdownIcon={() => (
                                    <Icons name="down" size={15} style={styles.down} color={COLORS.black} />
                                )}
                                dropdownStyle={styles.dropDown}
                                buttonStyle={styles.dropDownBtnStyle}
                                buttonTextStyle={styles.dropDownTextStyle}
                                data={data}
                                defaultValueByIndex={0}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                    // onChangeText && onChangeText(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View> */}
                        <RoundedButton Btnstyle={{ marginVertical: SIZES.height * .04 }}
                            onPress={() => handleSubmit()}

                        >
                            Register
                        </RoundedButton>
                        {/* <View style={styles.bottom_row}>
                            <CheckBox
                                disabled={false}
                                value={checked}
                                tintColors={{ true: COLORS.primary, false: COLORS.primary }}
                                onValueChange={() => setChecked(!checked)}
                     
                            />
                            <Text style={styles.bottom_text}>Allow Loader to send update on </Text>
                            <Icons name={"whatsapp"} size={20} style={{ marginRight: 3 }} />
                            <Text style={styles.bottom_text}>Whatsapp</Text>
                        </View> */}

                        <View>
                            <Text style={styles.bottom_text}>A one time (OTP) will bw sent to the number for
                                verfication</Text>
                        </View>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    ResendOtpApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)