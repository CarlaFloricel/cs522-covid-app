import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const navLinks = [
    {btnText: 'Safe Travel', btnId: 'map'},
    {btnText: 'Vaccines', btnId: 'vaccines'},
    {btnText: 'Activities', btnId: 'activities'},
    {btnText: 'FAQ', btnId: 'faq'},
    {btnText: 'About Project', btnId: 'about'}
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

            <Nav.Link >
                <Link key={navItem.btnId} to={'/' + navItem.btnId} className="option">
                    <Button variant={btnClass} disabled={isActive} className={'headerButton btn btn-lg'}>
                        {navItem.btnText}
                    </Button>
                </Link>
            </Nav.Link>
        )
    }
    const navOptions = navLinks.map(getNavButton)

    const atHome = (currPage === '/');
    const homeVariant = atHome? 'outline-info': 'info';

    return (       
        <Navbar bg="#f0f8ff" style={{backgroundColor: '#f0f8ff'}} expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link >
            <Link to="/" className="option">
            <Button disabled={atHome} variant={homeVariant} className="btn btn-info btn-lg">
                 Home
            </Button>
            </Link>
            </Nav.Link>
            </Nav>
            {navOptions}

        </Navbar.Collapse>
        </Navbar>

    )
}

export default Header;