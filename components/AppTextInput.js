import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function AppTextInput({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="grey" />}
            <TextInput
                autoCapitalize="none"
                style={styles.text}
                placeholder={placeholder}
                placeholderTextColor="grey"
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.medium,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginTop: 5,
        marginRight: 10
    },
    text: {
        fontSize: 18
    }
});

export default AppTextInput;
