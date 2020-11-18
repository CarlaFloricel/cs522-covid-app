import React from 'react';
import './homepage.styles.css';
import mapImg from './map.jpg';
import activitiesImg from './activities.jpg';
import vaccinesImg from './vaccines.png';
import faqImg from './faq.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends React.Component {
    constructor(props){
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
        const navButtons = this.state.menuItems.map( (item,idx) => (
            <Col key={idx} md={6}>
                <div 
                    className='menu-item' 
                    key={item.id} 
                    style={{backgroundImage: `url(${item.imageUrl})`}}
                    onClick={() => this.props.history.push(`${item.url}`)}
                >
                    <div className='content navButtonText'>
                        {item.title}
                    </div>
                </div>
            </Col>
        ))

        return(  
        <div className='homepage'>
            <Container className='directory-menu' fluid>
                <Row md={12}>
                    {navButtons}
                </Row>
            </Container>
        </div>
        )
    }
}
export default HomePage;