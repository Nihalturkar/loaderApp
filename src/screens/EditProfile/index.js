import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions, ActivityIndicator } from "react-native";
import { COLORS, SIZES, icons, images, } from "../../constants";
import CheckBox from '@react-native-community/checkbox';
// import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";
import ImageCropPicker from "react-native-image-crop-picker";
import { connect } from "react-redux";
import Icons from "../../component/Icons";
import { UpdateUserApi } from "../../redux/actions/authAction";
import { http2 } from "../../services/api";
const { width, height } = Dimensions.get('window')



const EditProfile = ({ navigation, route, userData, UpdateUserApi }) => {


    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [profile, setProfile] = useState(images.profile);
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [firstImg, setFirstImg] = useState(null)
    const [img, setImg] = useState(http2 + userData?.userData?.image)

    const [postData, setPostData] = useState({
        fullName: userData?.userData?.fullName,
        email: null,
        image: null,
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        UpdateUserApi(postData, userData?.userData?._id, navigation, (data) => setLoadingIndicator(data))

    }


    const selectProfile = async () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
        }).then(image => {
            handleChange("image", {
                uri: image.path,
                name: "profile.jpeg",
                type: image.mime
            })
            setFirstImg(image.path)
            setImg(image.path)
            setProfile({ uri: image.path });
        }).catch((err) => console.log(err));
    };



    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
                <View style={styles.profileBox}>
                    {userData?.userData?.image ?
                        < TouchableOpacity onPress={selectProfile}>
                            <View style={styles.userProfileBox}>
                                <Image source={{ uri: img }} style={styles.userProfile} resizeMode='contain' />
                            </View>
                            <View >
                                <Image source={icons.edit} style={styles.Edit} resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                        :
                        < TouchableOpacity onPress={selectProfile}>
                            <View style={styles.userProfileBox}>
                                <Image source={firstImg ? { uri: firstImg } : images.profile} style={styles.userProfile} resizeMode='contain' />
                            </View>
                            <View >
                                <Image source={icons.edit} style={styles.Edit} resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Profile Details</Text>

                    <TextInput style={styles.input} placeholder="Full Name*" value={postData.fullName} placeholderTextColor={'#A7A7A7'}
                        onChangeText={(text) => handleChange("fullName", text)} />
                    <TextInput style={styles.input} placeholder="Mobile Number*"
                        value={String(userData?.userData?.mobile)} placeholderTextColor={'#A7A7A7'}
                        editable={false}

                        keyboardType="numeric" />

                    <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
                        {
                            loadingIndicator &&
                            <ActivityIndicator size={24} color={COLORS.white} style={{ marginRight: SIZES.width * .04 }} />
                        }
                        <Text style={styles.addBtnText}>Done</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView >
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    UpdateUserApi
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);