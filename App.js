import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigators/AuthNavigator';
import AppNavigator from './navigators/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
