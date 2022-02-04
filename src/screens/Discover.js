import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet,View, TextInput, Text, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import DiscoverList from '../components/DiscoverList';
import Header from '../components/Header'
import {useSelector} from 'react-redux'
import { ThemeContext } from '../utils/ThemeManager';
import { Color } from '../constants/Color';
import { API_KEY, API_SEARCH, API_URL } from '../constants/api';


function Discover() {
    
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const {theme} = useContext(ThemeContext)

    const {nowPlayingMovies} = useSelector(state => state.appReducer)

    const search = (query) => {
        if (query.length > 2) {
            fetch(`${API_SEARCH}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(data => data.json())
            .then(moviesData => {
                setMovies(moviesData.results)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        }
    }

    useEffect(() => {
       if (movies.length === 0) {
         setMovies(nowPlayingMovies)  
       } 
    }, []);
    

    return (
        <View style={styles(theme).container}>
            <Header name="Discover" />
            <View>
                <Icon style={styles(theme).icon} name='search' size={20} color={theme === 'dark' ? 'white' : Color.darkGray} />
                <TextInput value={query} onSubmitEditing={() => search(query)} onChangeText={text => setQuery(text)} style={styles(theme).input} 
                placeholder="Search" placeholderTextColor={theme === 'dark' ? 'white' : Color.darkGray} />
            </View>
            {
                movies.length > 0 ? 
                <DiscoverList movies={movies} /> : (
                    isLoading ? <ActivityIndicator style={{marginTop: 20}} size="large" /> :
                    <Text style={styles(theme).noResults}>No Results found</Text>
                )
            }
        </View>
    )
    
}

const styles = (theme) => StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: theme === 'dark' ? Color.dark : Color.light,
    },
    input: {
        borderColor: theme === 'dark' ? '#373737' : Color.lightGray,
        backgroundColor: theme === 'dark' ? '#373737' : Color.lightGray,
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        marginLeft: 20,
        height: 40,
        marginTop: 10,
        color: theme === 'dark' ? 'white' : Color.darkGray,
        fontWeight: 'bold',
        paddingLeft: 50,
        fontFamily: 'Bahnschrift-Regular'
    },
    icon: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 35,
        zIndex: 1
    },
    noResults: {
        color: theme === 'dark' ? "#008577" : Color.darkGray,
        marginTop: 40,
        textAlign: 'center'
    }
})

export default Discover
