import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, SIZES, dummyData } from '../../constants'

const Earning = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            <View style={{ alignItems: 'center' }}>
                {/* this week earning */}
                <View style={{...styles.box, marginTop: SIZES.height * .025,}}>
                    <Text style={styles.week_title}>This week</Text>
                    <View style={styles.row}>
                        <View style={{ ...styles.box1, borderRightWidth: 1.3, }}>
                            <Text style={styles.text}>$ 1103.0</Text>
                            <Text style={styles.text1}>Earnings</Text>
                        </View>
                        <View style={{ ...styles.box1, borderRightWidth: 1.3, }}>
                            <Text style={styles.text}>11h</Text>
                            <Text style={styles.text1}>Time taken</Text>
                        </View>
                        <View style={styles.box1}>
                            <Text style={styles.text}>8</Text>
                            <Text style={styles.text1}>Trips token</Text>
                        </View>
                    </View>
                </View>


                {/* today earning */}
                {/* <View> */}
                    <Text style={styles.today_text}>Today’s Earning</Text>
                    <View style={styles.box} >
                        <View style={styles.row}>
                            <View style={{ ...styles.box1, borderRightWidth: 1.3, }}>
                                <Text style={styles.text}>$ 1103.0</Text>
                                <Text style={styles.text1}>Earnings</Text>
                            </View>
                            <View style={{ ...styles.box1, borderRightWidth: 1.3, }}>
                                <Text style={styles.text}>11h</Text>
                                <Text style={styles.text1}>Time taken</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.text}>8</Text>
                                <Text style={styles.text1}>Trips token</Text>
                            </View>
                        </View>
                    </View>
                {/* </View> */}

                {dummyData.EarningData.map((item) => (
                    <View key={item.id} style={styles.ear_box}
                    // onPress={() => navigation.navigate("TransactionHistory")}
                    >
                        <View style={styles.ear_row}>
                            <Text style={styles.text}>{item.place}</Text>
                            <View style={styles.status_row}>
                                <Text style={{ ...styles.status_text, color: item.status == "credit" ? "#52FF00" : "#FF0000" }}>{item.status == "credit" ? "+" : "-"}</Text>
                                <Text style={styles.text}> {item.amount}</Text>
                            </View>
                        </View>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Earning