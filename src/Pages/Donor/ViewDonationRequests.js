import React, { useState, useEffect } from 'react';
function ViewDonationRequests() {
  const [ngoDonationRequests, setNgoDonationRequests] = useState([]);
  useEffect(() => {
    // Fetch donation requests data from the Flask server
    fetch('/http://localhost:5000/ngoDonationRequests')
      .then(response => response.json())
      .then(data => setNgoDonationRequests(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <h2>Donation Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Amount</th>
            {/* ... */}
          </tr>
        </thead>
        <tbody>
          {ngoDonationRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.orgName}</td>
              <td>{request.orgEmail}</td>
              <td>{request.donationPurpose}</td>
              <td>{request.amount}</td>
              <td>{request.date}</td>
              <td>{request.ngoId}</td>
              <td>{request.adminId}</td>
              {/* ... */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewDonationRequests;






