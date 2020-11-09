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
                   imageUrl: mapImg,
                   id: 1,
                   url: '/map'
               },
               {
                    title: "Vaccines",
                    imageUrl: vaccinesImg,
                    id: 2,
                    url: '/vaccines'
                },
                {
                    title: "Activities",
                    imageUrl: activitiesImg,
                    id: 3,
                    url: '/activities'
                },
                {
                    title: "FAQ",
                    imageUrl: faqImg,
                    id: 4,
                    url: '/faq'
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
                    <div className='menu-item' key={item.id} style={{backgroundImage: `url(${item.imageUrl})`}}>
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