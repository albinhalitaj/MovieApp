import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux'
import {getMovieCast, setFavoriteMovies, setMovieCast} from '../redux/actions'
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ThemeContext } from '../utils/ThemeManager';
import { Color } from '../constants/Color'


function MovieDetails({ route, navigation }) {

    const { movie } = route.params
    const [favorite, setFavorite] = useState(false)
    const { theme } = useContext(ThemeContext)

    const dispatch = useDispatch()
    const { cast, favoriteMovies } = useSelector(state => state.appReducer);

    const handleOnPress = async () => {
      setFavorite(state => !state)
      let favorites = favoriteMovies
      if (isFavorited) {
        favorites = favorites.filter((mov) => mov.id !== movie.id)
      } else {
        favorites.push(movie)
      }
      await AsyncStorage.setItem("watchlist",JSON.stringify(favorites))
      dispatch(setFavoriteMovies(favorites))
    }

    const isFavorited = favoriteMovies != null ? favoriteMovies.some(mov => {
      if (mov.id === movie.id) {
        return true
      }
    }) : false

    useEffect(() => {
      dispatch(getMovieCast(movie.id))
      isFavorited ? setFavorite(true) : setFavorite(false)
      return () => {
        dispatch(setMovieCast())
      }
    },[])

  return (
    movie && cast && (
      <ScrollView style={styles(theme).wrapper}>
      <View style={styles(theme).backdrop}>
        <Icon onPress={() => navigation.goBack()} style={{position: 'absolute',top: 0,left: 0,zIndex: 1,paddingTop: 10,paddingLeft: 10}} size={25} name="arrow-left" color="white" />
        <Icon onPress={handleOnPress} style={{position: 'absolute',top: 0,right: 0,zIndex: 1,paddingTop: 10,paddingRight: 10}} name={favorite ? 'check' : 'star'} size={25} color="white" />
        <Image style={styles(theme).poster} source={{uri: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}}/>
        <LinearGradient style={styles.overlay} colors={['transparent','rgba(37,37,37,0.61)','#111']} />
        <Text style={styles(theme).title}>{movie.title}</Text>
        <View style={{width: 40,height: 40,backgroundColor: 'yellow',marginBottom: 20,marginRight: 15,position: 'absolute',bottom: 0,right: 0,borderRadius: 100}}>
         <Text style={{color: 'black',paddingTop: 8,fontWeight: 'bold',textAlign: "center",fontSize: 17}}>{movie.vote_average}</Text>
        </View>
      </View>
      <View>
        <Text style={styles(theme).movieInfo}>Movie Info</Text>
        <Text style={styles(theme).overview}>{movie.overview}</Text>
        <View style={styles(theme).line}></View>
      </View>
      <View style={{paddingLeft: 29}}>
        <Text style={styles(theme).castName}>Cast</Text>
        <ScrollView horizontal={true}>
        {
          cast.length > 0 ? (
            cast.map((c,index) => {
              return (
                <View key={index} style={styles(theme).cast}>
                    <Image style={styles(theme).profile} source={{uri: `https://image.tmdb.org/t/p/w500${c.profile_path}`}} />
                    <LinearGradient style={styles(theme).overlay} colors={['transparent','rgba(37,37,37,0.61)','#111']} />
                    <Text numberOfLines={1} 
                    style={{position: 'absolute',color: 'white',width:100,fontSize: 12,bottom: 0,paddingBottom: 6,paddingLeft: 6}}>
                      {c.name}
                    </Text>
                </View>
              )
            })
          ) : (
              <ActivityIndicator style={{marginTop: 20,marginLeft: 150}} size="large" />          
          )
        }
        </ScrollView>
      </View>
    </ScrollView>
    )
    
  )
}

const styles = (theme) => StyleSheet.create({
  wrapper: {
    backgroundColor: theme === 'dark' ? Color.dark : Color.light,
    width: 'auto',
    height: '100%',
  },
  backdrop: {
    position: 'relative'
  },
  poster: {
    width: 'auto',
    height: 240,
    resizeMode: "cover"
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    bottom: 0,
    marginBottom: 30
  },
  add: {
    width: 'auto',
    height: 60,
    backgroundColor: 'yellow',
    borderRadius: 5
  },
  addtoWatchlist: {
    textTransform: 'uppercase',
    color: '#181818',
    fontSize: 20,
    fontFamily: 'Bahnschrift-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 13
  },
  overlay: {
    width: 'auto',
    height: 100,
    marginTop: -100
  },
  info: {
    backgroundColor: 'black',
    width: 'auto',
    height: 50
  },
  movieInfo: {
    paddingTop: 30,
    paddingLeft: 30,
    fontSize: 17,
    color: theme === 'dark' ? Color.light : Color.darkGray,
    fontFamily: 'Bahnschrift-Regular',
  },
  overview: {
    fontSize: 13,
    color: theme === 'dark' ? Color.light : Color.darkGray,
    paddingLeft: 30,
    marginTop: 20,
    paddingRight: 20,
    lineHeight: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#373737',
    marginTop: 25
  },
  cast: {
    margin: 5,
    marginTop: 20,
  },
  profile: {
    width: 100,
    height: 140,
    resizeMode: "cover",
    borderRadius: 8
  },
  castName: {
    paddingTop: 20,
    fontSize: 17,
    color: theme === 'dark' ? Color.light : Color.darkGray,
    fontFamily: 'Bahnschrift-Regular',
  }
})

export default MovieDetails;
