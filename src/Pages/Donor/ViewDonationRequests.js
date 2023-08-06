import React from 'react';

const ViewDonationRequests = ({ donationRequests }) => {
  return (
    <div>
      <h1>View Donation Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>NGO ID</th>
            <th>Amount Requested</th>
            <th>Date of Donation</th>
          </tr>
        </thead>
        <tbody>
          {donationRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.title}</td>
              <td>{request.ngoId}</td>
              <td>{request.description}</td>
              <td>{request.amountRequested}</td>
              <td>{request.dateOfDonation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDonationRequests;