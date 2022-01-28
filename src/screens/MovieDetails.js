import React, { useEffect } from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux'
import {getMovieCast} from '../redux/actions'

function MovieDetails({route}) {

    const {movie} = route.params

    const dispatch = useDispatch();
    const {cast} = useSelector(state => state.appReducer);

    useEffect(() => {
      dispatch(getMovieCast(movie.id))
    },[])

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.backdrop}>
        <Image style={styles.poster} source={{uri: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}}/>
        <LinearGradient style={styles.overlay} colors={['transparent','rgba(37,37,37,0.61)','#111']} />
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{width: 40,height: 40,backgroundColor: 'yellow',marginBottom: 20,marginRight: 15,position: 'absolute',bottom: 0,right: 0,borderRadius: 100}}>
         <Text style={{color: 'black',paddingTop: 6,fontWeight: 'bold',textAlign: "center",fontSize: 17}}>{movie.vote_average}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.movieInfo}>Movie Info</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <View style={styles.line}></View>
      </View>
      <View style={{paddingLeft: 29}}>
        <Text style={styles.castName}>Cast</Text>
        <ScrollView horizontal={true}>
        {
          cast.map(c => {
            return (
              <View style={styles.cast}>
                  <Image style={styles.profile} source={{uri: `https://image.tmdb.org/t/p/w500${c.profile_path}`}} />
                  <LinearGradient style={styles.overlay} colors={['transparent','rgba(37,37,37,0.61)','#111']} />
                  <Text numberOfLines={1} 
                  style={{position: 'absolute',color: 'white',width:100,fontSize: 12,bottom: 0,paddingBottom: 5,paddingLeft: 5}}>
                    {c.name}
                  </Text>
                  {/* <Text numberOfLines={1} style={{marginTop: -20,color: 'white',fontSize: 12,width: 70}}>{c.character}</Text> */}
              </View>
            )
          })
        }
        </ScrollView>

      </View>
      {/* <View style={styles.add}>
        <Text style={styles.addtoWatchlist}>Add To Watchlist</Text>
      </View> */}
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#181818',
    width: 'auto',
    height: '100%'
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
    color: 'white',
    fontFamily: 'Bahnschrift-Regular',
  },
  overview: {
    fontSize: 13,
    color: 'white',
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
    color: 'white',
    fontFamily: 'Bahnschrift-Regular',
  }
})

export default MovieDetails;
