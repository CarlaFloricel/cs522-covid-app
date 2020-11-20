import React from 'react';
import './faq.styles.css';
import {Question} from './question.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const links = [
    {category: 'Official Resources', linkList: [
        {title: 'CDC Resources', url: 'https://www.cdc.gov/coronavirus/2019-ncov/your-health/need-to-know.html'},
        {title: "WHO Resources", url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'},
        {title: "NIH Resources", url: 'https://www.nih.gov/coronavirus'}
    ]},
    {category: 'Covid Case Trackers', linkList: [
        {title: 'John Hopkins Covid Tracker', url: 'https://coronavirus.jhu.edu/us-map'},
        {title: 'NPR Coronavirus By Numbers', url: 'https://www.npr.org/sections/health-shots/2020/09/01/816707182/map-tracking-the-spread-of-the-coronavirus-in-the-u-s'},
        {title: 'NYT Interactive Map and Cases', url: 'https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html'},
        {title: 'CMU CovidCast', url: 'https://covidcast.cmu.edu/?sensor=doctor-visits-smoothed_adj_cli&level=county&date=20200917&signalType=value&encoding=color&mode=overview&region=42003'}
    ]},
    {category: 'Vaccines', linkList: [
        {title: 'NYT Vaccine Tracker', url: 'https://www.nytimes.com/interactive/2020/science/coronavirus-vaccine-tracker.html'},
        {title: 'CDC Vaccine Planning', url: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/8-things.html'},
        {title: 'HHS Operation Warp Speed', url: 'https://www.hhs.gov/coronavirus/explaining-operation-warp-speed/index.html'}
    ]}
]

class Faq extends React.Component {
    constructor(){
        super();
        this.state = {
            searchField:''
        }
    }


    createLinks(links){

        var toLink = (linkItem) => {
            return (
                <a className={'externalResource'} href={linkItem.url}>{linkItem.title}</a>
            )
        }

        var toLinkGroup = (linkGroup) => {
            var links = linkGroup.linkList.map(toLink)
            return (
                <ListGroup.Item>
                    <Card.Title>
                    {linkGroup.category}
                    </Card.Title>
                    <Card.Text className={'externalResource'}>
                        {links}
                    </Card.Text>
                </ListGroup.Item>
            )
        }

        return (
            <Card>
                <Card.Header as="h4">External Resources</Card.Header>
                <ListGroup>
                    {links.map(toLinkGroup)}
                </ListGroup>
            </Card>
        )  
    }


    render(){
        const d = require('./faq.data.json')

        const basics_q = d.filter(q => q.type === "Basics").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const spread_q = d.filter(q => q.type === "Spread").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const prevention_q = d.filter(q => q.type === "Prevention").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const preparing_q = d.filter(q => q.type === "Preparing for an Outbreak").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const symptoms_q = d.filter(q => q.type === "Symptoms & Emergency Warning Signs").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const testing_q = d.filter(q => q.type === "Testing").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const children_q = d.filter(q => q.type === "Children").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const risk_q = d.filter(q => q.type === "People at higher risk for severe illness").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))
        const contact_q = d.filter(q => q.type === "Contact tracing").filter(q => 
            q.question.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase()))

        const questions_type = [{name: "Basics", items: basics_q}, {name: "Spread", items: spread_q}, 
                                {name: "Prevention", items: prevention_q}, {name: "Preparing for an Outbreak", items: preparing_q},
                                {name: "Symptoms & Emergency Warning Signs", items: symptoms_q},
                                {name: "Testing", items: testing_q}, {name: "Children", items: children_q},
                                {name: "People at higher risk for severe illness", items: risk_q}, {name: "Contact tracing", items: contact_q}]

        const resourceLinks = this.createLinks(links);
    return(
        <Container fluid='lg'> 
            <Row md={12}>
                <Col md={12}>
                <input
                    className="search-bar"
                    type='search'
                    placeholder='Search'
                    onChange={e => this.setState({searchField: e.target.value})}>
                    </input>
                </Col>
            </Row>
            <Row md={12}>
                <Col md={8} className={'scrollWindow'}>
                    {questions_type.map((i,iKey) => (
                    i.items.length>0 ?
                        <div className='faq-list' key={iKey}>
                        <h3 className="faq_element">{i.name}</h3>
                        <Question list = {i.items}/>
                        </div>
                    : <div key={iKey}></div>
                    ))}
                </Col>
                <Col md={4} className={'externalLinks'}>
                    {resourceLinks}
                </Col>
            </Row>
        </Container>  
        )
    }
}

export default Faq;