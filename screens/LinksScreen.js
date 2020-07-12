import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './../config/colors';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.openIcon}>
        <MaterialCommunityIcons name="delete" color="red" size={30} />
      </View>
      <Image style={styles.image} resizeMode="contain" source={require('./../assets/images/chair.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 30
  },
  openIcon: {
    position: 'absolute',
    top: 20,
    right: 30
  }
});
