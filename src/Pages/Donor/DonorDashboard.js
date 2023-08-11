import React from 'react';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: '20px',
    height: '100vh', // Set the height to 100% of the viewport height
  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px 0',
    background: 'blue',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  const imageContainerStyle = {
    width: '40%', 
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const pictureStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'url("/home/moringa/Development/code/phase-5/Charity-Bridge/src/Assets/Images/donors.jpeg") center/cover no-repeat',
  };

  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px', color: 'red' }}>Welcome to Donor Dashboard</h1>
      <div style={containerStyle}>
        <div style={buttonsContainerStyle}>
          <Link to="/ngoDonationRequests" style={buttonStyle}>
            View Donation Requests
          </Link>
          <Link to="/Navbar" style={buttonStyle}>
            View Donation History
          </Link>
          <Link to="/makedonation" style={buttonStyle}>
            Make a Donation
          </Link>
          <Link to="/logout" style={buttonStyle}>
            Logout
          </Link>
        </div>
        <div style={imageContainerStyle}>
          <div style={pictureStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;
