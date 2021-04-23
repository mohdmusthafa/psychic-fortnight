import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from 'react-navigation';
import { AuthContext } from '../navigation/index';
import { COLORS, FONTS } from '../constants';

function Profile({ navigation }){
    const user = useContext(AuthContext)
    const logoutHandler = async () => {
        try {
            await AsyncStorage.setItem('@login', '');
            user.logout()
        } catch (err) {
            console.log(err)   
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.userEmail}>{user.user.login_email}</Text>
            <Button onPress={logoutHandler} title="LOGOUT" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userEmail: {
        ...FONTS.h2,
        color: COLORS.blue,
        marginBottom: 5
    }
})

export default Profile