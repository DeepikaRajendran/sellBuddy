import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from '../screens/MyAccountScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    </Stack.Navigator>
}

export default AccountNavigator;
