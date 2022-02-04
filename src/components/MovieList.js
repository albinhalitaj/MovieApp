import React, { useContext } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import MovieCard from './MovieCard'
import Line from './Line'
import Category from './Category';
import { ThemeContext } from '../utils/ThemeManager';
import { Color } from '../constants/Color';

function MovieList({movies,category}) {

    const {theme} = useContext(ThemeContext)

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
            <ScrollView style={styles(theme).scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <View style={styles(theme).line}></View>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    scrollView: {
        marginTop: 10,
        maxHeight: 230,
        marginLeft: 20
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: theme === 'dark' ? '#373737' : Color.darkGray
    }
})

export default MovieList
