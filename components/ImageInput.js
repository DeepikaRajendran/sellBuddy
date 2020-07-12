import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from './../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageInput({ imageUri, onChangeImage }) {

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted)
            alert("Give Gallery Permission to access Device photos");
    }
    useEffect(() => {
        requestPermission();
    }, []);

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete", "Are you sure to delete the image?",
            [
                {
                    text: "Yes",
                    onPress: () => onChangeImage(null)
                },
                {
                    text: "No",
                }
            ]);
    }

    const selectImage = async () => {
        try {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
            if (!cancelled) onChangeImage(uri);
        } catch (error) {
            console.log("Error Picking image", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={30} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        borderRadius: 15,
        height: 100,
        margin: 10,
        width: 100,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: '100%',
        width: '100%'
    }
});

export default ImageInput;