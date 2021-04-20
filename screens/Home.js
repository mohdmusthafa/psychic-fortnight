import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

import UserCard from '../components/UserCard';
import HomeOverviewHeader from '../components/HomeOverviewHeader';
import Payments from '../components/Payments';

function Home(){
    return (
        <View style={styles.container}>
            <UserCard />
            <HomeOverviewHeader />
            <Payments />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.transparentGray,
        marginHorizontal: SIZES.padding + 8,
        width: '100%'
    }
})

export default Home