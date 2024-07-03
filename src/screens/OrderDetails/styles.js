import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'


export default StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: COLORS.white
    },

    mapImage: {
        width: SIZES.width,
        height: SIZES.height * .27
    },


    timePrizeMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: SIZES.height * .015
    },
    dateTimeText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -1,
        fontSize: 13
    },
    crnText: {
        color: COLORS.gray50,
        fontFamily: FONTS.regular,
        fontSize: 12.5,
        marginBottom: -3
    },
    mainPriceText: {
        color: COLORS.gray80,
        fontFamily: FONTS.medium,
        marginBottom: -3
    },


    horizontalLine: {
        width: '100%',
        height: 1.3,
        backgroundColor: "#D0D0D0"
    },


    loc_row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: SIZES.width * .032,
        height: SIZES.width * .032,
        borderRadius: 70,
        backgroundColor: "#47BB1E",
        marginRight: SIZES.width * .02,
    },

    vt_line: {
        height: SIZES.height * .025,
        borderLeftWidth: 1.1,
        borderStyle: 'dotted',
        borderColor: COLORS.black,
        marginLeft: 6,

    },
    location: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        color: COLORS.gray70,
        marginBottom: -4,
    },
    fareDetailsText: {
        color: COLORS.gray40,
        fontFamily: FONTS.medium,
        fontSize: 13,
    },
})