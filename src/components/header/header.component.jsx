import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.css';


const Header = () => (
    <div className="headerContainer">
        <h1>Explore Covid-19</h1>
    <div className='header'>
        <Link to="/" className="logo-container">
        <button type="button" className="btn btn-info btn-lg">
        <i className="fa fa-home" ></i>
           Home
        </button>
        </Link>
        <div className='options'>
            <Link to="/map" className="option">
                <button type="button" className="btn btn-info btn-lg">
                 Safe Travel
                </button>
            </Link>
            <Link to="/vaccines" className="option" >
                <button type="button" className="btn btn-info btn-lg">
                 Vaccines
                </button>
            </Link>
            <Link to="/activities" className="option">
                <button type="button" className="btn btn-info btn-lg">
                 Activities
                </button>
            </Link>
            <Link to="/faq" className="option" > 
                <button type="button" className="btn btn-info btn-lg">
                 FAQ
                </button>
            </Link>
        </div>
    </div>
    </div>
)

export default Header;