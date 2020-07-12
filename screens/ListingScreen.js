import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from './../components/Screen';
import ItemSeparator from './../components/ItemSeparator';
import CardComponent from './../components/Card';

const data = [
    {
        id: 1,
        name: 'Red jacket for Sale',
        price: 100,
        image: require('./../assets/images/jacket.jpg')
    },
    {
        id: 2,
        name: 'Couch for Sale',
        price: 500,
        image: require('./../assets/images/couch.jpg')
    },
    {
        id: 3,
        name: 'Chair',
        price: 50,
        image: require('./../assets/images/chair.jpg')
    }
];
export default function ListingScreen({ navigation }) {
    return (
        <Screen style={styles.container}>
            <FlatList
                style={styles.flatListContainer}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardComponent
                        title={item.name}
                        subTitle={`$${item.price}`}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)} />
                )
                }
                ItemSeparatorComponent={ItemSeparator} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContainer: {
    }
});
