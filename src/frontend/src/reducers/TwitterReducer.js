import { FETCH_TIMELINE } from '../constants/TwitterConstants';

const initialState = {
    screenName: 'codeblackwell',
    tweets: []
};

const actionHandlers = {
    [FETCH_TIMELINE] (state, action) {
        const {
            payload: {
                data: tweets
            }
        }  = action;

        return Object.assign({}, state, {
            tweets
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