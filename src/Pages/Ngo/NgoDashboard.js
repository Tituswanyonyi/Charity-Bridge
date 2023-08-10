import React from 'react';
import { Link } from 'react-router-dom';

const NgoDashboard = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f2f2f2', padding: '20px' }}>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Welcome to Ngo Dashboard</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link to="/ngoDonationRequests" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Donation Requests</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/donationsreceived" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Donations Received</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/Navbar" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/logout" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Logout</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/DonationRequests" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Donation Requests</Link>
        </li>
      </ul>
    </div>
  );  
};

export default NgoDashboard;