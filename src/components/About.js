import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">CharityBridge</h1>
            <p className="about-description">
            At CharityBridge, our mission is to create a seamless and impactful platform that connects charitable organizations, generous donors, and dedicated NGOs to make a real difference in the world. Our user-friendly app serves as a bridge between those in need and those with a compassionate heart, empowering everyone to contribute to meaningful causes and create positive social change.
            </p>
            <p className="about-login-link">
                <Link to="/login" className="login-link">Login</Link> to get started.
            </p>
        </div>
    );
};

export default About;