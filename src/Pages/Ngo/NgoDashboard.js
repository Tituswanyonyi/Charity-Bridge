import React from 'react';
import { Link } from 'react-router-dom';

const NgoDashboard = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const buttonStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    display: 'block',
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imagesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <h1 style={{ color: 'blue', fontSize: '24px' }}>Welcome to Ngo Dashboard</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/ngoDonationRequests" style={buttonStyle}>Donation Requests</Link>
          </li>
          <li>
            <Link to="/donationsreceived" style={buttonStyle}>Donations Received</Link>
          </li>
          <li>
            <Link to="/Navbar" style={buttonStyle}>Home</Link>
          </li>
          <li>
            <Link to="/logout" style={buttonStyle}>Logout</Link>
          </li>
          <li>
            <Link to="/DonationRequests" style={buttonStyle}>Donation Requests</Link>
          </li>
        </ul>
      </div>
      <div style={imagesContainerStyle}>
        <img src="src/Assets/Images/ngo.png" alt="ngo" style={imageStyle} />
        <img src="/home/moringa/Development/code/phase-5/Charity-Bridge/src/Assets/Images/envi.jpeg" alt="Image 2" style={imageStyle} />
      </div>
    </div>
  );
};

export default NgoDashboard;
