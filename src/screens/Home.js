import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Loader from '../components/Loader';


const apiKey = '88e25c44663a2b555750d84d2d4dba2e';
const baseUrl = 'https://api.themoviedb.org/3/movie';

function Home() {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcommingMovies, setupcomingMovies] = useState([])
    const [topRatedMovies, settopRatedMovies] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const fetchNowPlaying = () => {
        fetch(`${baseUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then((resp) => resp.json())
        .then(data => {
            setNowPlayingMovies(data.results)
        })
        .catch(err => console.log(err))
        .finally(() => setisLoading(false)) 
    }

    const fetchPopular = () => {
        fetch(`${baseUrl}/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((resp) => resp.json())
        .then(data => {
            setupcomingMovies(data.results)
        })
        .catch(err => console.log(err))
        .finally(() => setisLoading(false)) 
    }

    const fetchTopRated = () => {
        fetch(`${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then((resp) => resp.json())
        .then(data => {
            settopRatedMovies(data.results)
        })
        .catch(err => console.log(err))
        .finally(() => setisLoading(false)) 
    }

    useEffect(() => {
       setTimeout(() => {
        fetchNowPlaying();
        fetchTopRated();
        fetchPopular();
       }, 2900);
    }, [])

    return (
        <View style={styles.container}>
            {
                !isLoading ? (
                    <>
                        <Header name="Home" icon="home" />
                        <ScrollView horizontal={false}>
                        {
                            nowPlayingMovies.length > 0 && 
                            upcommingMovies.length > 0 && 
                            topRatedMovies.length > 0  &&
                            <View>
                                <MovieList movies={nowPlayingMovies} category="Now Playing" />
                                <View style={{marginTop: 20}}></View>
                                <MovieList movies={upcommingMovies} category="Up Coming" />
                                <View style={{marginTop: 20}}></View>
                                <MovieList movies={topRatedMovies} category="Top Rated" />
                                <View style={{marginBottom: 20}}></View>
                            </View>
                        } 
                        </ScrollView>
                    </>
                ) : <Loader />
            }
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
