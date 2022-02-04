import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../constants/Color';
import { ThemeContext } from '../utils/ThemeManager';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useSelector, useDispatch} from 'react-redux'
import {setFavoriteMovies} from '../redux/actions'


function MovieCard({movie}) {
    const navigator = useNavigation();
    const {theme} = useContext(ThemeContext)

    const {favoriteMovies} = useSelector(state => state.appReducer)

    const dispatch = useDispatch()

    const handleOnPress = async () => {
        let favorites = favoriteMovies
        if  (favorites === null){
            favorites = []
        }
        if (isFavorited) {
            favorites = favorites.filter((mov) => mov.id !== movie.id)
        }else{
            favorites.push(movie)
        }
        await AsyncStorage.setItem("watchlist",JSON.stringify(favorites))
        dispatch(setFavoriteMovies(favorites))
    }

    const isFavorited = favoriteMovies != null ? favoriteMovies.some(mov => mov.id === movie.id) : false
    
    return (
        <TouchableWithoutFeedback onPress={() => navigator.navigate('MovieDetails',{
            movie
        })}>
            <View style={styles(theme).card}>
                <Image style={styles(theme).poster} source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}} />
                <Pressable style={styles(theme).add} onPress={handleOnPress}>
                    <Icon style={styles(theme).icon} name={isFavorited ? 'check' : 'plus'} size={19} color='orange' />
                </Pressable>
                <Text 
                    ellipsizeMode='tail' 
                    numberOfLines={2} 
                    style={styles(theme).movieName}>
                        {movie.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = (theme) => StyleSheet.create({
    card: {
        marginLeft: 0,
        marginTop: 10,
        margin: 10
    },
    poster: {
        width: 115,
        height: 160,
        borderRadius: 5,
    },
    movieName: {
        width: 100,
        height: 35,
        color: theme === 'dark' ? Color.light : Color.dark,
        fontFamily: 'Bahnschrift-Regular',
        marginTop: 10,
        marginLeft: 5
    },
    add: {
        position: 'absolute',
        marginTop: 2,
        marginRight: 2,
        width: 25,
        height: 25,
        backgroundColor: '#373737',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        top: 0,
        right: 0
    },
    icon: {
        paddingTop: 1,
        paddingLeft: 2,
    }
})

export default MovieCard
