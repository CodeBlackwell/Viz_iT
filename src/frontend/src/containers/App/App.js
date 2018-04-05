import React, {Component} from 'react'

import {Background} from './App.style';
import Navigation from '../../components/Navigation/Navigation';

class App extends Component {
    render() {
        return (
            <div>
                <Background/>
                <Navigation/>
                {this.props.children}
            </div>
        )
    }
}

export default App;