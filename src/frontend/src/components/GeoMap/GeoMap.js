import React, {Component} from 'react'

import {select } from 'd3-selection'
import d3 from 'd3';

import geoJson from '../../../../data/america.geojson';


class Map extends Component {
    constructor(props) {
        super(props);
        this.createMap = this.createMap.bind(this)
    }

    componentDidMount() {
        this.createMap()
    }

    componentDidUpdate() {
        this.createMap()
    }

    createMap() {
        const node = this.node,
            svg = select(node),
            width = 500,
            height = 700;

        const path = d3.geo.path();
            svg.selectAll("path")
                .data(geoJson.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr('fill', '#666666')

    }

    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={700}>
        </svg>
    }
}
export default Map