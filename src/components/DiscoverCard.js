import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather'

class DiscoverCard extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            isFavorited: false,
        }
    }

    isFavoriteMovie = () => {
        const {favoriteMovies,movie} = this.props
        if(favoriteMovies != null) {
            this.setState({...this.state,isFavorited: favoriteMovies.some(mov => mov.id === movie.id)})
        }
    }

    componentDidMount() {
        this.isFavoriteMovie();
    }

    componentDidUpdate() {
        this.isFavoriteMovie();
    }

    render() {
        const {navigation,movie} = this.props
        const {isFavorited} = this.state
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('MovieDetails',{movie})}>
                <View key={movie.id} style={styles.card}>
                    <ImageBackground style={styles.poster} imageStyle={styles.backgroundStyle} source={{uri: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}} />
                    <LinearGradient style={styles.overlay} colors={['transparent','rgba(37,37,37,0.61)','#111']} />
                    <Pressable style={styles.add} onPress={() => navigation.navigate('Watchlist')}>
                        <Icon style={styles.icon} name={isFavorited ? 'check' : 'plus'} size={19} color='orange' />
                    </Pressable>
                    <Text 
                        ellipsizeMode='tail' 
                        numberOfLines={2} 
                        style={styles.movieName}>
                            {movie.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    poster: {
        flex: 1,
        position: 'relative',
        width: 348,
        height: 180
    },
    movieName: {
        zIndex: 1,
        color: 'white',
        position: 'absolute',
        bottom: 0,
        fontSize: 18,
        fontFamily: 'Bahnschrift-Regular',
        paddingLeft: 10,
        paddingBottom: 20
    },
    icon: {
        paddingTop: 3,
        paddingLeft: 4,
    },
    backgroundStyle: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        bottom: '45%',
        borderRadius: 10
    },
    add: {
        position: 'absolute',
        marginTop: 10,
        marginRight: 10,
        width: 30,
        height: 30,
        backgroundColor: '#373737',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'orange',
        top: 0,
        right: 0
    },
    card: {
        width: 348,
        height: 180,
        borderRadius: 10,
        marginLeft: 3,
        marginTop: 15
    },
    genres: {
        color: 'white',
        paddingBottom: 12,
        fontSize: 12,
        paddingLeft: 10
    },
    overlay: {
        width: 'auto',
        height: 100,
        marginTop: -100
    }
})

export default DiscoverCard
