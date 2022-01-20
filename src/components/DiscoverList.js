import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import DiscoverCard from './DiscoverCard'

function DiscoverList({movies,genres}) {

    const [mov, setMov] = useState([])

    useEffect(() => {
        let movieGen = []
        movies.forEach(movie => {
            movie.genres = [];
            movie.genre_ids.forEach((id) => {
                let genreData = genres.filter((x) => x.id === id)
                movie.genres.push(genreData[0].name);
            })
            movieGen.push(movie);
        });
        setMov(movieGen)
    }, [])

    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal={false}>
            <View style={{flexDirection: 'column'}}>
            {
                mov.length > 0 && genres.length > 0 ? (
                    mov.map((movie,index) => {
                        return (
                            <DiscoverCard key={index} movie={movie} />
                        )
                    })
                ) : null
            }
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
        marginLeft: 20,
    },
})

export default DiscoverList
