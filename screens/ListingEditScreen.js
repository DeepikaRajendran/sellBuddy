import React from 'react';
import { StyleSheet } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from './../components/Screen';

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppTextInput
                placeholder="Email"
                placeholderTextColor="grey"
                textalign="center"
                style={styles.container}
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    }
});

export default ListingEditScreen;