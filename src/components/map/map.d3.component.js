import React from 'react';
import * as d3 from 'd3';
import './map.styles.css';

export default class CovidMap extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            zoomedToId: null,
            currentTransform: '',
        }
    }

    static defaultProps = {
        data: {},
        startLocation: '',
        destination: '',
        selectedLocations: [],
    }

    create(node){
        d3.select(node).selectAll('svg').remove();
        this.height = node.clientHeight*.98;
        this.width = node.clientWidth*.98;
        this.svg = d3.select(node).append('svg')
            .attr('class','map-svg zoomable')
            .attr('width', this.width)
            .attr('height', this.height)
            .style('background-color', 'white')

        this.g = this.svg.append('g').attr('class', 'map-g')

        this.scale = Math.min(this.width*1.35, this.height*3)

        this.projection = d3.geoAlbersUsa()
            .translate([node.clientWidth/2, node.clientHeight/2])
            .scale(this.scale)

        this.path = d3.geoPath().projection(this.projection);

        
        this.drawCountys()
        this.drawCities()
    }

    zoomToBounds(){
        let cities = this.props.data.cities;
        let startCity = this.props.startCity;
        let destinationCity = this.props.destinationCity;
        if(cities != undefined){
            console.log(startCity, destinationCity)
            let start = cities.filter(x => x.name == startCity)[0]
            let destination = cities.filter(x => x.name == destinationCity)[0]
            console.log(start, destination)
            if(start != undefined && destination != undefined){
                let projection = this.projection;
                let cityPosition = function(d){
                    return projection([d.lon, d.lat])
                }
                const [[x0,y0],[x1,y1]] = [cityPosition(start),cityPosition(destination)]
                let dx = Math.abs(x1 - x0);
                let dy = Math.abs(y1 - y0);
                let x = Math.min(x0,x1)
                let y = Math.min(y0,y1)
                let scale =  Math.min(4, this.width/dx,this.height/dx);
                let translate = [this.width/2 - scale*(x+dx/2), this.height/2 - scale*(y+dy/2)];
                this.g.attr('transform', 'translate(' + translate[0] + ',' + translate[1] + ')' + ' scale(' + scale + ')')
            }
        }
    }

    drawCountys(){
        if(this.props.data.countys !== undefined){
            this.g.selectAll('path').filter('.county').remove()
            let countys = this.g.selectAll('path')
                .filter('.county')

            countys.data(this.props.data.countys)
                .enter().append('path')
                .attr('class','county')
                .attr('d', d=> this.path(d.features))
                .attr('fill','orangered');
            countys.exit().remove()
        }
    }

    drawCities(){
        if(this.props.data.cities != undefined){
            this.g.selectAll('circle').filter('.city').remove()
            let cities = this.g.selectAll('path')
                .filter('.city')
            var projection = this.projection;
            let cityPosition = function(d){
                return "translate(" + projection([d.lon, d.lat]) + ")"
            }

            let props = this.props
            cities.data(this.props.data.cities)
                .enter().append('circle')
                .attr('class','city')
                .attr('r', d => {return (d.pop**.35)/40})
                .attr("transform", cityPosition)
                .attr('fill', (d) => {return this.cityColor(props,d)})
                .attr('stroke','black')
                .attr('stroke-width', (d) => {return this.getCityStrokeWidth(props,d)})
        }
        this.zoomToBounds()
    }

    getCityStrokeWidth(props, city){
        let isIn = function(item,collection){
            return collection.indexOf(item) > -1
        }
        if( isIn(city.name, props.inspectCitys)){
            return 2
        } else{
            return 1
        }
    }

    cityColor(props, city){
        let isIn = function(item,collection){
            return collection.indexOf(item) > -1
        }
        if (city.name == props.destinationCity || city.name == props.startCity || isIn(city.name, props.itineraryCitys)){
            return 'black'
        } else if (isIn(city.name, props.inspectCitys)){
            return 'blue'
        } else{
            return "grey" //default color
        }
    }

    destroy(node){
        d3.selectAll('.map-svg').remove()
    }

    componentDidMount(){
        this.create(this._rootNode);
    }

    componentDidUpdate(prevProps){
        this.drawCountys()
        this.drawCities()
    }

    componentWillUnmount(){
        this.destroy();
    }

    _setRef(componentNode){
        this._rootNode = componentNode;
    }

    render(){
        return <div className='covidMapBody'>
            <h4>Select A County</h4>
            <div className='covidMapCanvas' ref={this._setRef.bind(this)}/>
        </div>
    }

}