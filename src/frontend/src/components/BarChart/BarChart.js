import React, {Component} from 'react'

import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array'
import {select} from 'd3-selection'


class BarChart extends Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {
        const node = this.node;

        select(node)
            .append("rect")
                .attr("width", 50)
                .attr("height", 200)
                .style("fill", "blue");

        select(node)
            .append("circle")
                .attr("cx", 250)
                .attr("cy", 200)
                .attr("r", 50)
                .style("fill", "purple");

        select(node)
            .append("text")
                .attr("x", 200)
                .attr("y", 100)
                .style("fill", "red");

    }

    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={500}>
        </svg>
    }
}
export default BarChart