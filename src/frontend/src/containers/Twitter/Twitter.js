import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KEY as TWITTER_KEY } from '../../constants/TwitterConstants';
import { ScrollContainer, ScrollSection } from 'react-onepage-scroll';

import { fetchHashtagCount } from '../../actions/TwitterActions';

import { Container } from '../../theme/grid';
import ScatterPlot from '../../components/Scatterplot/Scatterplot';
import BarChart from '../../components/BarChart/BarChart';
import Map from '../../components/GeoMap/GeoMap';


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
                        <Map/>
                    </ScrollSection>
                    <ScrollSection pageId={1} >
                        <h3>Section 2</h3>
                        <BarChart/>
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