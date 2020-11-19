import React from 'react';
import './faq.styles.css';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export const Question = (props) => {
    //new andrew code with accordions and bootstrap? 
    if (props.list === undefined){
        return <div key="none"></div>
    }
    const accordionCards = props.list.map( (i,idx) => (
        <Card key={idx}>
            <Accordion.Toggle className='questionCard' as={Card.Header} eventKey={''+idx}>
                {i.question}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={''+idx}>
                <Card.Body className="replyCard">
                    <div>{i.reply}</div>
                    <a href={i.link}> Click here for more information</a>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    ))

    var qKey = props.list[0].type;
    return (
        <Accordion key={qKey}>
            {accordionCards}
        </Accordion>
    )

    // carla's original code
    // return (<div>
    //  { props &&  props.list.map(i => (
    //                 <div className="question-container">
    //                     <div>
    //                 <h5 className="question">{i.question}</h5>
    //                 <div className="reply">{i.reply}</div>
    //                 </div>
    //                 </div>
                    
    //             ))
    //  }
    // </div>)
}