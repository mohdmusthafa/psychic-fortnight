import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

import UserCard from '../components/UserCard';

function Home(){
    return (
        <View style={styles.container}>
            <UserCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.transparentGray
    }
})

export default Home