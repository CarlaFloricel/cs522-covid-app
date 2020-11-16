import React from 'react';
import './vaccines.styles.css';
import D3DummyChart from './vaccines.d3.component';
import VaccineDetails from './vaccines.details.component';

class Vaccines extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        new D3DummyChart(this.refs.chart)
        new VaccineDetails(this.refs.details)
    }
    // componentDidMount(){
        
    // }

    render(){
        return (
            <div>
                <h1>VACCINES</h1>
                <div ref="chart"></div>
                <div ref="details"></div>
            </div>
            )
            
        }
}

export default Vaccines;