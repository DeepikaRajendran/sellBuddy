import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from './../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, image, IconComponent }) {
    return (
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} title={title} />
                {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10
    },
    detailsContainer: {
        paddingLeft: 10,
        justifyContent: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
    },
    subTitle: {
        fontWeight: '500',
        color: colors.grey
    }
});


export default ListItem;