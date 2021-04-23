import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLORS, FONTS } from '../constants/';

function HomeOverviewHeader({ showRecentTransactions }) {
    const [pendingNotifications, setPendingNotifications] = useState(true);


    function notificationHandler(){
        setPendingNotifications(false);
        showRecentTransactions();
    }

    return (
        <View style={styles.overviewHeader}>
            <View style={styles.overviewTitle}>
                <Text style={{ marginRight: 15, ...FONTS.h2, fontSize: 24, color: COLORS.blue }}>Overview</Text>
                <TouchableOpacity onPress={notificationHandler}>
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
    },
    overviewTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30
    },
    overviewDate: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 30
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