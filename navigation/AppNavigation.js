import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PlusIcon from '../components/PlusIcon';

import {
    Home,
    Transactions,
    Profile
} from '../screens'
import { COLORS } from '../constants';

const HomeStack = createStackNavigator();

function HomeStackScreen(){
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Transactions" component={Transactions} />
        </HomeStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function ComingSoon() {
    return (
        <View>
            <Text>Coming Soon!</Text>
        </View>
    )
}

function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: COLORS.blue,
                    style: {
                        borderTopWidth: 0,
                        elevation: 0,
                        backgroundColor: COLORS.transparentGray
                    }
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case "Home":
                                iconName = "home"
                                break;
                            case "Cards":
                                iconName = "creditcard"
                                break;
                            case "Add":
                                iconName = "plus";
                                break;
                            case "Money":
                                iconName = "dollar";
                                break;
                            case "Profile":
                                iconName = "user"
                                break;
                            default:
                                iconName = ""
                        }

                        switch (iconName) {
                            case "home":
                                return <Ionicons name="home" size={size} color={color} />
                            case "creditcard":
                                return <AntDesign name="creditcard" size={size} color={color} />
                            case "plus":
                                return <PlusIcon name="plus" size={size} color={color} />
                            case "dollar":
                                return <FontAwesome name="dollar" size={size} color={color} />
                            case "user":
                                return <EvilIcons name="user" size={size} color={color} />
                            default:
                                break;
                        }
                    },
                    tabBarLabel: () => null,
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Cards" component={ComingSoon} />
                <Tab.Screen name="Add" component={ComingSoon} />
                <Tab.Screen name="Money" component={ComingSoon} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;