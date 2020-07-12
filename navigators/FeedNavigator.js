import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from './../screens/ListingScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listing" component={ListingScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="ListingDetails" component={ListingDetailScreen}></Stack.Screen>
    </Stack.Navigator>
);
export default FeedNavigator;
