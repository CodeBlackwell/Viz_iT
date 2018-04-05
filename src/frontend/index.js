import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxPromise from 'redux-promise';

import Root from './root'
import rootReducer from './src/reducers';

import './src/theme/globalStyle.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxPromise)
));

const history = syncHistoryWithStore(hashHistory, store);

render((
        <Root store={ store } history={ history }/>
    ),
    document.getElementById('root')
);
