import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MyAccountScreen from './../screens/MyAccountScreen';
import ListingEditScreen from './../screens/ListingEditScreen';
//import ListingScreen from './../screens/ListingScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "tomato",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black"
        }}>
        <Tab.Screen
            name="Feed"
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" color={color} size={size} />
            }}></Tab.Screen>
        <Tab.Screen
            name="Edit"
            component={ListingEditScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="pencil" color={color} size={size} />
            }}></Tab.Screen>
        <Tab.Screen
            name="Account"
            component={MyAccountScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" color={color} size={size} />
            }}></Tab.Screen>
    </Tab.Navigator>
);

export default AppNavigator;