import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    center_box: {
        alignItems: 'center'
    },
    
    contentBox:{
      width: SIZES.width * .9,
      alignItems: 'center',
      marginTop: SIZES.height * .02,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.black,
    },
   
  
 


})