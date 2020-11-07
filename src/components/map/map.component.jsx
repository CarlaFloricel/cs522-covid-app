import React from 'react';
import './map.styles.css';
import D3DummyChart from './map.d3.component';

class Map extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        new D3DummyChart(this.refs.chart)
    }

    render(){
        return (
        <div>
            <h1>MAP</h1>
            <div ref="chart"></div>
        </div>
        )
        
    }
}

export default Map;