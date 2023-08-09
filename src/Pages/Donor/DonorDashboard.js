import React from 'react';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  return (
    <div>
      <h1>Welcome to Donor Dashboard</h1>
      <ul>
        <li>
          <Link to="/ngoDonationRequests">View ngoDonationRequests</Link>
        </li>
        <li>
          <Link to="/makedonation">Make a Donation</Link>
        </li>
        <li>
        <Link to="/Navbar">View Donation History</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DonorDashboard;
