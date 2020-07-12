import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from './../config/colors';

function ItemSeparator() {
    return (
        <View style={styles.container}></View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#f4fdaa'
    }
});

export default ItemSeparator;