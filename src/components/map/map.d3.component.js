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
        this.height = node.clientHeight*.99;
        this.width = node.clientWidth*.99;
        this.svg = d3.select(node).append('svg')
            .attr('class','map-svg zoomable')
            .attr('width', this.width)
            .attr('height', this.height)
            .style('background-color', 'white')

        this.g = this.svg.append('g').attr('class', 'map-g')

        this.scale = Math.min(this.width, this.height)
        this.aspectRatio = this.width/this.height;

        this.projection = d3.geoAlbersUsa()
            .translate([this.width/2, this.height/2])
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
            let start = cities.filter(x => x.name == startCity)[0]
            let destination = cities.filter(x => x.name == destinationCity)[0]
            if(start != undefined && destination != undefined){
                let projection = this.projection;
                let cityPosition = function(d){
                    return projection([d.lon, d.lat])
                }
                const [[x0,y0],[x1,y1]] = [cityPosition(start),cityPosition(destination)]
                let dx = Math.abs(x1 - x0)*1.2;//add some buffer for east-coast city names?
                let dy = Math.abs(y1 - y0);
                let x = Math.min(x0,x1)
                let y = Math.min(y0,y1)
                let scale =  Math.min(15, 1.3*this.scale/dx, .9*this.scale/dy);
                let translate = [this.width/2 - scale*(x+dx/2), this.height/2 - scale*(y+dy/2)];
                this.g.attr('transform', 'translate(' + translate[0] + ',' + translate[1] + ')' + ' scale(' + scale + ')')
                this.g.selectAll('.cityName').attr("font-size", (d) => 250/((scale**.5)*this.scale) + 'em')
            }
        }
        console.log(this.props.inspectCitys)
    }

    drawCountys(){
        if(this.props.data.countys !== undefined){
            this.g.selectAll('path').filter('.county').remove()

            this.props.colorMap.fitValues(this.props.data.countys);
            let colorScale = this.props.colorMap.getColorScale()

            let countys = this.g.selectAll('path')
                .filter('.county')

            countys.data(this.props.data.countys)
                .enter().append('path')
                .attr('class','county')
                .attr('d', d=> this.path(d.features))
                .attr('fill',colorScale);
            countys.exit().remove()
        }
    }

    cityOnClicks(d,city){
        //for some reason i is the data this time?
        console.log(d,city)
        console.log(this.props)
        let cityIdx = this.props.inspectCitys.indexOf(city.name)
        var newInspectCitys
        if (cityIdx > -1){
            newInspectCitys = this.props.inspectCitys.filter(x => x !== city.name)
        } else{
            newInspectCitys = [...this.props.inspectCitys]
            newInspectCitys.push(city.name)
        }
        this.props.setInspectCitys(newInspectCitys)
    }

    drawCities(){
        if(this.props.data.cities != undefined){
            this.g.selectAll('g').filter('.cityGroup').remove()
            
            var projection = this.projection;
            let cityPosition = function(d){
                return "translate(" + projection([d.lon, d.lat]) + ")"
            }

            let props = this.props
            let cities = this.g.selectAll('path')
                .filter('.cityGroup')
                .data(this.props.data.cities)
                .enter().append('g')
                .attr('class', 'cityGroup')
                .attr("transform", cityPosition)

            let getRadius = d => {return (d.pop**.40)/120}

            cities.append('circle')
                .attr('class', this.getCityStyle.bind(this))
                .attr('r', getRadius)
                .on('click', (d,i) => this.cityOnClicks(d,i))

            cities.append('text')
                .attr('class', this.getCityNameStyle.bind(this))
                .attr("dx", (d) => -100/this.scale +'em')
                .attr("dy", (d) => -getRadius(d) - 100/this.scale)
                .text(d=>d.name)

        }
        this.zoomToBounds()
    }

    getCityStyle(city){
        let classType = this.getCityClassType(this.props, city);
        return 'city city-' + classType
    }

    getCityNameStyle(city){
        let classType = this.getCityClassType(this.props,city);
        return 'cityName cityName-' + classType
    }

    getCityClassType(props, city){
        let isIn = function(item,collection){
            return collection.indexOf(item) > -1
        }
        let filterNames = props.filters.filter(x => x.active).map(x=> x.name);
        if (city.name == props.destinationCity || city.name == props.startCity){
            return 'primary'
        } else if(isIn(city.name, props.itineraryCitys)){
            return 'itinerary'
        } else if (isIn(city.name, props.inspectCitys)){
            return 'inspect'
        } else if(isIn('Mask Mandate', filterNames) && !city.maskMandate){
            return 'hidden'
        } else if(isIn('Schools Open', filterNames) && !city.schoolsOpen){
            return 'hidden'
        } else if (isIn('Indoor Dining', filterNames) && !city.restaurantsOpen){
            return 'hidden'
        }
        else{
            return "default" //default color
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
        //basically reset the inspect citys to none if it's a new 'route'  not very elegant tho
        if((prevProps.startCity !== this.props.startCity || prevProps.destinationCity !== this.props.destinationCity) && this.props.inspectCitys.length > 0){
            this.props.setInspectCitys([])
        }
    }

    componentWillUnmount(){
        this.destroy();
    }

    _setRef(componentNode){
        this._rootNode = componentNode;
    }

    render(){
        return <div className='covidMapBody'>
            <h4>Select A City</h4>
            <div className='covidMapCanvas' ref={this._setRef.bind(this)}/>
        </div>
    }

}