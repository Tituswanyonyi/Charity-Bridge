
import React, { useState, useEffect } from 'react';

function ViewDonationRequests () {
  const [donationRequests, setDonationRequests] = useState([]);
  useEffect(() => {
    // Fetch donation requests data from the Flask server
    fetch('http://localhost:5000/ngo_donation_requests')
      .then(response => response.json())
      .then(data => setDonationRequests(data))

      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(donationRequests)
  return (
    <div>
      <h2>Donation Requests</h2>
      <table>
        {donationRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.org_name}</td>
              <td>{request.org_email}</td>
              <td>{request.donation_purpose}</td>
              <td>{request.amount}</td>
              <td>{request.date}</td>
              <td>{request.ngo_id}</td>
              <td>{request.admin_id}</td>
             
            </tr>
          ))}
      </table>
    </div>
  );
}

export default ViewDonationRequests;
