import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "./styles";
import { GetTermsConditionApi } from "../../redux/actions/companyAction";
import RenderHtml from 'react-native-render-html';


const TermsAndCondition = ({ navigation, GetTermsConditionApi, termsConditionData }) => {

    const [loadingIndicator, setLoadingIndicator] = useState(false)

    useEffect(() => {
        GetTermsConditionApi((data) => setLoadingIndicator(data))
    }, [])

    const source = {
        html: termsConditionData?.termAndCondition
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
    termsConditionData: state.company.termsConditionData
})

const mapDispatchToProps = {
    GetTermsConditionApi
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndCondition);