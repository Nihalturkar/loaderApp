import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, images } from '../../constants'
// Using Clipboard API
import Clipboard from '@react-native-community/clipboard';
// Using Clipboard Hook
import { useClipboard } from '@react-native-community/clipboard';
import { useState } from 'react';
import { RNToasty } from 'react-native-toasty';
import { connect } from 'react-redux';


const ShareCode = ({ navigation, userData }) => {
    const referCode = userData?.drivingLicenceData?.driverCode
    const docCon = userData?.documentStatus
    const [copiedText, setCopiedText] = useState("");

    const [data, setData] = useClipboard()

    const copyToClipboard = async () => {
        Clipboard.setString(referCode);
        // alert('Copied to Clipboard!');
        RNToasty.Normal({
            title: "Copied to Clipboard!"
        })
        fetchCopiedText()
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

            {docCon?.DL == "APPROVED" && docCon?.aadhar == "APPROVED" ?

                <View style={styles.box_container}>
                    {userData?.userData?.fleetvehicleExist ?
                        <Text style={styles.chooseText}>You are already a fleet please add this driver code in your fleet app to manager and assign vehicle</Text>
                        :
                        <Text style={styles.chooseText}>Share this driver code to Vehicle owner</Text>
                    }

                    <View style={styles.box}>
                        <View style={styles.code_box}>
                            <Text style={styles.code}>{referCode}</Text>
                        </View>
                        <Text style={styles.text}>Tap on copy code to share</Text>

                        <TouchableOpacity style={styles.btn}
                            onPress={() => copyToClipboard()}
                            disabled={!userData?.drivingLicenceData?.driverCode}
                        >
                            <Text style={styles.btn_text}>Copy code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.document} resizeMode='contain' style={styles.document} />
                    <Text style={styles.documentText}>Your document is not approved please wait till the document is approved</Text>
                </View>
            }

            {!userData?.userData?.fleetvehicleExist &&
                <>
                    <View style={styles.row}>
                        <View style={styles.hr_line} />
                        <Text style={styles.or_text}>OR</Text>
                        <View style={styles.hr_line} />
                    </View>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate("UploadDetails", { page: "RC" })}
                    >
                        <Text style={styles.btn_text}>Add own Vehicle</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShareCode)