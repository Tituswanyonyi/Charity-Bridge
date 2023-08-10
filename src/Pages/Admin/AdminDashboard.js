import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function AdminDashboard() {
  const [ngos, setNgos] = useState([
    { id: 1, name: 'NGO 1', description: 'Description for NGO 1' },
    { id: 2, name: 'NGO 2', description: 'Description for NGO 2' },
  ]);

  const [donors, setDonors] = useState([
    { id: 1, name: 'Donor 1', email: 'donor1@example.com' },
    { id: 2, name: 'Donor 2', email: 'donor2@example.com' },
  ]);

  const [ngo_donation_requests, setNgoDonationRequests] = useState([
    { id: 1, amount: 100, donorId: 1 },
    { id: 2, amount: 200, donorId: 2 },
    // ... more donation request objects
  ]);

  const [donations, setDonations] = useState([
    { id: 1, amount: 500, ngoId: 1 },
    { id: 2, amount: 1000, ngoId: 2 },
  ]);

  const handleRemoveNgo = (ngoId) => {
    const updatedNgos = ngos.filter((ngo) => ngo.id !== ngoId);
    setNgos(updatedNgos);

    // Remove related donation requests and donations
    const updatedDonationRequests = ngo_donation_requests.filter((request) => request.donorId !== ngoId);
    setNgoDonationRequests(updatedDonationRequests);

    const updatedDonations = donations.filter((donation) => donation.ngoId !== ngoId);
    setDonations(updatedDonations);
  };

  const handleRemoveDonor = (donorId) => {
    const updatedDonors = donors.filter((donor) => donor.id !== donorId);
    setDonors(updatedDonors);

    // Remove related donation requests
    const updatedDonationRequests = ngo_donation_requests.filter((request) => request.donorId !== donorId);
    setNgoDonationRequests(updatedDonationRequests);
  };

  return (
      <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px', color: 'red' }}>Welcome to Admin Dashboard</h1>
        <ul style={{ listStyle: 'none', padding: '0', marginBottom: '20px' }}>
          <li style={{ margin: '5px 0' }}>
            <Link to="/ngoDonationRequests" style={{ textDecoration: 'none', color: '#007BFF' }}>ngoDonationRequests</Link>
          </li>
          <li style={{ margin: '5px 0' }}>
            <Link to="/ViewDonations" style={{ textDecoration: 'none', color: '#007BFF' }}>View Donations</Link>
          </li>
          <li style={{ margin: '5px 0' }}>
            <Link to="/Navbar" style={{ textDecoration: 'none', color: '#007BFF' }}>History</Link>
          </li>
          <li style={{ margin: '5px 0' }}>
            <Link to="/logout" style={{ textDecoration: 'none', color: '#007BFF' }}>Logout</Link>
          </li>
        </ul>
    
        <h2 style={{ fontSize: '20px', marginBottom: '10px', color: 'red' }}>NGOs</h2>
        {ngos.map((ngo) => (
          <DeleteButton key={ngo.id} item={ngo} onDelete={() => handleRemoveNgo(ngo.id)} />
        ))}
    
        <h2 style={{ fontSize: '20px', marginBottom: '10px', color: 'red' }}>Donors</h2>
        {donors.map((donor) => (
          <DeleteButton key={donor.id} item={donor} onDelete={() => handleRemoveDonor(donor.id)} />
        ))}
      </div>
    );
    
}

export default AdminDashboard;
