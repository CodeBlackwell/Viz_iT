import React, {Component} from 'react'

import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array'
import {select, selectAll } from 'd3-selection'


class BarChart extends Component {
    constructor(props) {
        super(props);
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {
        const node = this.node,
            width = 300,
            height = 100,
            padding = 2,
            dataSet = [5, 10, 15, 20, 25, 30];

        select(node)
            .selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
                .attr("x", (d, i) => i * (width / dataSet.length ))
                .attr("y", (d) => height - d)
                .attr("width", width / dataSet.length - padding)
                .attr("height", (d) => d)
                .style("fill", "red");


    }

    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={500}>
        </svg>
    }
}
export default BarChart