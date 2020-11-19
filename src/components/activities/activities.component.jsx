import React from 'react';
import './activities.styles.css';
import image from './activities.JPG';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const activityData = [
    {type: "Outdoor", name: "Loungin on the Beach", risk: ['high','medium','low','low']},
    {type: "Outdoor", name: "Swimming", risk: ['high','medium','low','low']},
    {type: "Outdoor", name: "Running/Biking", risk: ['high','low','low','low']},
    {type: "Outdoor", name: "Walking", risk: ['high','low','low','low']},
    {type: "Outdoor", name: "Camping", risk: ['high','medium','low','low']},
    {type: "Outdoor", name: "Dining", risk: ['high','high','medium','low']},
    {type: "Outdoor", name: "Concert/Sports", risk: ['high','high','medium','low']},

    {type: "Socializing", name: "Office work", risk: ['high','medium','low','low']},
    {type: "Socializing", name: "Indoor Dining", risk: ['high','medium','low','low']},
    {type: "Socializing", name: "Religious Gathering", risk: ['high','low','low','low']},
    {type: "Socializing", name: "Bar", risk: ['high','low','low','low']},
    {type: "Socializing", name: "Visiting Friends", risk: ['high','medium','low','low']},
    {type: "Socializing", name: "Indoor Party", risk: ['high','high','medium','low']},

    {type: "Travel", name: "Hotel stay", risk: ['high','medium','low','low']},
    {type: "Travel", name: "Public Transport", risk: ['high','low','low','low']},
    {type: "Travel", name: "Taxi/Uber", risk: ['high','low','low','low']},
    {type: "Travel", name: "Flying", risk: ['high','medium','low','low']},

    {type: "Comercial", name: "Retail Stores", risk: ['high','medium','low','low']},
    {type: "Comercial", name: "Groceries", risk: ['high','medium','low','low']},
    {type: "Comercial", name: "Haircut/Salon", risk: ['high','low','low','low']},
    {type: "Comercial", name: "Ordering Takeout", risk: ['high','low','low','low']},
    {type: "Comercial", name: "Gym", risk: ['high','medium','low','low']},
]

class Activities extends React.Component {
    constructor(props){
        super();
        this.state = {
            selectedActivityType: 'Outdoor',
            data: activityData,
        }
    
    }

    componentDidMount(){
    }

    getTable(tableKey){
        var tableItems = activityData.filter(x => x.type === tableKey)
        var getRiskRows = (r,i) => {
            var cName = 'riskSquare ' + r + 'Risk';
            return (<td key={i} className={cName}></td>)
        }


        var activityRow = (item) => {
            const riskRow = item.risk.map(getRiskRows)
            return (
                <tr>
                    <td>{item.name}</td>
                    {riskRow}
                </tr>
            )
        }

        const tableRows = tableItems.map( activityRow)

        return (
            <Tab eventKey={tableKey} title={tableKey}>
                <Table className='activitys'>
                    <thead>
                        <tr>
                            <th>Social Distancing</th>
                            <th>Impossible</th>
                            <th>Difficult</th>
                            <th>Moderate</th>
                            <th>Easy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </Tab>
        )
    }

    render(){

        var activityTypes = this.state.data
            .map(x => x.type)
            .filter((d,i,self) => self.indexOf(d) === i);


        var riskTables = activityTypes.map( i => this.getTable(i))

        return (
            <Container fluid="md" id='activityBody'>
                    <div ><h3>Risk Factors of Common Activities</h3></div>


                    
                    <div className="legend-container">
                    <Col className={"activityLegend"} md={1}>
                        <h6>Low</h6>
                        <div className={'square lowRisk'}/>
                       
                    </Col>
                    <Col className={"activityLegend"} md={1}>
                        <h6>Medium</h6>
                        <div className={'square medRisk'}/>
                    </Col>
                    <Col className={"activityLegend"} md={1}>
                        <h6>High</h6>
                        <div className={'square highRisk'}/>
                    </Col>
                    </div>

                <Row className="activityTable" >
                    <Col>
                        <Tabs defaultActiveKey={activityTypes[0]}>
                            {riskTables}
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Activities;