import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import DiscoverCard from './DiscoverCard'

const genresLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=88e25c44663a2b555750d84d2d4dba2e&language=en-US`;


function DiscoverList({movies}) {

    const [mov, setMov] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const [genres, setGenres] = useState([])
    

    const fetchGenres = () => {
        fetch(genresLink)
        .then((resp) => resp.json())
        .then(data => {
            setGenres(data.genres)
        })
        .catch(err => console.log(err))
        .finally(() => setisLoading(false))
    }

    const combineMovies = () => {
        let movieGen = []
        movies.forEach(movie => {
            movie.genres = [];
            movie.genre_ids.forEach((id) => {
                if (genres.length > 0) {
                    let genreData = genres.filter((x) => x.id === id)
                    movie.genres.push(genreData[0].name);
                }
            })
            movieGen.push(movie);
        });
        setMov(movieGen)
    }

    useEffect(() => {
        fetchGenres()
        combineMovies()   
        setisLoading(false)
    }, [])

    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal={false}>
                {
                    isLoading ? <Text>Loading... from</Text> : (
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
                    )
                }
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
