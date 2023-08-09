import React, { useState, useEffect } from "react";
// import NavBar from "./NavBar";
// import "./New.css";

const NewNgoDonationRequest = () => {
  const [ngoDonationRequests, setNgoDonationRequests] = useState([]);
  const [formData,setFormData] = useState({
    request_id:"",
    org_name:"",
    org_email:"",
    project_name : "",
    donation_purpose :"",
    amount: "",
    date:"",
    ngo_id : "",
    admin_id:""

  })


  useEffect(() => {
    fetchNgoDonationRequests();
  }, []);

  const fetchNgoDonationRequests = () => {
    fetch("http://127.0.0.1:5000/ngo_donation_requests")
      .then((response) => response.json())
      .then((ngoDonationRequests) => {
        setNgoDonationRequests(ngoDonationRequests);
      })
      .catch((error) => console.error("Error fetching ngoDonationRequests:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const recipe = { name, ingredients, description, image };
    if (window.confirm("Are you sure you want to submit?")) {
      fetch("http://127.0.0.1:5000/ngo_donation_requests", {
        method: "POST",                
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("newNgoDonationRequest added:", data);
          addNgoDonationRequests(data)
          fetchNgoDonationRequests(); // Fetch the updated list of recipes
        })
        .catch((error) => console.error("Error adding ngoDonationRequest:", error));
    }
  };
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value
    })
  
  }
  function addNgoDonationRequests(newNgoDonationRequest){
    setNgoDonationRequests ([
      ...ngoDonationRequests,newNgoDonationRequest
    ])
    
    

  }



  return (
    <div className="create">
      {/* <NavBar /> */}
      <form onSubmit={handleSubmit}>
        <h3 id="logo">Donation Request</h3>
        {/* <label>request_id:</label>
        <input
          type="text"
          value={formData.request_id}
          onChange={handleChange}
          name = "Request_id"
          required
        /> */}
        <label>org_name:</label>
        <input
          type="text"
          value={formData.org_name}
          onChange={handleChange}
          name = "org_name"
          required
        />
        <label>org_email:</label>
        <input
          type="text"
          value={formData.org_email}
          onChange={handleChange}
          name = "org_email"
          required
        />
        <label>project_name:</label>
        <input
          type="text"
          value={formData.project_name}
          onChange={handleChange}
          name = "project_name"
          required
        />
        
        <label>donation_purpose:</label>
        <input
          type="text"
          value={formData.donation_purpose}
          onChange={handleChange}
          name = "donation_purpose"
          required
        />
        <label>date_of_donation:</label>
        <input
          type="text"
          value={formData.date_of_donation}
          onChange={handleChange}
          name = "date_of_donation"
          required
        />
        <label>ngo_id:</label>
        <input
          type="text"
          value={formData.ngo_id}
          onChange={handleChange}
          name = "ngo_id"
          required
        />
        
        <label>admin_id:</label>
        <input
          type="text"
          value={formData.admin_id}
          onChange={handleChange}
          name = "admin_id"
          required
        />
        <input type="submit" name="submit" value="Add MakeDonations" />
      </form>
    </div>
  );
};

export default NewNgoDonationRequest;
