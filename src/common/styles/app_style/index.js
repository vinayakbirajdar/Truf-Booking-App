import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({

    FONT_LIGHT: {
        fontFamily: 'Urbanist-Light'
    },
    FONT_REGULAR: {
        fontFamily: 'Urbanist-Regular'
    },
    FONT_MEDIUM: {
        fontFamily: 'Urbanist-Medium'
    },
    FONT_SEMIBOLD: {
        fontFamily: 'Urbanist-SemiBold'
    },
    FONT_BOLD: {
        fontFamily: 'Urbanist-Bold'
    },
    FONT_EXTRABOLD: {
        fontFamily: 'Urbanist-ExtraBold'
    },
    FONT_BLACK: {
        fontFamily: 'Urbanist-Black'
    },

    lable: {
        fontFamily: 'Urbanist-Bold',
        fontSize: 18,
        color: 'black'
    },
    heading: {
        fontFamily: 'Urbanist-Bold',
        fontSize: 18,
        color: 'black'
    },

    submitBtn: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Urbanist-SemiBold'
    }
});

export default appStyles;