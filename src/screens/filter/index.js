import { View, Text, StatusBar, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { COLORS, SIZES, dummyData, icons } from '../../constants'
import { GetFilterApi, GetOrderApi, GetSingleOrderApi } from '../../redux/actions/orderAction'
import { connect, useDispatch } from 'react-redux'
import { formatAMPM, formattedDate3, formattedDateServer } from '../../services/date'
import Modal from 'react-native-modal'
import Input1 from '../../component/Inputs/Input1'
import { MANUALLY_MODAL } from '../../redux/types'
import DatePicker from 'react-native-date-picker'
import { RNToasty } from 'react-native-toasty'
import NoDataFound from '../../component/NoDataFound'
import Loader from "react-native-modal-loader";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


const Filter = ({ route, navigation, GetOrderApi, orderData, manuallyModal, loading, GetSingleOrderApi, GetFilterApi }) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [manually, setManually] = useState(null)
    const [loadingModal, setLoadingModal] = useState(false)
    const [page, setPage] = useState(1)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [downLoading, setDownLoading] = useState(false)
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        GetFilterApi(1, route.params?.status)
        setManually(null)
    }, [])

    const dispatch = useDispatch()


    // navigation.setOptions({
    //     headerRight: () => (
    //         <View style={{ marginRight: SIZES.width * .03 }}>
    //             <Menu
    //                 visible={visible}
    //                 anchor={<TouchableOpacity style={styles.threedotMain} onPress={() => setVisible(!visible)}>
    //                     <Image source={icons.menu1} resizeMode='contain' style={styles.threeDot} />
    //                 </TouchableOpacity>}
    //                 onRequestClose={() => setVisible(!visible)}
    //                 style={{ width: SIZES.width * .5 }}
    //             >
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "today"), setStatus("today") }}>Today</MenuItem>
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "week"), setStatus("week") }}>This Week</MenuItem>
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "month"), setStatus("month") }}>This Month</MenuItem>
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "year"), setStatus("year") }}>This Year</MenuItem>
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), GetOrderApi(1, "total"), setStatus("total") }}>Total</MenuItem>
    //                 <MenuItem textStyle={styles.menuText} onPress={() => { setVisible(!visible), dispatch({ type: MANUALLY_MODAL, payload: true }) }}>Manually</MenuItem>

    //             </Menu>
    //         </View>
    //     )
    // })


    const handleMenualFilter = () => {
        if (startDate) {
            if (endDate) {
                dispatch({
                    type: MANUALLY_MODAL,
                    payload: false
                })
                GetOrderApi(1, "manually", startDate, endDate)
                setManually("manually")
            } else {
                RNToasty.Error({
                    title: "Please select end date"
                })
            }
        } else {
            RNToasty.Error({
                title: "Please select start date"
            })
        }
    }


    const onRefresh = () => {
        setIsRefreshing(true)
        GetFilterApi(1, route.params?.status)
        setPage(1)
        setIsRefreshing(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            {loading || !orderData ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                    <Image source={icons.loading} style={{ width: SIZES.width * .2, height: SIZES.width * .2 }} />
                </View>
                :
                <>
                    {orderData && orderData[0] ?
                        <FlatList
                            data={orderData && orderData}
                            contentContainerStyle={{ paddingBottom: SIZES.height * .12 }}
                            onRefresh={onRefresh}
                            refreshing={isRefreshing}
                            renderItem={({ item }) => {
                                const date = formattedDate3(new Date(item?.createdAt))
                                const time = formatAMPM(new Date(item?.createdAt))
                                return (
                                    <TouchableOpacity style={styles.order_box}
                                        onPress={() => { GetSingleOrderApi(item?._id, navigation, (data) => setLoadingModal(data)) }}
                                    >


                                        <View style={styles.date_box}>
                                            <Text style={styles.order_id}>{item?._id}</Text>
                                            <Text style={styles.order_date}>{date} {time}</Text>
                                        </View>

                                        <View style={styles.hr_line} />
                                        <View style={styles.order_row}>
                                            <View style={styles.dot_row}>
                                                <View style={[styles.dot, item.status == "CANCELLED" && { backgroundColor: "red" }]} />
                                                <Text style={[styles.order_status, item.status == "CANCELLED" && { color: "red" }]}>{item.status}</Text>
                                            </View>
                                            <Text style={styles.order_amount}>₹ {item?.tripAmount}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            key={item => item.id}
                            showsVerticalScrollIndicator={false}
                            onEndReached={() => {
                                if (orderData.length >= 20) {
                                    GetFilterApi(page + 1, route?.params?.status, (data) => setDownLoading(data))
                                    setPage(page + 1)
                                    console.log("asd", page)
                                }
                            }}
                            ListFooterComponent={() => {
                                return (
                                    downLoading &&
                                    <View style={styles.downLoadingMain}>
                                        <ActivityIndicator size={35} color={COLORS.primary} />
                                    </View>

                                )
                            }}
                        />
                        :
                        <NoDataFound name={"Order"} />
                    }
                </>
            }

            {/* ===========manual filter modal============ */}
            <Modal isVisible={manuallyModal}
                backdropOpacity={0.3}
            >
                <View style={styles.manuallyModalMain}>
                    <Text style={styles.selectDateText}>Select Date For Filter</Text>
                    <TouchableOpacity
                        onPress={() => setOpen(true)}
                    >
                        <Input1 style={{ width: SIZES.width * .82, marginTop: SIZES.height * .01 }}
                            placeholder={"Start Date"}
                            editable={false}
                            value={startDate}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setOpen2(true)}
                    >
                        <Input1 style={{ width: SIZES.width * .82, marginTop: SIZES.height * .01 }}
                            placeholder={"End Date"}
                            editable={false}
                            value={endDate}
                        />
                    </TouchableOpacity>
                    <View style={styles.modalBtnMain}>
                        <TouchableOpacity style={styles.cancelBtn}
                            onPress={() => {
                                dispatch({
                                    type: MANUALLY_MODAL,
                                    payload: false
                                })
                            }}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.cancelBtn, { backgroundColor: COLORS.primary, borderColor: COLORS.primary }]}
                            onPress={handleMenualFilter}
                        >
                            <Text style={[styles.btnText, { color: COLORS.white }]}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                textColor={COLORS.gray80}
                onConfirm={(date) => {
                    setOpen(false)
                    setStartDate(formattedDateServer(date))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <DatePicker
                modal
                open={open2}
                date={date}
                mode="date"
                textColor={COLORS.gray80}
                onConfirm={(date) => {
                    setOpen2(false)
                    setEndDate(formattedDateServer(date))
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            />
            {/* ================================== */}

            <Loader
                loading={loadingModal}
                color={COLORS.primary}
                size='large'
                title="Loading..."
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    orderData: state.order.filterData,
    manuallyModal: state.order.manuallyModal,
    loading: state.order.loading,
})

const mapDispatchToProps = {
    GetOrderApi,
    GetSingleOrderApi,
    GetFilterApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
// export default Filter