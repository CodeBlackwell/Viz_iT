import React, {Component} from 'react'

class App extends Component {
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
}