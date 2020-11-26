import * as d3 from 'd3'
import './vaccines.styles.css';
import d3Tip from 'd3-tip'
import VaccineDetails from './vaccines.details.component';

// const url = 'https://udemy-react-d3.firebaseio.com/ages.json'
const vaccines = require('./vaccines.json')
const domainX = ["May 20", "Jun 20", "Jul 20", "Aug 20", "Sep 20", "Oct 20", "Nov 20", "Dec 20",  "Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21", "Jun 21"]
const domainY = ["Inactivated Virus", "Life Attenuated Virus", "Protein Subnit", "DNA-Based", "RNA-Based", "Replicating Viral Vector", "Non-Replicating Viral Vector", "Virus-like Particle", "Other Vaccines"]
const height = 300;
export default class D3DummyChart {
    constructor(chart, legend, details) {
        const svg = d3.select(chart)
            .append("svg")
            .attr("width", 825)
            .attr("height", height)

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
            // .style("font-size", '1em')          
            // .attr("transform", "rotate(-20)");
        const group = svg.append("g")

        for(let item of vaccines){
            //tooltip
            let trialTip = d3Tip().attr('class', 'd3-tip').
                                html(function() { 
                                    let tip = `Name : ${item.name} <br>
                                    Trial : ${item.trial} to ${item.testing}`
                                    return tip; 
                                });

            let testingTip = d3Tip().attr('class', 'd3-tip')
                            .html(function() { 
                                let tip = `Name : ${item.name} <br>
                                    Testing : ${item.testing} to ${item.production}`
                                return tip;
                             });
            let productionTip = d3Tip().attr('class', 'd3-tip')
                                .html(function() {
                                    let tip = `Name : ${item.name} <br>
                                    Production : ${item.production} to ${item.ending}`
                                     return tip; 
                                    });

           // calling the tips
            svg.call(trialTip)
            svg.call(testingTip)
            svg.call(productionTip)
            // console.log(item["trial"])
            // let rects = group.selectAll('rect')
                // .data(item)
            //start to testing
            // rects.enter()
            group.append('rect')
                .attr("x", () => {return xScale(item["trial"])})
                .attr("y", () => {return yScale(item.name)})
                .attr("width", () => {return (xScale(item["testing"]) - xScale(item["trial"]))})
                .attr("height", 20)
                .attr("fill", "#d7191c")
                .on('mouseover', trialTip.show)
                .on('mouseout', trialTip.hide)
                .style('cursor', 'pointer')
                .on('click', () => {new VaccineDetails(details, item)})
            
            //testing to production
            // rects.enter()
            group.append('rect')
                .attr("x", () => {return xScale(item["testing"])})
                .attr("y", () => {return yScale(item.name)})
                .attr("width", () => {return (xScale(item["production"]) - xScale(item["testing"]))})
                .attr("height", 20)
                .attr("fill", "#fdae61")
                .on('mouseover', testingTip.show)
                .on('mouseout', testingTip.hide)
                .style('cursor', 'pointer')
                .on('click', () => {new VaccineDetails(details, item)})
            //production to end
            // rects.enter()
            group.append('rect')
                .attr("x", () => {return xScale(item["production"])})
                .attr("y", () => {return yScale(item.name)})
                .attr("width", () => {return (xScale(item["ending"]) - xScale(item["production"]))})
                .attr("height", 20)
                .attr("fill", "#2c7bb6")
                .on('mouseover', productionTip.show)
                .on('mouseout', productionTip.hide)
                .style('cursor', 'pointer')
                .on('click', () => {new VaccineDetails(details, item)})
        }

        //create legend
        const legendSvg = d3.select(legend)
                            .append('svg')
                            .attr('width', 100)
                            .attr('height', height)
        
        const color = ["#d7191c", "#fdae61", "#2c7bb6"]
        const type = ["Trial", "Testing", "Production"]
        legendSvg.append("g")
                .selectAll('rect')
                .data(color)
                .enter()
                .append('rect')
                .attr("x", 0)
                .attr('y', (d,i) => {return 10 + 20 * i})
                .attr("width", 15)
                .attr("height", 15)
                .attr('fill', (d) => {return d})
        legendSvg.append('g')
            .selectAll('text')
            .data(type)
            .enter()
            .append('text')
            .attr('x', 20)
            .attr('y', (d,i) => {return 22 + 20 * i})
            .text((d) => {return d})


        function make_x_axis() {    
            let xScale = d3.scalePoint()
                        .domain(domainX)
                        .range([150, 800])

            return d3.axisBottom()
                .scale(xScale)
        }

    }

    
}