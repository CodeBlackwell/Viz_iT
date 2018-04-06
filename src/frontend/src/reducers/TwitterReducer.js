import { FETCH_HASHTAG_COUNT } from '../constants/TwitterConstants';

const initialState = {
    screenName: 'codeblackwell',
    hashtagCount: []
};

const actionHandlers = {
    [FETCH_HASHTAG_COUNT] (state, action) {
        const {
            payload: {
                data: hashtagCount
            }
        }  = action;

        return Object.assign({}, state, {
            hashtagCount
        });
    }
};


const twitterReducer = function (state = initialState, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type] (state, action)
    }
    return state
};
export default twitterReducer