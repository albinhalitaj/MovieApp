import React, { useEffect, useContext } from 'react'
import { ScrollView, StyleSheet, View, Platform, ActivityIndicator, Text } from 'react-native'
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getNowPlaying,getTopRated,getUpComming } from '../redux/actions';
import { ThemeContext } from '../utils/ThemeManager';
import { Color } from '../constants/Color';

function Home() {

    const {nowPlayingMovies,upCommingMovies,topRatedMovies} = useSelector(state => state.appReducer)

    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext)

    useEffect(() => {

        dispatch(getNowPlaying())
        dispatch(getTopRated())
        dispatch(getUpComming())

    }, [])

    return (
        <View style={styles(theme).container}>
            <>
                <Header name="Home" icon="home" />
                {
                    nowPlayingMovies.length > 0 && 
                    upCommingMovies.length > 0 &&
                    topRatedMovies.length > 0 ? (
                        <ScrollView horizontal={false} style={{marginTop: 20}}>
                            <View>
                                <MovieList movies={nowPlayingMovies} category="Now Playing" />
                                <View style={{marginTop: 20}}></View> 

                                <MovieList movies={upCommingMovies} category="Up Coming" />
                                <View style={{marginTop: 20}}></View> 

                                <MovieList movies={topRatedMovies} category="Top Rated" />
                                <View style={{marginBottom: 20}}></View>
                            </View>
                        </ScrollView>
                    ) : (
                        <View style={styles(theme).activity}>
                            <ActivityIndicator size="large"  />
                            <Text style={styles(theme).loading}>Loading...</Text>
                        </View>
                    )
                }
            </>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: theme === 'dark' ? Color.dark : Color.light,
    },
    activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        paddingTop: 15,
        paddingLeft: 10,
        color: theme === 'dark' ? '#008577' : Color.darkGray 
    }
})

export default Home
