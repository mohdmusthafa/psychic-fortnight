import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../constants';

function PlusIcon({ size, color }) {
    return (
        <View style={{
            backgroundColor: COLORS.blue,
            height: 45,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
        }}>
            <AntDesign name="plus" size={size} color="white" />
        </View>
    )
}

export default PlusIcon