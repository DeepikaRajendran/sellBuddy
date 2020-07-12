import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from './../config/colors';
import AppText from './../components/AppText';
import ListItem from './../components/ListItem';

export default function ListingDetailScreen({ navigation, route }) {
    const { name, price, image } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>

            <View style={styles.detailsContainer}>
                <AppText title={name} style={styles.title}></AppText>
                <AppText title={`$${price}`} style={styles.subTitle}></AppText>
            </View>
            <View>
                <ListItem image={require('./../assets/images/deepika.png')}
                    title="Deepika"
                    subTitle="5 Listings" />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8
    },
    subTitle: {
        fontSize: 16,
        color: colors.secondary,
        fontWeight: "bold",
    }
});