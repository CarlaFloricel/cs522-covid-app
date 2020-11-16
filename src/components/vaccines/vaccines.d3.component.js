import * as d3 from 'd3'
import './vaccines.styles.css';

// const url = 'https://udemy-react-d3.firebaseio.com/ages.json'
const vaccines = require('./vaccines.json')
const domainX = ["May 20", "Jun 20", "Jul 20", "Aug 20", "Sep 20", "Oct 20", "Nov 20", "Dec 20",  "Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21", "Jun 21"]
const domainY = ["Inactivated Virus", "Life Attenuated Virus", "Protein Subnit", "DNA-Based", "RNA-Based", "Replicating Viral Vector", "Non-Replicating Viral Vector", "Virus-like Particle", "Other Vaccines"]
export default class D3DummyChart {
    constructor(element) {
        const svg = d3.select(element)
            .append("svg")
            .attr("width", 825)
            .attr("height", 300)

        let xScale = d3.scalePoint()
                        .domain(domainX)
                        .range([150, 800])

        let xAxis = d3.axisBottom()
                    .scale(xScale)
                    // .ticks(3)

         svg.append("g")
                    .call(xAxis)
                    .attr("transform", "translate(0," + (280) +")")

        svg.append("g")         
            .attr("class", "grid")
            .attr("transform", "translate(0," + 280 + ")")
            .call(make_x_axis()
                .tickSize(-300, 0, 0)
                .tickFormat("")
            )

        let yScale = d3.scaleBand()
                        .domain(domainY)
                        .range([0, 270])
                        .padding(0.1)
        let yAxis = d3.axisLeft()
                     .scale(yScale)

        svg.append("g").call(yAxis).attr("transform", "translate(150,0)")
            .selectAll("text")	            
            // .attr("transform", "rotate(-20)");

        const group = svg.append("g")
        for(let item of vaccines){
            const rects = group.selectAll('rect')
                .data(vaccines)
            rects.enter()
                .append('rect')
                .attr("x", (d) => {return xScale(d["starting-date"])})
                .attr("y", (d) => {return yScale(d.name)})
                .attr("width", (d) => {return (xScale(d["ending-date"]) - xScale(d["starting-date"]))})
                .attr("height", 20)
                .attr("fill", "green")
        }


        function make_x_axis() {    
            let xScale = d3.scalePoint()
                        .domain(domainX)
                        .range([150, 800])

            return d3.axisBottom()
                .scale(xScale)
        }

    }

    
}