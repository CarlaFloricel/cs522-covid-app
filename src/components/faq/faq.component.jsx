import React from 'react';
import './faq.styles.css';
import {Question} from './question.component';


class Faq extends React.Component {
    constructor(){
        super();
        this.state = {
            searchField:''
        }
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
    return(
            
            <div>
                <input
                className="search-bar"
                type='search'
                placeholder='Search'
                onChange={e => this.setState({searchField: e.target.value})}>
                </input>
                {questions_type.map((i,iKey) => (
                   i.items.length>0 ?
                    <div className='faq-list' key={iKey}>
                    <h3 className="faq_element">{i.name}</h3>
                    <Question list = {i.items}/>
                    </div>
                : <div key={iKey}></div>
                ))}
            </div>
        )
    }
}

export default Faq;