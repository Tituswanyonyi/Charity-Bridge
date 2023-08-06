// Function to handle the donate button click
function handleDonateButtonClick() {
  // Perform actions when the donate button is clicked
  // For example, show a donation modal or redirect to a donation page.
  // You can customize this based on your specific requirements.
  // For this example, let's assume a simple alert to demonstrate.
  alert('Thank you for your donation!');
}

// Function to handle NGO's donation request submission
function handleSubmitDonationRequest() {
  // Get the form data
  const ngoName = document.getElementById('ngoName').value;
  const requestDetails = document.getElementById('requestDetails').value;

  alert(`Donation request submitted for ${ngoName}: ${requestDetails}`);
}

// Event listener for the donate button
const donateButton = document.getElementById('donateButton');
donateButton.addEventListener('click', handleDonateButtonClick);

// Event listener for the NGO donation request form submission
const donationRequestForm = document.getElementById('donationRequestForm');
donationRequestForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  handleSubmitDonationRequest();
});