import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import SplashScreen from '../screens/SplashScreen';

export const AuthContext = createContext(null);

function AppContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function checkLogin() {
            try {
                const info = await AsyncStorage.getItem("@login");
                const parsedInfo = JSON.parse(info);
                if (parsedInfo.logged_in) {
                    setUser(parsedInfo)
                }
                setIsLoading(false);
            } catch (err) {
                console.log(err)
                setIsLoading(false);
            }
        }

        checkLogin();
    }, [])

    function logout(){
        setUser(null);
    }

    async function login(){
        try {
            const info = await AsyncStorage.getItem("@login");
            const parsedInfo = JSON.parse(info);
            if (parsedInfo.logged_in && parsedInfo.login_email) {
                setUser(parsedInfo)
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (isLoading) {
        return <SplashScreen />
    }
    return user ? 
        <AuthContext.Provider value={{ user, logout }}>
            <AppNavigation />
        </AuthContext.Provider>
     :
     <AuthContext.Provider value={{ login }}>
            <AuthNavigation />
     </AuthContext.Provider> 
}

export default AppContainer;