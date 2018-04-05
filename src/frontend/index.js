import React from 'react'
import { render } from 'react-dom'

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import './src/theme/globalStyle.js';

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});
const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h1>Inbox</h1>
                {this.props.children}
            </div>
        )
    }
});
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

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Inbox} />
                <Route path="about" component={About} />
                <Route path="inbox" component={Inbox} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
