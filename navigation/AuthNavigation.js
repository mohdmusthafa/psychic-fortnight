import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';

const AuthNavigation = createStackNavigator(
    {
        Login: { screen: Login, navigationOptions: {
            headerShown: false
        } }
    },
    {
        initialRouteName: 'Login'
    }
)

export default AuthNavigation;