export const GET_NOWPLAYING_MOVIES = 'GET_NOWPLAYING_MOVIES';
export const GET_TOPRATED_MOVIES = 'GET_TOPRATED_MOVIES';
export const GET_UPCOMMING_MOVIES = 'GET_UPCOMMING_MOVIES';

const API_KEY = "88e25c44663a2b555750d84d2d4dba2e"
const API_URL = `https://api.themoviedb.org/3/movie`;

export const getNowPlaying = () => {
    try {
        return async dispatch => {
            const data = await fetch(`${API_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
            const data = await fetch(`${API_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
            const data = await fetch(`${API_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const upComming = await data.json();
            dispatch({
                type: GET_UPCOMMING_MOVIES,
                payload: upComming.results
            });
        }
    } catch (error) {
       console.log(error) 
    }
}