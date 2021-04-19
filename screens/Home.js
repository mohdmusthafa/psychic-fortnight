import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants';

function Home(){
    return (
        <View style={{ backgroundColor: COLORS.transparentGray, height: '100%'}}>
            <Text>Home</Text>
        </View>
    )
}

export default Home