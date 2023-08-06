import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">
                        Register
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;