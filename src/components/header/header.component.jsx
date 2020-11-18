import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.css';

import Button from 'react-bootstrap/Button'

const navLinks = [
    {btnText: 'Safe Travel', btnId: 'map'},
    {btnText: 'Vaccines', btnId: 'vaccines'},
    {btnText: 'Activities', btnId: 'activities'},
    {btnText: 'FAQ', btnId: 'faq'}
]

const Header = (props) => {
    var currPage = (props.location === undefined)? '/' : props.location.pathname;

    var isButtonActive = (navItem) => {
        var isActive = (currPage == '/' + navItem.btnId);
        return isActive
    }
    
    var getNavButton = (navItem) => {
        var isActive = isButtonActive(navItem);
        var btnClass = isActive? 'outline-info':'info';
        return (
            <Link key={navItem.btnId} to={'/' + navItem.btnId} className="option">
                <Button variant={btnClass} disabled={isActive} className={'headerButton btn btn-lg'}>
                    {navItem.btnText}
                </Button>
            </Link>
        )
    }
    const navOptions = navLinks.map(getNavButton)

    const atHome = (currPage === '/');
    const homeVariant = atHome? 'outline-info': 'info';

    return (
        <div className="headerContainer">
            {/* <h1>Explore Covid-19</h1> */}
        <div className='header'>
            <Link to="/" className="logo-container">
                <Button disabled={atHome} variant={homeVariant} className={"headerButton btn btn-lg"}>
                    <i className="fa fa-home" ></i>
                    Home
                </Button>
            </Link>
            <div className='options'>
                {navOptions}
            </div>
        </div>
        </div>
    )
}

export default Header;