import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
    constructor(props){
        super(props);

        this.state = {
            isInView: false
        };

        this.onEnter = this.onEnter.bind(this);
    }


    onEnter({ previousPosition }) {
        if( previousPosition === Waypoint.below) {
            this.setState({
                isInView: true
            })
        }
    }
    render () {
        //@TODO: Fix so that it actually uses onEnter function;
        setTimeout(() => {
            this.setState({isInView: true});
        }, 3000);
        return (
            <div>
                <Waypoint onEnter={this.onEnter}>
                    {this.props.children({ isInView: this.state.isInView })}
                </Waypoint>
            </div>
        )
    }
}

export default WhenInView;