import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "./styles";

import RenderHtml from 'react-native-render-html';
import { GetPrivacyPolicyApi } from "../../redux/actions/companyAction";

const PrivacyPolicy = ({ navigation, GetPrivacyPolicyApi, privacyPolicyData }) => {
    const [loadingIndicator, setLoadingIndicator] = useState(false)

    useEffect(() => {
        GetPrivacyPolicyApi((data) => setLoadingIndicator(data))
    }, [])

    const source = {
        html: privacyPolicyData?.policy
    };

    return (
        <View style={styles.container}>

            {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" /> */}
            {loadingIndicator ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={40} color={COLORS.primary} />
                </View>
                :
                <View style={{ width: SIZES.width, alignSelf: "center" }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center',  backgroundColor: COLORS.white }} >
                    <RenderHtml
                        source={source}
                        tagsStyles={{ body: { color: COLORS.gray80, fontFamily: 'Roboto-Regular', fontSize: 14, textAlign: "justify", marginHorizontal: 10 } }}
                    />
                </ScrollView>
            </View>
            }
        </View>
    )
}

const mapStateToProps = (state) => ({
    privacyPolicyData: state.company.privacyPolicyData
})

const mapDispatchToProps = {
    GetPrivacyPolicyApi
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);