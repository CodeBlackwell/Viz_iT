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
            svg = select(node),
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

        const labels = svg.selectAll("text")
            .data(dataSet)
            .enter()
            .append("text")
            .text(d => d)
            .attr('x', (d, i) => i * (width / dataSet.length ) - 10)
            .attr('y', d => height - d)
            .attr('font-size', '12px')
            .attr('font-family', 'sans-serif')
            .attr('fill', '#666666')


    }

    render() {
        return <svg ref={node => this.node = node}
                    width={500} height={700}>
        </svg>
    }
}
export default BarChart