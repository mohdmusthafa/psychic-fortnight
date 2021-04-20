import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLORS, FONTS } from '../constants/';

function HomeOverviewHeader() {
    const [pendingNotifications, setPendingNotifications] = useState(true);
    return (
        <View style={styles.overviewHeader}>
            <View style={styles.overviewTitle}>
                <Text style={{ marginRight: 15, ...FONTS.h2, fontSize: 24, color: COLORS.blue }}>Overview</Text>
                <TouchableOpacity onPress={() => setPendingNotifications(state => !state)}>
                    <Fontisto name="bell" size={24} />
                    { pendingNotifications ? <View style={styles.notificationsBadge} /> : null}
                </TouchableOpacity>
            </View>
            <View style={styles.overviewDate}>
                <Text style={{ color: COLORS.blue, ...FONTS.body4 }}>Sept 13, 2020</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    overviewTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    overviewDate: {
        marginHorizontal: 60
    },
    notificationsBadge: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: 25,
        position: 'absolute',
        top: '10%',
        left: '60%'
    }
})

export default HomeOverviewHeader;