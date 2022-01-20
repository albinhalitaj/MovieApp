import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import MovieCard from './MovieCard'
import Line from './Line'
import Category from './Category';

function MovieList({movies,category}) {

    const renderLine = () => {
        if(category === 'Up Coming' || category === 'Top Rated') {
            return <Line width={75} /> 
        } else {
            return <Line width={95} /> 
        }
    }

    return (
        <View>
            <Category name={category} />
            {renderLine()}
            <ScrollView style={styles.scrollView} horizontal={true}>
                <View style={{flexDirection: 'row'}}>
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    })
                }
                </View>
            </ScrollView>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
        maxHeight: 230,
        marginLeft: 20
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#373737'
    }
})

export default MovieList
