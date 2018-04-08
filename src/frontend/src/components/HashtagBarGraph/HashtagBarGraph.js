import React, {Component} from 'react'
import {scaleLinear, scaleOrdinal} from 'd3-scale';
import {max, min} from 'd3-array'
import {select} from 'd3-selection'

import { HashtagSVG } from './HashtagBarGraph.styles';


class HashtagBarGraph extends Component {
    constructor(props) {
        super(props);
        this.createBarGraph = this.createBarGraph.bind(this)
    }

    componentDidMount() {
        this.createBarGraph()
    }

    componentDidUpdate() {
        this.createBarGraph()
    }

    createBarGraph() {
        //initialize variables
        const node = this.node,
             range = HashtagBarGraph._findRange(this.props.data),
            margin = {top: 20, right: 10, bottom: 100, left: 40},
             width = this.props.width  + margin.right + margin.left,
            height = this.props.height + margin.top   + margin.bottom,
           dataMax = range[1];


        // define x and y scales
        const yScale = scaleLinear()
                .domain([0, dataMax])
                .range(HashtagBarGraph._findRange(this.props.data));
        const xScale = scaleOrdinal()
                .rangeRound([0, width]);



        //Build Graph
        select(node)
            .append('svg')
            .attr({

            })
    }


    render() {
        const { margin, height, width } = this.props;
        return <HashtagSVG ref={node => this.node = node}
                    width={width} height={height} margin={margin}>
        </HashtagSVG>
    }

    _findRange(hashTags) {
        const range = hashTags.reduce((prev, next) => {
            prev.push(next.frequency)
        }, []);
        return [Math.min(...range), Math.max(...range)]
    }
}

export default HashtagBarGraph;