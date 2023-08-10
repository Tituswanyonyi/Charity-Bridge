import React from 'react';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
  <h1 style={{ fontSize: '24px', marginBottom: '10px', color: 'red' }}>Welcome to Donor Dashboard</h1>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li style={{ margin: '10px 0' }}>
      <Link to="/ngoDonationRequests" style={{ textDecoration: 'none', color: 'blue' }}>
        View Donation Requests
      </Link>
    </li>
    <li style={{ margin: '10px 0' }}>
      <Link to="/makedonation" style={{ textDecoration: 'none', color: 'blue' }}>
        Make a Donation
      </Link>
    </li>
    <li style={{ margin: '10px 0' }}>
      <Link to="/Navbar" style={{ textDecoration: 'none', color: 'blue' }}>
        View Donation History
      </Link>
    </li>
    <li style={{ margin: '10px 0' }}>
      <Link to="/logout" style={{ textDecoration: 'none', color: 'blue' }}>
        Logout
      </Link>
    </li>
  </ul>
</div>

  );
}

export default DonorDashboard;
