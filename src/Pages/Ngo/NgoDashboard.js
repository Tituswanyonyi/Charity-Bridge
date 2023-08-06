import React from 'react';
import { Link } from 'react-router-dom';

const NgoDashboard = () => {
  return (
    <div>
      <h1>Welcome to Ngo Dashboard</h1>
      <ul>
        <li>
          <Link to="/donationrequests">View Donation Requests</Link>
        </li>
        <li>
          <Link to="/donationsreceived">Donations Received</Link>
        </li>
        <li>
        <Link to="/Navbar">Home</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default NgoDashboard;