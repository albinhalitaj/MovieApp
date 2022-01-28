import { GET_NOWPLAYING_MOVIES, GET_TOPRATED_MOVIES, GET_UPCOMMING_MOVIES} from './actions'

const initialState = {
    nowPlayingMovies: [],
    upCommingMovies: [],
    topRatedMovies: []
}

function appReducer(state = initialState,action) {
    switch (action.type) {
        case GET_NOWPLAYING_MOVIES:
            return {...state, nowPlayingMovies: action.payload}
        case GET_TOPRATED_MOVIES: 
            return {...state, topRatedMovies: action.payload}
        case GET_UPCOMMING_MOVIES:
            return {...state,upCommingMovies: action.payload}
        default:
            return state;
    }
}

export default appReducer;