import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

function Profile({ navigation }){
    const logoutHandler = async () => {
        try {
            await AsyncStorage.setItem('@login', '');
            // navigation.navigate("Auth")
            navigation.dispatch((state) => {
                console.log(state.routes)
            })
        } catch (err) {
            console.log(err)   
        }
    }
    return (
        <View style={styles.container}>
            <Button onPress={logoutHandler} title="LOGOUT" />
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

export default Profile