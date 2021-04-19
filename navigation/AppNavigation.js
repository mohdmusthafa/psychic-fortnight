import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    Home,
    Transactions
} from '../screens'

const Tab = createBottomTabNavigator();

function AppNavigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Transactions" component={Transactions} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;