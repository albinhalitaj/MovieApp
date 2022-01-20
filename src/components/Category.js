import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function Category({name}) {
    const navigation = useNavigation();

    return (
        <View style={styles.category}>
            <Text style={styles.categoryName}>
                {name}
            </Text>
            <Pressable onPress={() => navigation.navigate('Watchlist')}>
                <Text style={styles.seeAll}>See all</Text>   
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seeAll: {
        color: 'orange',
        marginRight: 10,
        width: 55,
        paddingLeft: 7,
        paddingTop: 1,
        borderRadius: 2,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 12,
        height: 18,
        fontFamily: 'Bahnschrift-Regular'
    },
    categoryName: {
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'Bahnschrift-Regular',
        marginLeft: 30,
        fontSize: 15,
    },
})

export default Category
