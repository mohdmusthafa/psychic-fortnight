import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { images } from '../constants';

function SplashScreen(){
    return (
        <View style={styles.container}>
            <Image source={images.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen