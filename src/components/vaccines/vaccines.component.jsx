import React from 'react';
import './vaccines.styles.css';
import D3DummyChart from './vaccines.d3.component';
// import VaccineDetails from './vaccines.details.component';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Vaccines extends React.Component {
    constructor(){
        super();
        this.chart = React.createRef();
        this.details = React.createRef();
        this.legend = React.createRef();
        this.state = {

        }
    }

    componentDidMount(){
        new D3DummyChart(this.chart.current, this.legend.current, this.details.current)
        // new VaccineDetails(this.details.current)
    }
    // componentDidMount(){
        
    // }

    render(){
        return (
            <Container>
                <Row><Col><h1>VACCINES Timeline</h1></Col></Row>
                <Row>
                    <Col md={8}><div ref={this.chart}></div></Col>
                    <Col md={4}><div ref={this.legend}></div></Col>
                </Row>
                <Row className="details">
                    <Col><div ref={this.details}>
                        <h3>Vaccine Details</h3>
                        <div>Click on the Bars to see details</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            )
            
        }
}

export default Vaccines;