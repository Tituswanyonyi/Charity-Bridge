
import React, { useState, useEffect } from 'react';

function ViewDonations() {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    // Fetch donation requests data from the Flask server
    fetch('http://localhost:5000/donations')
      .then(response => response.json())
      .then(data => setDonations(data))

      .catch(error => console.error('Error fetching data:', error));
  }, []);
  // console.log(donations)

  return (
    <div>
      <h2>Donations</h2>
      <table>
      {donations.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.donor_name}</td>
              <td>{request.bank_name}</td>
              <td>{request.donated_amount}</td>
              <td>{request.date_of_donation}</td>
              <td>{request.balance}</td>
              <td>{request.donor_id}</td>
              <td>{request.ngo_id}</td>
              <td>{request.admin_id}</td>
            </tr>
          ))}
        
      </table>
    </div>
  );
}

export default ViewDonations;
