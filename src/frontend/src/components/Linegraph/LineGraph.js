import React, {Component} from 'react'

import d3 from 'd3';
import {select, selectAll} from 'd3-selection'


class LineGraph extends Component {
    constructor(props) {
        super(props);
        this.createLineGraph = this.createLineGraph.bind(this)
    }

    componentDidMount() {
        this.createLineGraph()
    }

    componentDidUpdate() {
        this.createLineGraph()
    }

    createLineGraph() {
        const node = this.node,
            width = 800,
            height = 300,
            padding = 2,
            dataset = [
                {month: 1, sales: 20},
                {month: 2, sales: 100},
                {month: 3, sales: 40},
                {month: 4, sales: 20},
                {month: 5, sales: 50},
                {month: 6, sales: 70},
                {month: 7, sales: 30},
                {month: 8, sales: 90},
                {month: 9, sales: 70},
                {month: 10, sales: 45}
            ];
        const lineFun = d3.svg.line()
            .x(d => d.month * 100 )
            .y(d =>  height - d.sales )
            .interpolate('linear');

        select(node).append("path")
            .attr("d", lineFun(dataset))
            .attr("stroke", "red")
            .attr("stroke-width", 2)
            .attr("fill", "none");

        select(node).selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(d => d.sales)
            .attr("x", d => d.month * 100 - 30)
            .attr("y", d => height - d.sales)
            .attr("fill", "red")
            .attr("text-anchor", "start")
            .attr("dy", ".35em")


    }

    render() {
        return <svg ref={node => this.node = node}
                    width={800} height={300}>
        </svg>
    }
}
export default LineGraph