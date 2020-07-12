import * as React from 'react';
import { Image, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';

import AppButton from './../components/AppButton';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background} blurRadius={3} source={require('./../assets/images/background.jpg')} >
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={require('./../assets/images/logo-red.png')}></Image>
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Login'} onPress={() => navigation.navigate("Login")} />
        <AppButton title={'Register'} color="secondary" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%'
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20
  },
  image: {
    width: 100,
    height: 100,
  },
});
