import React, { useState, useEffect } from 'react'
import { StyleSheet,View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import DiscoverList from '../components/DiscoverList';
import Header from '../components/Header'

const genresLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=88e25c44663a2b555750d84d2d4dba2e&language=en-US`;

function Discover() {
    const [discoverMovies, setDiscoverMovies] = useState([])
    const [searchInput, setSearchInput] = useState('venom')
    const [genres, setGenres] = useState([])

    const search = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=88e25c44663a2b555750d84d2d4dba2e&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((resp) => resp.json())
        .then(data => {
            setDiscoverMovies(data.results)
        })
        .catch(err => console.log(err))
    }

    const fetchGenres = () => {
        fetch(genresLink)
        .then((resp) => resp.json())
        .then(data => {
            setGenres(data.genres)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchGenres();
        search(searchInput);
    }, [discoverMovies])

    return (
        <View style={styles.container}>
            <Header name="Discover" />
            <View>
                <Icon style={styles.icon} name='search' size={20} color="white" />
                <TextInput value={searchInput} onSubmitEditing={search} onChangeText={text => setSearchInput(text)} style={styles.input} 
                placeholder="Search Here" placeholderTextColor="white" />
            </View>
            <View>
                {
                    discoverMovies &&
                    genres.length > 0 ? (
                        <DiscoverList movies={discoverMovies} genres={genres} />
                    ) : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#181818',
    },
    input: {
        borderColor: '#373737',
        backgroundColor: '#373737',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        marginLeft: 20,
        height: 40,
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 50,
        fontFamily: 'Bahnschrift-Regular'
    },
    icon: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 35,
        zIndex: 1
    }
})

export default Discover
