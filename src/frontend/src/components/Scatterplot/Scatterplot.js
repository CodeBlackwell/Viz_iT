import React, {Component} from 'react'

import {select, selectAll} from 'd3-selection'
import { max, min } from 'd3-array';
import { scaleLinear } from 'd3-scale'


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
        //Key Performance Data
        function KPI(d) {
            if(d>75) { return '#33CC66'}
            else { return '#666666' }
        }

        function showMinMax(ds, col, val, type) {
            const Max = max(ds, d => d[col]),
                  Min = min(ds, d => d[col]);

            if (type === 'minmax' && (val == max || val == min)) {
                return val;
            } else {
                if(type === 'all') {
                    return val;
                }
            }
        }


        const node = this.node,
            svg = select(node),
            width = 800,
            height = 300,
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


        const dots = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", d => d.month * 50)
            .attr("cy", d => height - d.sales)
            .attr("r", 10)
            .attr("fill", d => KPI(d.sales))
            .append("title")
            .text(d => d)
            .on("mouseover", function(d) {
                console.log(this);
            });

        const labels = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(d => showMinMax(dataset, 'sales', d.sales, 'all'))
            .attr('x', d => (d.month * 50) - 25)
            .attr('y', d =>  height - d.sales)
            .attr('font-size', '12px')
            .attr('font-family', 'sans-serif')
            .attr('fill', '#666666')


    }

    render() {
        return <svg ref={node => this.node = node}
                    width={800} height={300}>
        </svg>
    }
}
export default LineGraph