
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Router from './router.js'

class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                { Router(history) }
            </Provider>
        )
    }
}

export default Root;