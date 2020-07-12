import React from 'react';
import { Text } from 'react-native';

function AppText({ title, style }) {
    return (
        <Text style={[style]}>{title}</Text>
    );
}

export default AppText;
