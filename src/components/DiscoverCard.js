import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

function DiscoverCard({movie}) {
    const navigator = useNavigation();

    return (
        <View>
            <View key={movie.id} style={styles.card}>
                <ImageBackground style={styles.poster} imageStyle={styles.backgroundStyle} source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}} />
                <Pressable style={styles.add} onPress={() => navigator.navigate('Watchlist')}>
                    <Icon style={styles.icon} name="plus" size={19} color='orange' />
                </Pressable>
                <Text 
                    ellipsizeMode='tail' 
                    numberOfLines={2} 
                    style={styles.movieName}>
                        {movie.title}
                </Text>
                <Text style={styles.genres}>
                    { movie.genres.map((genre,index) => {
                        return (
                            <Text key={index}>{genre} / </Text>
                        )
                    }) }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        flex: 1,
        position: 'relative',
        width: 348,
        height: 150
    },
    movieName: {
        zIndex: 1,
        color: 'white',
        position: 'absolute',
        bottom: 0,
        fontSize: 15,
        paddingLeft: 10,
        paddingBottom: 30
    },
    icon: {
        paddingTop: 1,
        paddingLeft: 2,
    },
    backgroundStyle: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        bottom: '45%',
        borderRadius: 10
    },
    add: {
        position: 'absolute',
        marginTop: 2,
        marginRight: 5,
        width: 25,
        height: 25,
        backgroundColor: '#373737',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        top: 0,
        right: 0
    },
    card: {
        width: 348,
        height: 150,
        borderRadius: 10,
        marginLeft: 3,
        marginTop: 15
    },
    genres: {
        color: 'white',
        paddingBottom: 12,
        fontSize: 12,
        paddingLeft: 10
    },
})

export default DiscoverCard
