import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images, COLORS, FONTS, SIZES } from '../constants'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './SplashScreen';

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkLogin(){
            try {
                const info = await AsyncStorage.getItem("@login");
                const parsedInfo = JSON.parse(info);
                if(parsedInfo.logged_in){
                    setIsLoading(false);
                    navigation.navigate("App")
                }

                setIsLoading(false);
            } catch (err) {
                console.log(err)
            }
        }

        checkLogin();
    }, [])
    const submitLogin = async () => {
        try {
            const info = JSON.stringify({
                logged_in: true,
                login_email: email,
                logged_in_time: Date.now().toString()
            })
            await AsyncStorage.setItem('@login', info);
            navigation.navigate("App")
        } catch (err) {
            console.log(err)
        }
    }

    if(isLoading){
        return <SplashScreen />
    }
    return (
        <View style={styles.container}>
            <Image source={images.logo} />

            <View style={{ marginTop: 50 }}>
                <View style={[styles.shadow, styles.inputCard]}>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <View style={styles.inputFieldSection}>
                        <Feather name="mail" size={16} style={styles.inputIcon} />
                        <TextInput style={styles.inputField} onChangeText={setEmail} placeholderTextColor="#000000" placeholder="Username@gmail.com" />
                    </View>
                </View>
                <View style={[styles.shadow, styles.inputCard, { marginTop: 25 }]}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <View style={styles.inputFieldSection}>
                        <Ionicons name="lock-closed-outline" size={16} style={styles.inputIcon} />
                        <TextInput secureTextEntry={true} onChangeText={setPassword} style={styles.inputField} placeholderTextColor="#000000" placeholder="Password" />
                    </View>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={submitLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity>
                        <Text style={styles.optionsText}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.optionsText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.transparentGray
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.40,
        shadowRadius: 5,

        elevation: 15,
    },
    inputCard: {
        flexDirection: 'column',
        marginHorizontal: SIZES.padding,
        padding: SIZES.padding,
        height: 90,
        width: 350,
        borderRadius: 30,
        backgroundColor: COLORS.white
    },
    loginButton: {
        marginHorizontal: SIZES.padding,
        height: 60,
        width: 350,
        borderRadius: 30,
        backgroundColor: COLORS.blue,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTitle: {
        ...FONTS.body3,
        color: COLORS.lightGray
    },
    inputFieldSection: {
        // flex: 1,/
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: -10,
    },
    inputIcon: {
        padding: 10
    },
    inputField: {
        ...FONTS.body3,
        color: COLORS.black,
        width: 300
    },
    loginText: {
        color: COLORS.white,
        ...FONTS.h3
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    optionsText: {
        color: COLORS.lightGray
    }
})

export default Login