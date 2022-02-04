import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DiscoverCard from '../components/DiscoverCard'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../utils/ThemeManager';
import { Color } from '../constants/Color';
import { API_KEY, API_OPTIONS, API_URL } from '../constants/api';

const ViewAll = ({route}) => {

  const navigation = useNavigation()
  const {genre} = route.params 
  const [pageNumber, setPageNumber] = useState(1)
  const [movies, setMovies] = useState([])

  const {theme} = useContext(ThemeContext)

  const {favoriteMovies} = useSelector(state => state.appReducer)

  const getMovies = async () => {
    const data = await fetch(`${API_URL}/${genre}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,API_OPTIONS)
    const dataToJson = await data.json()
    setMovies([...movies,...dataToJson.results])
  }

  useEffect(() => {
    getMovies()
  }, [pageNumber])

  const renderMovie = ({item}) => {
    return (
      <View style={{marginLeft: 20,flexDirection: 'column'}}>
        <DiscoverCard favoriteMovies={favoriteMovies} navigation={navigation} movie={item} />
      </View>
    )
  }

  const loader = () => {
    return (
      <View style={styles(theme).activity}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const loadMovies = () => {
    setPageNumber(pageNumber + 1)
    getMovies();
  }

  const formatType = () => {
    if (genre === 'now_playing') {
      return 'Now Playing'
    } else if (genre === 'upcoming') {
      return 'Up Coming'
    } else {
      return 'Top Rated'
    }
  }
  
  return (
    <View style={styles(theme).wrapper}>
        <Text style={styles(theme).type}>All {formatType()} Movies</Text>
        <View style={styles(theme).list}>
          <FlatList 
          data={movies} 
          renderItem={renderMovie}
          keyExtractor={(item,index) => String(index)}
          onEndReached={loadMovies}
          ListFooterComponent={loader}
          onEndReachedThreshold={0.1}
          />
        </View>
    </View>
  )
}


const styles = (theme) => StyleSheet.create({
    wrapper: {
      backgroundColor: theme === 'dark' ? Color.dark : Color.light,
      width: 'auto',
      height: '100%',
    },
    list: {
      paddingTop: 20,
      paddingBottom: 60
    },
    type: {
      color: theme === 'dark' ? Color.lightGray : Color.dark,
      marginTop: 20,
      marginLeft: 25,
      fontFamily: 'Bahnschrift-Regular',
      fontSize: 20
    },
    activity: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20 
    }
})


export default ViewAll;
