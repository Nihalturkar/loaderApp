
import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    helpCont: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    supportIcon: {
        width: SIZES.width * .4,
        height: SIZES.width * .4,
        marginTop: SIZES.height * .03
    },
    callIcon: {
        width: width *.13,
        height:width*.13
    },
    touch:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:SIZES.height*.05
    },
    titleText:{
        color:COLORS.gray80,
        fontSize:SIZES.width*.04,
        fontFamily:FONTS.medium,
        marginBottom:-5
    },
    subTitleText:{
        color:COLORS.gray40,
        fontSize:SIZES.width*.03,
        fontFamily:FONTS.regular
    }
})