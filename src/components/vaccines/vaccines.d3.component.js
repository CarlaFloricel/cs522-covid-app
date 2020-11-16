import * as d3 from 'd3'

const url = 'https://udemy-react-d3.firebaseio.com/ages.json'

export default class D3DummyChart {
    constructor(element) {
        const svg = d3.select(element)
            .append("svg")
            .attr("width", 500)
            .attr("height", 250)

        let xScale = d3.scalePoint()
                        .domain(["May 2019", "Dec 2019", "Jun 2021"])
                        .range([30, 450])

        let xAxis = d3.axisBottom()
                    .scale(xScale)
                    .ticks(3)

         svg.append("g")
                    .call(xAxis)
                    .attr("transform", "translate(0," + (225) +")")
        
        let yScale = d3.scaleBand()
                        .domain(['V1','V2','V3','V4','V5'])
                        .range([0, 230])
                        .padding(0.1)
        let yAxis = d3.axisLeft()
                     .scale(yScale)

        svg.append("g").call(yAxis).attr("transform", "translate(25,0)")
        
        d3.json(url).then(agesData => {

            const rects = svg.selectAll("rect")
                .data(agesData)

            rects.enter()
                .append('rect')
                .attr("x", 30)
                .attr("y", (d,i) => i * 50 )
                .attr("width", d => d.age * 20)
                .attr("height", 20)
                .attr("fill", "green")


        })
    }
}