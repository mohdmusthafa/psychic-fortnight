import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, images, SIZES } from '../constants/'

function UserCard() {
    return (
        <View style={[styles.shadow, styles.card]}>
            <View style={styles.navigationOptions}>
                <MaterialIcons name="short-text" size={28} color={COLORS.blue} />
                <Feather name="search" size={28} color={COLORS.blue} />
            </View>
            <View style={styles.imageContainer}>
                <Image source={images.user} style={{ marginBottom: 20 }} />
                <Text style={{ color: COLORS.blue, ...FONTS.h1 }}>Hira Riaz</Text>
                <Text style={{ ...FONTS.h4 }}>UX/UI Designer</Text>
            </View>
            <View style={styles.spendingContainer}>
                <View style={styles.spendingSummary}>
                    <Text style={styles.spendingAmount}>$ 8900</Text>
                    <Text style={styles.spendingSource}>Income</Text>
                </View>
                <Image source={images.vertical_line} style={styles.splitterLine} />
                <View style={styles.spendingSummary}>
                    <Text style={styles.spendingAmount}>$ 5500</Text>
                    <Text style={styles.spendingSource}>Expense</Text>
                </View>
                <Image source={images.vertical_line} style={styles.splitterLine} />
                <View styles={styles.spendingSummary}>
                    <Text style={styles.spendingAmount}>$ 890</Text>
                    <Text style={styles.spendingSource}>Loan</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        marginHorizontal: SIZES.padding,
        marginVertical: 20,
        padding: SIZES.padding,
        width: 350,
        borderRadius: 30,
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
    navigationOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    spendingContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    spendingSummary: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    splitterLine: {
        height: 60,
    },
    spendingAmount: {
        ...FONTS.h3,
        color: COLORS.blue
    },
    spendingSource: {
        ...FONTS.body4,
        color: COLORS.lightGray
    }
})

export default UserCard;