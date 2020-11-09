import React from 'react';
import './homepage.styles.css';
import mapImg from './map.jpg';
import activitiesImg from './activities.jpg';
import vaccinesImg from './vaccines.png';
import faqImg from './faq.jpg';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            menuItems: [
               {
                   title: "Safe Travel",
                   imageUrl: './activities.JPG',
                   id: 1,
                   url: mapImg
               },
               {
                    title: "Vaccines",
                    imageUrl: './map.jpg',
                    id: 2,
                    url: vaccinesImg
                },
                {
                    title: "Activities",
                    imageUrl: './map.jpg',
                    id: 3,
                    url: activitiesImg
                },
                {
                    title: "FAQ",
                    imageUrl: './map.jpg',
                    id: 4,
                    url: faqImg
                },
            ]
        }
    }


    render(){
        return(  
        <div className='homepage'>
            <div className='directory-menu'>
                {
                this.state.menuItems.map( item => (
                    <div className='menu-item' key={item.id} style={{backgroundImage: `url(${item.url})`}}>
                        <div className='content'>
                            <button key={item.id} type="button" className="btn btn-info btn-lg"
                                onClick={() => this.props.history.push(`${item.url}`)}>
                            {item.title}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}
export default HomePage;