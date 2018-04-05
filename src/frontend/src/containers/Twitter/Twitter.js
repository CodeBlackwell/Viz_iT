import React, { Component } from 'react'
import { connect } from 'react-redux'
import { KEY as TWITTER_KEY } from '../../constants/TwitterConstants'


class Twitter extends Component {
    render () {
        const { tweets } = this.props;
        console.log(tweets);
        return (
            <div>
                <h1>Twitter</h1>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    //@formatter:off
    const {
        [TWITTER_KEY]: {
            tweets
        }
    } = state;
    //@formatter:on
    return {
        tweets
    };
};

export default connect(mapStateToProps)(Twitter);