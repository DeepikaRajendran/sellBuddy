import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import colors from '../../config/colors';

function ErrorMessage({ error }) {
    if (!error) return null;
    return (
        <AppText style={styles.errorText} title={error} />
    );
}

const styles = StyleSheet.create({
    errorText: {
        color: colors.red
    }
});

export default ErrorMessage;