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
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/ngoDonationRequests">ngoDonatioRequests</Link>
        </li>
        <li>
          <Link to="/ViewDonations">View Donations</Link>
        </li>
        <li>
          <Link to="/Navbar">History</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>

      <h2>NGOs</h2>
      {ngos.map((ngo) => (
        <DeleteButton key={ngo.id} item={ngo} onDelete={() => handleRemoveNgo(ngo.id)} />
      ))}

      <h2>Donors</h2>
      {donors.map((donor) => (
        <DeleteButton key={donor.id} item={donor} onDelete={() => handleRemoveDonor(donor.id)} />
      ))}
    </div>
  );
}

export default AdminDashboard;
