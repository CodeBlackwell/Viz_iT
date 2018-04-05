import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './src/containers/App/App';
import Home from './src/containers/Home/Home';
import About from './src/containers/About/About';
import Twitter from './src/containers/Twitter/Twitter';

export default (history) => {
    return (
        <Router history={ history }>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="twitter" component={Twitter} />
            </Route>
        </Router>
    )
}