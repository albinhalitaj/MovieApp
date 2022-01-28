import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Alert, Platform  } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

function MovieCard({movie}) {
    const navigator = useNavigation();

    const alert = (movieName) => {
        Alert.alert(
            "Success",
            `${movieName} has been added to wishlist`,
            [
                {
                    text: 'Ok',
                    cancelable: true,
                },
                {
                    text: 'Wishlist',
                    onPress: () => navigator.navigate('Watchlist')
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => navigator.navigate('MovieDetails',{
            movie
        })}>
            <View style={styles.card}>
                <Image style={styles.poster} source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}} />
                <Pressable style={styles.add} onPress={() => alert(movie.title)}>
                    <Icon style={styles.icon} name="plus" size={19} color='orange' />
                </Pressable>
                <Text 
                    ellipsizeMode='tail' 
                    numberOfLines={2} 
                    style={styles.movieName}>
                        {movie.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
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
        color: 'white',
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
