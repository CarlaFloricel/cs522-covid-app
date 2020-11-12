import React, {useState, useEffect} from 'react';
import './map.styles.css';
import CovidMap from './map.d3.component';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

// 'https://raw.githubusercontent.com/tehwentzel/cd_map/master/resources/countys_with_cities_hci.json'


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
            <ul className="list-unstyled">
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
        <Dropdown.Item eventKey={city.name} onClick={(e) => onclick(e.target.innerHTML)}>{city.name}</Dropdown.Item>
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

const SelectCity = ({cityData, startCity, destinationCity,setDestinationCity,setStartCity}) =>{
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

export default function Map() {
    const [data, setData] = useState({'countys': [], 'cities': []});
    const [filters, setFilters] = useState([])
    const [startCity, setStartCity] = useState('New York')
    const [destinationCity, setDestinationCity] = useState('Los Angeles')
    const [inspectCitys, setInspectCitys] = useState(['Chicago'])
    const [itineraryCitys, setItineraryCities] = useState([])

    const fetchData = async () => {
        const res = await fetch("https://raw.githubusercontent.com/tehwentzel/cd_map/master/resources/countys_with_cities_hci.json")
        const data = await res.json();
        console.log('mapdata', data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
    <Container fluid={'lg'}>
        <Row md={12}>
            <Col md={3}>
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
                        <h5>Filters</h5>
                    </div>
                </Row>
            </Col>
            <Col md={9}>
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
                            />
                        </div>
                    </Col>
                    <Col md={3}>
                        <div id='itinerary'>
                            <h4>Itinerary</h4>
                        </div>
                    </Col>
                </Row>
                <Row md={12}>
                    <div id='mapCompare'>
                        <h4>Compare Cities</h4>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}
