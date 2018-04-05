import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './src/containers/App/App';
import Home from './src/containers/Home/Home';


import './src/theme/globalStyle.js';

const About = React.createClass({
    render() {
        return (
            <div>
                <h1>About</h1>
                {this.props.children}
            </div>
        )
    }
});

render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
