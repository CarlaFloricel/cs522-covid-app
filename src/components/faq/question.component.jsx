import React from 'react';
import './faq.styles.css';

export const Question = (props) => {
    return (<div>
     { props &&  props.list.map(i => (
                    <div className="question-container">
                        <div>
                    <h5 className="question">{i.question}</h5>
                    <div className="reply">{i.reply}</div>
                    </div>
                    </div>
                    
                ))
     }
    </div>)
}