import icons from "./icons"
import images from "./images"


const NotificationData = [
    {
        id: 1,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 2,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 3,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 4,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 5,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 6,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 7,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
    {
        id: 8,
        title: 'New collection alert',
        content: 'New collection has been added',
    },
];

const EarningData = [
    {
        id: 1,
        place: "Inderapuri Bhopal",
        amount: "1103.0",
        status: "credit",
        time: "11:40 AM",
    },
    {
        id: 2,
        place: "Inderapuri Bhopal",
        amount: "1103.0",
        status: "credit",
        time: "11:40 AM",
    },
    // {
    //     id: 3,
    //     place: "Inderapuri Bhopal",
    //     amount: "1103.0",
    //     status: "debit",
    //     time: "11:40 AM",
    // },
]

const RangeData = [
    {
        id: 1,
        total: 13,
        title: "Today’s Order"
    },
    {
        id: 2,
        total: 400,
        title: "Today’s Earning"
    },
    {
        id: 3,
        total: 3,
        title: "Running Order"
    },
    {
        id: 4,
        total: 3,
        title: "Complete Order"
    },
]

const OrderData = [
    {
        id: 1,
        orderId: "Order # 5652",
        date: "10 Oct, 2021",
        status: "delivered", 
        amount: "Rs. 100",
    },
    {
        id: 2,
        orderId: "Order # 5652",
        date: "10 Oct, 2021",
        status: "delivered", 
        amount: "Rs. 100",
    },
    {
        id: 3,
        orderId: "Order # 5652",
        date: "10 Oct, 2021",
        status: "delivered", 
        amount: "Rs. 100",
    },
    {
        id: 4,
        orderId: "Order # 5652",
        date: "10 Oct, 2021",
        status: "delivered", 
        amount: "Rs. 100",
    },
]

const TransactionHistory = [
    {
        id: 1,
        type: "RE-CHARGE",
        amount: "$100",
        status: "debit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 2,
        type: "ONLINE SHOP",
        amount: "$100",
        status: "debit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 3,
        type: "RE-CHARGE",
        amount: "$100",
        status: "credit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 4,
        type: "ONLINE SHOP",
        amount: "$100",
        status: "credit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 5,
        type: "KFC",
        amount: "$10",
        status: "debit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 6,
        type: "KFC",
        amount: "$10",
        status: "debit",
        transactionId: "012978xxxxxxx",
    },
    {
        id: 7,
        type: "RE-CHARGE",
        amount: "$10",
        status: "debit",
        transactionId: "012978xxxxxxx",
    },
]

export default {
    OrderData,
    NotificationData,
    EarningData,
    RangeData,
    TransactionHistory,
}