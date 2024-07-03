import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "./styles";

import RenderHtml from 'react-native-render-html';
import { GetAboutUsApi, GetPrivacyPolicyApi } from "../../redux/actions/companyAction";

const AboutUs = ({ navigation, GetAboutUsApi, aboutUsData }) => {
    const [loadingIndicator, setLoadingIndicator] = useState(false)

    useEffect(() => {
        GetAboutUsApi((data) => setLoadingIndicator(data))
    }, [])

    const source = {
        html: aboutUsData?.aboutAs
    };
    console.log("aboutUsData", aboutUsData)
    return (
        <View style={styles.container}>

            {/* <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" /> */}
            {loadingIndicator ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={40} color={COLORS.primary} />
                </View>
                :
                <View style={{ width: SIZES.width, alignSelf: "center" }}>

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', backgroundColor: COLORS.white }} >
                        <RenderHtml
                            contentWidth={SIZES.width * .9}
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
    aboutUsData: state.company.aboutUsData
})

const mapDispatchToProps = {
    GetAboutUsApi
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);