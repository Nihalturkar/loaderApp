import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants';
import styles from './styles';
import { useState } from 'react';

const CheckVehicle = ({ navigation }) => {
    const [vehicleNo, setVehicleNo] = useState()
    const [exist, setExist] = useState(true)
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <Text style={styles.title}>Check vehicle</Text>
            <View>
                <TextInput
                    placeholder='Enter Vehicle no.'
                    placeholderTextColor={"#8E7272"}
                    value={vehicleNo}
                    style={styles.input}
                    onChangeText={(text) => setVehicleNo(text)}
                />
                {/* {vehicleNo &&
                    exist ?
                    <Text style={styles.found}>Vehicle Found Successfully</Text>
                    :
                    <Text style={styles.not_exist}>Vehicle not exists</Text>
                } */}


            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckVehicle;