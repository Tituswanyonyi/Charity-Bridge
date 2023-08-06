// Function to handle form submission
function handleDonation(event) {
  event.preventDefault();

  // Get the donation amount from the input field
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);

  // Validate the amount (optional)
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }


  console.log("Donation amount:", amount);


}

// Add an event listener to the form to handle the submission
const donationForm = document.getElementById("donationForm");
donationForm.addEventListener("submit", handleDonation);