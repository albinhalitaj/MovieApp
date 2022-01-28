import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Platform } from 'react-native'
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getNowPlaying,getTopRated,getUpComming } from '../redux/actions';

function Home() {

    const {nowPlayingMovies,upCommingMovies,topRatedMovies} = useSelector(state => state.appReducer)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getNowPlaying())
        dispatch(getTopRated())
        dispatch(getUpComming())

    }, [])

    return (
        <View style={styles.container}>
            <>
                <Header name="Home" icon="home" />
                <ScrollView horizontal={false}>
                    <View>
                        {
                            nowPlayingMovies && 
                            <>
                                <MovieList movies={nowPlayingMovies} category="Now Playing" />
                                <View style={{marginTop: 20}}></View> 
                            </>
                        }
                        {
                            upCommingMovies &&  
                            <>
                                <MovieList movies={upCommingMovies} category="Up Coming" />
                                <View style={{marginTop: 20}}></View> 
                            </>
                        }
                        {
                            topRatedMovies && 
                            <>
                                <MovieList movies={topRatedMovies} category="Top Rated" />
                                <View style={{marginBottom: 20}}></View>
                            </>
                        }
                    </View>
                </ScrollView>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#181818',
    }
})

export default Home
