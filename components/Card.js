import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function CardComponent({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image}></Image>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden",
        marginBottom: 20
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: "600",
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }


})

export default CardComponent;
