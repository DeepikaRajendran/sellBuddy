import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Icon from './../components/Icon';
import colors from './../config/colors';
import ItemSeparator from './../components/ItemSeparator';
import Screen from './../components/Screen';

const menuItems = [
    {
        id: 1,
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: 'primary'
        }
    },
    {
        id: 2,
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: 'secondary'
        }
    }
];
function MyAccountScreen() {
    return (
        <Screen style={styles.container}>
            <View>
                <ListItem title="Deepika Rajendran" subTitle="depikarajendran@gmail.com"
                    image={require('./../assets/images/deepika.png')} />
                <FlatList
                    style={styles.flatListContainer}
                    data={menuItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        IconComponent={<Icon name={item.icon.name} backgroundColor={colors[item.icon.backgroundColor]} />}
                    />}
                    ItemSeparatorComponent={ItemSeparator} />
                <ListItem
                    title="Logout"
                    IconComponent={<Icon name="logout" backgroundColor='#ffe66d' />} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatListContainer: {
        marginTop: 20,
        marginBottom: 20
    }
});

export default MyAccountScreen;


