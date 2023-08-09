import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/signup" className="navbar-link">
                        Signup
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/Pages/Admin" className="navbar-link">
                        Admin
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/Pages/Donor" className="navbar-link">
                        Donor
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/Pages/Ngo" className="navbar-link">
                        Ngo
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;