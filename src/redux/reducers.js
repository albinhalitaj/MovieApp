import { GET_NOWPLAYING_MOVIES, 
         GET_TOPRATED_MOVIES, 
         GET_UPCOMMING_MOVIES, 
         GET_MOVIE_CAST, 
         SET_FAVORITE_MOVIES,
         GET_ALL_NOWPLAYING_MOVIES,
         SET_MOVIE_CAST } from './actions'

const initialState = {
    nowPlayingMovies: [],
    upCommingMovies: [],
    topRatedMovies: [],
    cast: [],
    favoriteMovies: [],
    allNowPlayingMovies: []
}

function appReducer(state = initialState,action) {
    switch (action.type) {
        case GET_NOWPLAYING_MOVIES:
            return {...state, nowPlayingMovies: action.payload}
        case GET_TOPRATED_MOVIES: 
            return {...state, topRatedMovies: action.payload}
        case GET_UPCOMMING_MOVIES:
            return {...state,upCommingMovies: action.payload}
        case GET_MOVIE_CAST: 
            return {...state, cast: action.payload}
        case SET_FAVORITE_MOVIES: 
            return {...state, favoriteMovies: action.movies}
        case GET_ALL_NOWPLAYING_MOVIES:
            const allMovies = [...state.allNowPlayingMovies,...action.payload]
            return {...state, allNowPlayingMovies: allMovies}
        case SET_MOVIE_CAST: 
            return {...state,cast: action.payload}
        default:
            return state;
    }
}

export default appReducer;