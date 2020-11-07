import React from 'react';
import './homepage.styles.css';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            menuItems: [
               {
                   title: "Safe Travel",
                   imageUrl: '',
                   id: 1,
                   url: '/map'
               },
               {
                    title: "Vaccines",
                    imageUrl: '',
                    id: 2,
                    url: '/vaccines'
                },
                {
                    title: "Daily Activity",
                    imageUrl: '',
                    id: 3,
                    url: '/activities'
                },
                {
                    title: "FAQ",
                    imageUrl: '',
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
                    <div className='menu-item' key={item.id}>
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