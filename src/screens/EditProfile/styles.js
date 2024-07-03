import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
   
    userProfile:{
        width: width * .32,
        height: width * .32,
        borderRadius: 100,
    },
    userProfileBox:{
       
        overflow:'hidden',
        // borderWidth: 1,
    },
    profileBox:{
        alignItems:'center',
        marginVertical: height * .03,
    },
    Edit:{
        width: width * .06,
        height: height * .03,
        position:'absolute',
        right:7,
        bottom: height * .015,
        // tintColor:'red',
    },
    formContainer: {
        marginLeft: width * .03,
        marginRight: width * .03,
        paddingLeft: width * .03,
        paddingRight: width * .03,
        paddingBottom: height * .02,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
    },

    row1: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: height * .02,
    },
    input1: {
        width: width * .42,
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
        paddingLeft: width * .04,
    },
    input: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A7A7A7',
        backgroundColor: COLORS.white,
        paddingLeft: width * .04,
        marginTop: height * .02,
    },
    label: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        marginTop: height * .03,
    },
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    BtnRow:{
        flexDirection: 'row',
        marginTop: height * .03,
        alignItems:'center',
    },
    btn:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#A7A7A7',
        width: width * .2,
        height: height * .06,
        alignItems:"center",
        justifyContent: 'center',
        marginRight: width * .02,
    },
    btnTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color:'#A7A7A7',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 18,
        color: '#A7A7A7',
    },
   addBtn:{
        height: height * .07,
        borderRadius:7,
        marginTop: height * .03,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.primary,
        flexDirection:'row',
        
    },
   addBtnText:{
        fontFamily: 'Poppins SemiBold 600',
        color: COLORS.white,
        fontSize: 16,
        lineHeight: 21,
    },
})