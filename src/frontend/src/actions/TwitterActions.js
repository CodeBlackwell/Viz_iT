import axios from 'axios';
import { FETCH_TIMELINE } from '../constants/TwitterConstants';


export function fetchTimeline (screenName, count = 100) {
    const request = axios.get(`/tweets/${screenName}/${count}`);

    return {type: FETCH_TIMELINE, payload: request}
}
