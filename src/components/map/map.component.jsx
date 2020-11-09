import React from 'react';
import './map.styles.css';
import CovidMap from './map.d3.component';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Map extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        new CovidMap(this.refs.chart)
    }

    render(){
        return (
        <Container fluid={'lg'}>
            <Row md={12}>
                <Col md={3}>
                    <div id='mapControls'>
                        <h4>Controls</h4>
                    </div>
                </Col>
                <Col md={9}>
                    <Row md={12}>
                        <Col md={9}>
            `               <div id='map'>
                                <h4>Select A County</h4>
                                <div ref="chart" ></div>
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
}

export default Map;