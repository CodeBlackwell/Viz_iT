import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import twitter from  './TwitterReducer'

export default combineReducers({
    routing,
    twitter
});