import axios from 'axios';
import { FETCH_TIMELINE } from '../constants/TwitterConstants';


export function fetchTimeline (screenName = 'codeblackwell', count = 100) {
    return (dispatch) => {
        return axios.get(`/tweets/${screenName}/${count}`)
            .then(
                response => {
                    dispatch({ type: FETCH_TIMELINE, payload: response.data})},
                error => dispatch({type: 'ERROR', payload: error })
            )
    }
}
