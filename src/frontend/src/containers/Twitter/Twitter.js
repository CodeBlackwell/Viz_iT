import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KEY as TWITTER_KEY } from '../../constants/TwitterConstants';
import { ScrollContainer, ScrollSection } from 'react-onepage-scroll';

import { Container } from '../../theme/grid';


class Twitter extends Component {
    render () {
        const { tweets } = this.props;
        return (
            <Container>
                <ScrollContainer>
                    <ScrollSection pageId={0} >
                        <h3>Section 1</h3>
                    </ScrollSection>
                    <ScrollSection pageId={1} >
                        <h3>Section 2</h3>
                    </ScrollSection>
                </ScrollContainer>
            </Container>
        );
    }
}



const mapStateToProps = function (state) {
    const {
        [TWITTER_KEY]: { tweets }
    } = state;

    return {
        tweets
    };
};

export default connect(mapStateToProps)(Twitter);