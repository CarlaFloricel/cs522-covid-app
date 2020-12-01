import React, {useState, useEffect} from 'react';
import './map.styles.css';
import CovidMap from './map.d3.component';
import ColorMap from './ColorMap.js';
import * as d3 from "d3";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHamburger, FaMask, FaSchool, FaPlus, FaTimes} from 'react-icons/fa';


// 'https://raw.githubusercontent.com/tehwentzel/cd_map/master/resources/countys_with_cities_hci.json'

const SelectCity = ({cityData, startCity, destinationCity,setDestinationCity,setStartCity}) =>{

    const CustomMenu = React.forwardRef(
        //this is some magic dropdown with a search feature from the custom dropdown example here https://react-bootstrap.github.io/components/dropdowns/
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
    
            return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                autoFocus
                className="mx-3 my-2 w-auto"
                placeholder="Type to filter..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
                <ul className="city-list">
                {React.Children.toArray(children).filter(
                    (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
                </ul>
            </div>
            );
        },
    );

    const CityDropDown = ({currentCity, cityData, onclick}) =>{
        const menuItems = cityData.map(city =>
            <Dropdown.Item key={city.name} onClick={(e) => onclick(e.target.innerHTML)}>{city.name}</Dropdown.Item>
        )
        return(
            <Dropdown>
                <Dropdown.Toggle id='dropdown-custom'>
                    {currentCity}
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                    {menuItems}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Starting City</Form.Label>
                <CityDropDown cityData={cityData} currentCity={startCity} onclick={setStartCity}></CityDropDown>
            </Form.Group>
            <Form.Group>
                <Form.Label>Destination</Form.Label>
                <CityDropDown cityData={cityData} currentCity={destinationCity} onclick={setDestinationCity}></CityDropDown>
            </Form.Group>
        </Form>
    )
}

const Filters = ({filters,setFilters}) => {

    const toggleFilter = (e) =>{
        let filterName = e.target.value
        let newFilters = [];
        //I should check to make sure this isn't editing in place
        for (let f of filters){
            let newF = Object.assign({}, f)
            if(newF.name === filterName){
                newF.active = !f.active;
            }
            newFilters.push(newF)
        }
        setFilters(newFilters)
    }

    const filterButtons = filters.map( f => {
        let v= f.active? 'primary': 'outline-primary';

        return (
            <Form.Group key={f.name}>
            <Button
                variant={v}
                value={f.name}
                onClick={(e) => toggleFilter(e)}
            >
                {f.icon()}
                {' ' + f.name}
            </Button>
        </Form.Group>
        )
    });

    return (
        <Form>
            {filterButtons} 
        </Form>
    )
}

const MapComparerizer = ({data, inspectCitys, itineraryCitys, setItineraryCities, setInspectCitys}) => {
    const isIn = function(item,collection){
        return collection.indexOf(item) > -1;
    }

    var citys = data.cities.filter(x => isIn(x.name, inspectCitys));
    let buttonStyle = (bool) => bool? 'secondary': 'outline-secondary';

    var cityEntry = (city) => {
        var inItinerary = itineraryCitys.indexOf(city.name) > -1;
        
        var addToItinerary = (e) => {
            if (!inItinerary){
                let newItinerary = [...itineraryCitys]
                newItinerary.push(city.name)
                setItineraryCities(newItinerary)
            }
        }

        var removeFromInspect = (e) => {
            var newInspectCitys = inspectCitys.filter(x => x !== city.name)
            setInspectCitys(newInspectCitys)
        }

        return (
            <Row key={city.geoid} className={'top-buffer'}>
                <Col md={1}>
                    <Button variant={'danger'} size='sm' onClick={removeFromInspect}>
                            <FaTimes />
                    </Button>
                </Col>
                <Col md={1}>
                    {city.name}
                </Col>
                <Col>
                    {city.cases}
                </Col>
                <Col>
                    {city.pop}
                </Col>
                <Col>
                    <Button disabled={true} variant={buttonStyle(city.maskMandate)}><FaMask/></Button>
                    <Button disabled={true} variant={buttonStyle(!city.schoolsOpen)}><FaSchool/></Button>
                    <Button disabled={true} variant={buttonStyle(!city.restaurantsOpen)}><FaHamburger/></Button>
                </Col>
                <Col>
                    <Button disabled={inItinerary} onClick={(e) => addToItinerary(e)}> <FaPlus/> </Button>
                </Col>
    
            </Row>
    )}
    return(
        <div id='mapCompare'>
            <h4>Compare Cities</h4>
            <Container className={'compareList'} fluid md={4}>
                <Row>
                    <Col md={1}><div className='compareHeader'></div></Col>
                    <Col md={1}><div className='compareHeader'>City</div></Col>
                    <Col ><div className='compareHeader'>Cases</div></Col>
                    <Col ><div className='compareHeader'>Pop.</div></Col>
                    <Col ><div className='compareHeader'>Mandates</div></Col>
                    <Col  ><div className='compareHeader'>To Itinerary</div></Col>
                </Row>
                {citys.map(cityEntry)}
            </Container>
        
        </div>
    )
}

const Itinerary = ({startCity, destinationCity, itineraryCitys,setItineraryCities}) => {

    var makeStop = function(name, isStop){
        var circleClass = isStop? 'city-itinerary':'city-primary';
        var removeFromItinerary = function(){
            var newItinerary = itineraryCitys.filter(x => x !== name)
            setItineraryCities(newItinerary)
        }

        return (
            <Row className={'top-buffer text-left'} key={name} md={12}>
                <Col md={1}>
                    <svg height={16} width={16}><circle r={7} cx={8} cy={8} className={circleClass}>
                        </circle>
                    </svg>
                </Col>
                <Col>{name}</Col>
                <Col md={3}>
                    <Button disabled={!isStop} variant={'danger'} size='sm' onClick={removeFromItinerary}>
                        <FaTimes />
                    </Button>
                </Col>
            </Row>
        )
    }
    const cityStops = itineraryCitys.map(x => makeStop(x,true))

    return(
        <div id='itinerary'>
            <h4>Itinerary</h4>
            <Container>
                {makeStop(startCity,false)}
                {cityStops}
                {makeStop(destinationCity,false)}
                <Button variant='success'>
                    Export Trip
                </Button>
            </Container>
        </div>
    )
}

export default function Map() {
    const [data, setData] = useState({'countys': [], 'cities': []});

    let defaultFilters = [
        {name: 'Mask Mandate', active: false, icon: () => {return (<FaMask/>)}},
        {name: "Schools Closed", active: false, icon: () => {return (<FaSchool/>)}},
        {name: 'No Indoor Dining', active: false, icon: () => {return (<FaHamburger/>)}},
    ]
    const [filters, setFilters] = useState(defaultFilters);
    const [startCity, setStartCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [inspectCitys, setInspectCitys] = useState([]);
    const [itineraryCitys, setItineraryCities] = useState([]);

    const colorMap = new ColorMap({interpolator: d3.interpolateReds, transform: x => (x.cases/x.cvap)**.5});

    const fetchData = async () => {
        const res = await fetch("https://raw.githubusercontent.com/tehwentzel/cd_map/master/resources/countys_with_cities_hci.json")
        var data = await res.json();
        data = addFakeCityFeatures(data);
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
    <Container fluid={'lg'}>
        <Row md={12}>
            <Col md={2}>
                <Row md={12}>
                    <div id='mapControls'>
                        <h5>Find a Route</h5>
                        <SelectCity 
                            cityData={data.cities} 
                            startCity={startCity} 
                            destinationCity={destinationCity}
                            setDestinationCity={setDestinationCity}
                            setStartCity={setStartCity}
                        />
                    </div>
                    <div id='mapFilters'>
                        <h5>Only Show Cities With</h5>
                        <Filters
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>
                </Row>
            </Col>
            <Col md={10}>
                <Row md={12}>
                    <Col md={9}>
                        <div id='covidMap'>
                            <CovidMap
                                data={data}
                                startCity={startCity}
                                destinationCity={destinationCity}
                                filters={filters}
                                inspectCitys={inspectCitys}
                                itineraryCitys={itineraryCitys}
                                setInspectCitys={setInspectCitys}
                                colorMap ={colorMap}
                            />
                        </div>
                    </Col>
                    <Col md={3}>
                        <Itinerary
                            startCity={startCity}
                            destinationCity={destinationCity}
                            itineraryCitys={itineraryCitys}
                            setItineraryCities={setItineraryCities}
                        ></Itinerary>
                    </Col>
                </Row>
                <Row md={12}>
                    <div id='mapCompare'>
                        <MapComparerizer
                            data={data}
                            inspectCitys={inspectCitys}
                            setItineraryCities={setItineraryCities}
                            setInspectCitys={setInspectCitys}
                            itineraryCitys={itineraryCitys}
                        />
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}

function addFakeCityFeatures(data){
    var newData = Object.assign({}, data);
    let randomBoolean = (p) => {
        if( p === undefined){
            p = .5;
        }
        let num = Math.random()
        return num >= p
    }
    for(let city of newData.cities){
        let parentCounty = newData.countys.filter( c => parseInt(c.GEOID) === parseInt(city.geoid));
        try {
            parentCounty = parentCounty[0]
            city.maskMandate = parentCounty.mask_score > .8;
            city.cases = parseInt(parentCounty.cases * (city.pop/parentCounty.cvap));
            city.schoolsOpen = parentCounty.net_dem_president_votes < 15000;
            city.restaurantsOpen = parentCounty.net_dem_president_votes < 0;
        } catch{
            console.log('bad county in fake data making', parentCounty)
            city.maskMandate = randomBoolean(.6);
            city.cases = parseInt(Math.random()*.05*city.pop);
            city.schoolsOpen = randomBoolean(.4);
            city.restaurantsOpen = randomBoolean(.5);
        }
        finally {}
    }
    return newData
}