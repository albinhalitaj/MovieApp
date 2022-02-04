import { API_KEY, API_OPTIONS, API_URL } from "../constants/api";

export const GET_NOWPLAYING_MOVIES = 'GET_NOWPLAYING_MOVIES';
export const GET_TOPRATED_MOVIES = 'GET_TOPRATED_MOVIES';
export const GET_UPCOMMING_MOVIES = 'GET_UPCOMMING_MOVIES';
export const GET_MOVIE_CAST = 'GET_MOVIE_CAST'
export const SET_FAVORITE_MOVIES = 'SET_FAVORITE_MOVIES';
export const GET_ALL_NOWPLAYING_MOVIES = 'GET_ALL_NOWPLAYING_MOVIES';
export const GET_ALL_TOPRATED_MOVIES = 'GET_ALL_TOPRATED_MOVIES';
export const GET_ALL_UPCOMMING_MOVIES = 'GET_ALL_UPCOMMING_MOVIES';
export const SET_MOVIE_CAST = 'SET_MOVIE_CAST';

export const getNowPlaying = () => {
    try {
        return async dispatch => {
            const data = await fetch(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`,API_OPTIONS);
            const dataToJson = await data.json()
            dispatch({
                type: GET_NOWPLAYING_MOVIES,
                payload: dataToJson.results
            })
        }
    } catch (error) {
       console.log(error) 
    }
}

export const getTopRated = () => {
    try {
        return async dispatch => {
            const data = await fetch(`${API_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`,API_OPTIONS);
            const movies = await data.json();
            dispatch({
                type: GET_TOPRATED_MOVIES,
                payload: movies.results
            })
        }
    } catch (error) {
       console.log(error) 
    }
}

export const getUpComming = () => {
    try {
        return async dispatch => {
            const data = await fetch(`${API_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`,API_OPTIONS);
            const upComming = await data.json()
            dispatch({
                type: GET_UPCOMMING_MOVIES,
                payload: upComming.results
            })
        }
    } catch (error) {
       console.log(error) 
    }
}


export const getMovieCast = (movieId) => {
    try {
        return async dispatch => {
            const cast = await fetch(`${API_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
            const castJson = await cast.json();
            dispatch({
                type: GET_MOVIE_CAST,
                payload: castJson.cast
            })
        }
    } catch (error) {
       console.log(error) 
    }
}


export const setFavoriteMovies = (movies) => {
    try {
        return dispatch => {
            dispatch({
                type: SET_FAVORITE_MOVIES,
                movies: movies
            })
        } 
    } catch (error) {
       console.error(error) 
    }
}


export const getAllNowPlayingMovies = (pageNumber) => {
    try {
        return async dispatch => {
            const data = await fetch(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,API_OPTIONS);
            const dataToJson = await data.json()
            dispatch({
                type: GET_ALL_NOWPLAYING_MOVIES,
                payload: dataToJson.results
            })
        }
    } catch (error) {
       console.log(error) 
    }
}

export const setMovieCast = () => {
    try {
        return dispatch => {
            dispatch({
                type: SET_MOVIE_CAST,
                payload: []
            })
        }
    } catch (error) {
       console.log(error) 
    }
}