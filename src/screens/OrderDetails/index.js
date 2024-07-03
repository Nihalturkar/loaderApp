import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, images } from '../../constants'
import styles from './styles'
import { connect } from 'react-redux'
import { formatAMPM, formatDate } from '../../services/date'



const OrderDetails = ({ singleOrderData }) => {

    console.log("singleOrderData?.status", singleOrderData?.status)

    return (
        <View style={styles.cont}>
            <Image source={images.map} resizeMode='stretch' style={styles.mapImage} />

            <View style={{ alignItems: 'center' }}>
                <View style={{ width: SIZES.width * .9 }}>

                    <View style={styles.timePrizeMain}>
                        <View>
                            <Text style={styles.dateTimeText}>{formatDate(new Date(singleOrderData?.createdAt))}, {formatAMPM(new Date(singleOrderData?.createdAt))}</Text>
                            <Text style={styles.crnText}>{singleOrderData?._id} ● <Text style={singleOrderData?.status == "DELIVERED" ? { color: 'green' } : { color: 'red' }}>{singleOrderData?.status}</Text></Text>
                        </View>
                        {singleOrderData?.status == "DELIVERED" ?
                            <Text style={styles.mainPriceText}>₹ {singleOrderData?.tripAmount}</Text>
                            :
                            <Text style={styles.mainPriceText}>₹ 0.0</Text>
                        }
                    </View>


                    <View style={styles.horizontalLine} />


                    <View style={{ paddingVertical: SIZES.height * .017 }}>
                        <View style={styles.loc_row}>
                            <View style={styles.dot} />
                            <Text style={styles.location}>{singleOrderData?.pickUp?.address.length > 43 ? `${singleOrderData?.pickUp?.address.slice(0, 43)}...` : singleOrderData?.pickUp?.address}</Text>
                        </View>
                        {singleOrderData?.drop?.map((item) => (
                            <>
                                <View style={styles.vt_line} />
                                <View style={styles.loc_row}>
                                    <View style={{ ...styles.dot, backgroundColor: 'red' }} />
                                    <Text style={styles.location}>{item.address.length > 43 ? `${item.address.slice(0, 43)}...` : item.address}</Text>
                                </View>
                            </>
                        ))}
                    </View>


                    <View style={styles.horizontalLine} />

                    <View style={{ marginHorizontal: SIZES.width * .05, marginTop: SIZES.height * .03 }}>
                        <Text style={styles.fareDetailsText}>Fare details</Text>

                        <View style={[styles.horizontalLine, { marginVertical: 5 }]} />
                        <View style={[styles.timePrizeMain, { paddingVertical: 0 }]}>
                            <Text style={styles.dateTimeText}>Total</Text>

                            {singleOrderData?.status == "DELIVERED" ?
                                <Text style={[styles.mainPriceText, { fontSize: 13 }]}>₹ {singleOrderData?.tripAmount}</Text>
                                :
                                <Text style={[styles.mainPriceText, { fontSize: 13 }]}>₹ 0.0</Text>
                            }

                        </View>
                    </View>


                </View>

            </View>

        </View>
    )
}

const mapStateToProps = (state) => ({
    singleOrderData: state.order.singleOrderData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)