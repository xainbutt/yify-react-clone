import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../../assets/images/logo.png')

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo"><img src={logo} style={{marginTop: '5px', marginLeft: '10px'}} alt=""/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Browse Movies</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to='/signup' >Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;