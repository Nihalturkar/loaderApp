import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, FlatList, StatusBar, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native'
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants'
import styles from './styles'
import { connect } from 'react-redux'
import RoundedButton from '../../component/Buttons/RoundedButton'
import Icons from '../../component/Icons'
import RazorpayCheckout from 'react-native-razorpay';
import Modal from 'react-native-modal'
import Input1 from '../../component/Inputs/Input1'
import { RNToasty } from 'react-native-toasty'
import { AddAmountApi, GetTransactionApi, WithdrawRequestApi } from '../../redux/actions/bilanceAction'
import NoDataFound from '../../component/NoDataFound'
import { PhonepeCheckoutTouch } from 'react-native-phonepesdk'
import razorpay from '../../services/razorpay'
import { TRANSACTION_DATA } from '../../redux/types'



const TransactionHistory = ({ navigation, userData, GetTransactionApi, transactionData, AddAmountApi, WithdrawRequestApi }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [amount, setAmount] = useState(null)
    const [page, setPage] = useState(1)
    const [paymentSuccessfull, setPaymentSuccessfull] = useState(false)
    const [loadingIndicator, setLoadingIndicator] = useState(false)
    const [downLoading, setDownLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [withdraw, setWithdraw] = useState(false)
    const [withdrawalAmount, setWithdrawalAmount] = useState(null)
    const [withdrawError, setWithdrawError] = useState(null)

    useEffect(() => {
        GetTransactionApi(1)
    }, [])

    const MakePayment = () => {

        var options = {
            description: 'Credits towards consultation',
            image: images.profile,
            currency: 'INR',
            key: 'rzp_live_oBu0N26YqOcvCq', // Your api key 
            // key:"rzp_test_sHuXJaB9QnKnlO", // demo key
            amount: amount * 100,
            name: userData?.userData?.fullName,
            prefill: {
                // email: userData.email,
                contact: userData?.userData?.mobile,
                name: 'Razorpay Software'
            },
            theme: { color: COLORS.primary }
        }
        RazorpayCheckout.open(options).then((data) => {
            // console.log(data.razorpay_payment_id)
            const post = {
                transactionId: data.razorpay_payment_id,
                amount: Number(amount),
                transactionType: "CREDIT",
                type: "ADDMONEYTOWALLET"
            }
            console.log("RazorpayCheckout : ", post, data)
            AddAmountApi(post, (data) => setAmount(data), (data) => setPaymentSuccessfull(data))
            setModalOpen(false)
            setAmount(data)

        }).catch((error) => {
            // alert(`Error: ${error.code} | ${error.description}`);
            setAmount(null)
            setModalOpen(false)
        });
    }

    const onRefresh = () => {
        setIsRefreshing(true)
        GetTransactionApi(1)
        setPage(1)
        setIsRefreshing(false)
    }

    const onSuccessTransaction = (data) => {
        setModalOpen(false)
        // const post = {
        //     transactionId: "data.transactionId",
        //     amount: amount,
        //     transactionType: "CREDIT",
        //     type: "ADDMONEYTOWALLET"
        // }
        // AddAmountApi(post, (data) => setAmount(data), (data) => setPaymentSuccessfull(data))

    }

    console.log("page", page)



    return (
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
            />

            {/* <View style={styles.header}> */}
            <TouchableOpacity
                style={styles.back_btn}
                onPress={() => navigation.goBack()}
            >
                <Icons name={"back"} size={25} color={COLORS.white} />
            </TouchableOpacity>

            {/* </View> */}

            <View style={styles.flex_end}>
                <Text style={styles.bal_text}>Balance</Text>
                <Text style={styles.balance}>₹ {transactionData?.total ? transactionData?.total : "0"}</Text>
            </View>

            <View style={styles.btnMain}>

                <RoundedButton
                    backgroundColor={COLORS.primary}
                    textColor={COLORS.white}
                    // Btnstyle={styles.btn}
                    Btnstyle={styles.btn}
                    width={SIZES.width * .43}

                    onPress={() => setModalOpen(!modalOpen)}
                >
                    Add Money
                </RoundedButton>
                <RoundedButton
                    backgroundColor={COLORS.primary}
                    textColor={COLORS.white}
                    Btnstyle={styles.btn}
                    onPress={() => {
                        if (transactionData?.total <= 0 || !transactionData?.total) {
                            RNToasty.Normal({
                                title: "You are not eligible to withdraw amount"
                            })
                        } else if (userData?.upi) {
                            setWithdraw(!withdraw)
                        } else {
                            RNToasty.Normal({
                                title: "Please add your upi id"
                            })
                            navigation.navigate("MyAccount")
                        }
                    }}
                    width={SIZES.width * .43}
                >
                    Withdraw
                </RoundedButton>
            </View>
            <View style={styles.container1}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Last Transactions</Text>
                </View>

                {/* <View> */}
                {transactionData && transactionData?.data[0] ?
                    <FlatList
                        data={transactionData && transactionData?.data}
                        onRefresh={onRefresh}
                        refreshing={isRefreshing}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.trans_box, index == 0 && { marginTop: SIZES.height * .02 }]}
                                disabled={true}
                            >
                                <View>
                                    <Text style={styles.trans_type}>{item?.transactionType}</Text>
                                    <Text style={styles.trans_id}>{item?.transactionId}</Text>
                                </View>

                                <View>
                                    <View style={styles.status_row}>
                                        <Text style={{ ...styles.status_text, color: item?.transactionType == "CREDIT" ? "#06AF12" : "#FF0000" }}>{item?.transactionType == "CREDIT" ? "+" : "-"}</Text>
                                        <Text style={{ ...styles.text, color: item?.transactionType == "CREDIT" ? "#06AF12" : "#FF0000" }}> {item?.amount}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        key={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={() => {
                            return (
                                < >
                                    {downLoading &&
                                        <ActivityIndicator size={35} color={COLORS.primary} style={{ marginBottom: SIZES.height * .02 }} />
                                    }
                                </>
                            )
                        }}
                        onEndReached={() => {
                            if (transactionData?.data.length >= 20) {
                                if (!downLoading) {
                                    if (page < transactionData?.page) {
                                        GetTransactionApi(page + 1, (data, success) => { setDownLoading(data), success && setPage(page + 1) })
                                    }
                                }
                            }
                        }}
                    />
                    :
                    <NoDataFound name={"Transaction"} />
                }
                {/* </View> */}

            </View>
            <Modal isVisible={modalOpen} backdropOpacity={0.3}
                onBackButtonPress={() => setModalOpen(!modalOpen)}
                onBackdropPress={() => setModalOpen(!modalOpen)}
            >
                <View style={styles.modalMain}>
                    <Text style={styles.enteramtText}>Enter amount </Text>
                    <Input1 style={{ width: SIZES.width * .82, marginTop: SIZES.height * .01 }}
                        placeholder={"Enter Amount"}
                        value={parseInt(amount)}
                        onChangeText={(text) => setAmount(text)}
                        keyboardType={"numeric"}
                    />
                    <View style={styles.modalBtnMain}>
                        <TouchableOpacity style={styles.cancelBtn}
                            onPress={() => setModalOpen(!modalOpen)}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                        {amount > 0 && amount?.length > 0 ?
                            <TouchableOpacity style={[styles.cancelBtn, { backgroundColor: COLORS.primary, borderColor: COLORS.primary }]}
                                onPress={() => {
                                    if (amount) {
                                        MakePayment()
                                        // razorpay(amount, onSuccessTransaction, (data) => {
                                        //     console.log("dataFailed", data)
                                        //     setModalOpen(false)
                                        //     setAmount(null)
                                        // })
                                    } else {
                                        RNToasty.Error({
                                            title: "Enter amount to add balance in your wallet"
                                        })
                                    }

                                }}
                            >
                                <Text style={[styles.btnText, { color: COLORS.white }]}>Add</Text>
                            </TouchableOpacity>

                            // <PhonepeCheckoutTouch style={[styles.cancelBtn, { backgroundColor: COLORS.primary, borderColor: COLORS.primary }]}
                            //     onPress={() => {
                            // if (amount) {
                            //     // setTimeout(() => {
                            //     // setModalOpen(false)
                            //     // }, 2000);
                            //     // MakePayment()
                            // } else {
                            //     RNToasty.Error({
                            //         title: "Enter amount to add balance in your wallet"
                            //     })
                            // }
                            //     }}
                            //     uat={false}
                            //     merchantId={"M12LWDYWPNB3"} //required
                            //     saltKey={"87cc537e-808e-48f0-bb8e-141e1851bc37"} //required
                            //     saltIndex={1} //default "1"
                            //     amount={amount * 100} //required
                            //     callback={"https://loader.co.in/"} //required
                            //     // callback={"https://loader.co.in/api/v1/transaction/addMoneyForDriver/64f6bf3be131379f87506c6a?transactionId=asdffdas&amount=68&transactionType=CREDIT&type=ADDMONEYTOWALLET"} //required
                            //     redirectUrl={"https://loader.co.in/"} //required
                            //     merchantUserId={"USER_ID"} //required
                            //     successCallback={onSuccessTransaction}
                            // errorCallback={(data) => {
                            //     console.log("dataFailed", data)
                            //     setModalOpen(false)
                            //     setAmount(null)

                            // }}
                            // >
                            //     <Text style={[styles.btnText, { color: COLORS.white }]}>Add</Text>
                            // </PhonepeCheckoutTouch>
                            :
                            <View style={[styles.cancelBtn, { backgroundColor: COLORS.gray50 }]}>
                                <Text style={[styles.btnText, { color: COLORS.white }]}>Add</Text>
                            </View>
                        }

                    </View>
                </View>
            </Modal>

            <Modal isVisible={paymentSuccessfull} backdropOpacity={0.3}
                style={{ alignItems: 'center' }}
            >
                <View style={styles.paymentSuccessfullModal}>
                    <Image source={icons.tick} resizeMode='contain' style={styles.tickIcon} />
                    <Text style={styles.addPaymentText}>
                        Payment Successfully !
                    </Text>
                    <Text style={styles.youText}>You are successfully add balance in your wallet</Text>
                    <TouchableOpacity style={styles.doneTouch}
                        activeOpacity={0.5}
                        onPress={() => setPaymentSuccessfull(!paymentSuccessfull)}
                    >
                        <Text style={[styles.btnText, { color: COLORS.white }]}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal isVisible={withdraw} backdropOpacity={0.3} >
                <View style={styles.withdrawMain} >
                    <Text style={styles.withdrawTitle}>Withdraw Request</Text>
                    <Input1 style={{ width: SIZES.width * .82, marginTop: SIZES.height * .01 }}
                        placeholder={"Enter Amount"}
                        value={withdrawalAmount}
                        onChangeText={(text) => {
                            setWithdrawalAmount(text)
                            if (transactionData?.total >= text) {
                                setWithdrawError(null)
                            } else {
                                setWithdrawError("Withdraw amount is must be less than equal to wallet amount *")
                            }
                        }}
                        keyboardType={"numeric"}
                    />
                    {withdrawError &&
                        <Text style={styles.errorText} >{withdrawError}</Text>
                    }
                    <View style={styles.modalBtnMain}>
                        <TouchableOpacity style={styles.cancelBtn}
                            onPress={() => setWithdraw(!withdraw)}
                        >
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.cancelBtn, withdrawalAmount && !withdrawError ? { backgroundColor: COLORS.primary, borderColor: COLORS.primary, flexDirection: 'row' } : { backgroundColor: COLORS.gray20, borderColor: COLORS.gray20, flexDirection: 'row' }]}
                            onPress={() => { WithdrawRequestApi(withdrawalAmount, (data, success) => { setLoadingIndicator(data), success && setWithdraw(!withdraw), setWithdrawalAmount(null) }) }}
                            disabled={withdrawalAmount && !withdrawError ? false : true}
                        >
                            {loadingIndicator &&
                                <ActivityIndicator color={COLORS.white} size={22} style={{ marginRight: SIZES.width * .03 }} />
                            }
                            <Text style={[styles.btnText, { color: COLORS.white }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    transactionData: state.bilance.transactionData,
})

const mapDispatchToProps = {
    GetTransactionApi,
    AddAmountApi,
    WithdrawRequestApi
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)