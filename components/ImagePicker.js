import React from 'react';
import { View, StyleSheet } from 'react-native';

import ImageInputList from './ImageInputList';

function ImagePicker(props) {
    return (
        <>
            <ImageInputList />
            <ErrorMessage />
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default ImagePicker;