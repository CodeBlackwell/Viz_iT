import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KEY as TWITTER_KEY } from '../../constants/TwitterConstants';
import { ScrollContainer, ScrollSection } from 'react-onepage-scroll';

import { fetchHashtagCount } from '../../actions/TwitterActions';

import { Container } from '../../theme/grid';
import BarChart from '../../components/BarChart/BarChart';

class Twitter extends Component {

    componentDidMount() {
        this.props.dispatch(fetchHashtagCount());
    }
    render () {
        const { hashtagCount } = this.props;



        return (
            <Container>
                <ScrollContainer>
                    <ScrollSection pageId={0} >
                        <BarChart data={[5,10,1,3]} size={[500,500]} />
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
        [TWITTER_KEY]: { hashtagCount }
    } = state;

    return {
        hashtagCount
    };
};

export default connect(mapStateToProps)(Twitter);