import axios from 'axios';
import { FETCH_HASHTAG_COUNT } from '../constants/TwitterConstants';


export function fetchHashtagCount (screenName = 'codeblackwell', count = 100, top = 10) {
    return (dispatch) => {
        return axios.get(`/tweets/hashtags/${screenName}/${count}/${top}`)
            .then(
                response => {
                    dispatch({ type: FETCH_HASHTAG_COUNT, payload: response.data})},
                error => dispatch({type: 'ERROR', payload: error })
            )
    }
}
