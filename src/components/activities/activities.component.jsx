import React from 'react';
import './activities.styles.css';
import image from './activities.JPG';


class Activities extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }


    render(){
        return(
            <div>
                <img src={image} alt="Logo" />;
            </div>
        )
    }
}

export default Activities;