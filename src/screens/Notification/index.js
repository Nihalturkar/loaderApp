import React from "react";
import { useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, } from "react-native";
import { connect } from "react-redux";
import Alert from "../../component/Alert";
import { COLORS, dummyData, icons, } from "../../constants";
import styles from "./styles";
import { GetNotificationDataApi } from "../../redux/actions/homeAction";


const Notification = ({ navigation, GetNotificationDataApi, notificationData }) => {

    useEffect(() => {
        GetNotificationDataApi()
    }, [])

    return (
        <View style={styles.container}>
            {notificationData && notificationData[0] ?
                <ScrollView style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.notioficationBox}>
                            {notificationData && notificationData.map((item) => (
                                <Alert key={item.id} title={item.title} message={item.message} type={item?.type} time={item?.createdAt}
                                onPress={()=>{
                                    
                                }}
                                />
                            )
                            )}
                        </View>
                    </View>
                </ScrollView>
                :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={icons.noNotification} resizeMode='contain' style={styles.noNotification} />
                    <Text style={styles.notFoundText}>Notification not found</Text>
                </View>
            }

        </View>
    )
}

const mapStateToProps = (state) => ({
    notificationData: state.home.notificationData,
})

const mapDispatchToProps = {
    GetNotificationDataApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);