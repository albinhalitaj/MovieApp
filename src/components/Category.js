import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from '../constants/Color';
import { ThemeContext } from '../utils/ThemeManager';

function Category({name}) {
    const navigation = useNavigation();

    const {theme} = useContext(ThemeContext)

    const genre = () => {
        if (name === 'Up Coming') {
            return 'upcoming'
        } else if (name === 'Top Rated'){
            return 'top_rated'
        } else {
            return 'now_playing'
        }
    }
    
    return (
        <View style={styles(theme).category}>
            <Text style={styles(theme).categoryName}>
                {name}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ViewAll',{
                genre: genre()
            })}>
                <Text style={styles(theme).seeAll}>See all</Text>   
            </TouchableOpacity>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    category: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seeAll: {
        color: theme === 'dark' ? Color.orange : Color.dark,
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
        color: theme === 'dark' ? Color.lightGray : Color.dark,
        textTransform: 'uppercase',
        fontFamily: 'Bahnschrift-Regular',
        marginLeft: 30,
        fontSize: 15,
    },
})

export default Category
