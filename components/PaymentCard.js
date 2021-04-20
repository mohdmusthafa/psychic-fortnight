import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants/';

function PaymentCard({ icon, type, description, amount }) {
    function renderIcon(icon) {
        return (
            <View style={styles.iconContainer}>
                {icon()}
            </View>
        )
    }
    return (
        <View style={[styles.shadow, styles.card]}>
            {renderIcon(icon)}
            <View style={styles.typeContainer}>
                <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{type}</Text>
                <Text numberOfLines={2} style={{ color: COLORS.lightGray, ...FONTS.body5 }}>{description}</Text>
            </View>
            <Text style={{ color: COLORS.black, ...FONTS.h3, marginLeft: 30, marginTop: 20 }}>{amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        padding: SIZES.padding,
        width: 350,
        borderRadius: 25,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5,

        elevation: 15,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 25,
        backgroundColor: COLORS.transparentGray2,
        marginLeft: 10
    },
    typeContainer: {
        marginLeft: 20,
        flex: 1
    }
})

export default PaymentCard;