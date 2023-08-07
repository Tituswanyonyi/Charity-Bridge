import React from 'react';

const DonationReceived = () => {
  // Sample data of received donations
  const donations = [
    { id: 1, ngoId: 'NGO001', title: 'Education Program', amount: 500, date: '2023-08-01' },
    { id: 2, ngoId: 'NGO002', title: 'Healthcare Project', amount: 1000, date: '2023-08-02' },
  ];

  return (
    <div>
      <h2>Received Donations</h2>
      <table>
        <thead>
          <tr>
            <th>NGO ID</th>
            <th>Title</th>
            <th>Amount Received</th>
            <th>Date of Donation</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.ngoId}</td>
              <td>{donation.title}</td>
              <td>${donation.amount}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationReceived;