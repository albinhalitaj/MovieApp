import React, { useEffect,useContext,useState } from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import {useSelector} from 'react-redux'
import { Color } from '../constants/Color';
import { ThemeContext } from '../utils/ThemeManager';

function Watchlist({navigation}) {

    const {favoriteMovies} = useSelector(state => state.appReducer);
    const {theme} = useContext(ThemeContext)
    
    return (
        favoriteMovies === null || favoriteMovies.length <= 0 ? ( 
        <SafeAreaView style={styles(theme).emptyList}>
            <Text style={styles(theme).watchlist}>
                Your Watch list is empty!
            </Text> 
            <TouchableOpacity android_ripple={{
                radius: 20,
                width: '150'
            }} style={styles(theme).button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles(theme).browse}>Browse More</Text>
            </TouchableOpacity>
        </SafeAreaView>
        ) : (
            <ScrollView horizontal={false} style={styles(theme).container}>
                <Text style={styles(theme).title}>Your watchlist</Text>
                <View style={styles(theme).wrapper}>
                    {
                        favoriteMovies.map((movie,index) => {
                            return (
                                <View style={{marginTop: 20}} key={index}>
                                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails',{
                                        movie
                                    })}>
                                        <Image style={styles(theme).poster} source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    )
}

const styles = (theme) => StyleSheet.create({
    emptyList: {
        backgroundColor: theme === 'dark' ? Color.dark : Color.light,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme === 'dark' ? Color.light : Color.dark,
        fontFamily: 'Bahnschrift-Regular',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20
    },
    container: {
        backgroundColor: theme === 'dark' ? Color.dark : Color.light,
        height: '100%'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        flexWrap: 'wrap'
    },
    watchlist: {
        color: theme === 'dark' ? Color.lightGray : Color.darkGray,
        fontSize: 20,
        fontFamily: 'Bahnschrift-Regular'
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 150,
        height: 35
    },
    browse: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    },
    poster: {
        width: 115,
        height: 170,
        margin: 5,
        borderRadius: 5 
    }
})

export default Watchlist
