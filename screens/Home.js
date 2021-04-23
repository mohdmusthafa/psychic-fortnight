import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

import UserCard from '../components/UserCard';
import HomeOverviewHeader from '../components/HomeOverviewHeader';
import Payments from '../components/Payments';

function Home({ navigation }){

    function showRecentTransactions(){
        navigation.navigate("Transactions")
    }
    return (
        <View style={styles.container}>
            <UserCard />
            <HomeOverviewHeader showRecentTransactions={showRecentTransactions} />
            <Payments />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.transparentGray,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width
    }
})

export default Home