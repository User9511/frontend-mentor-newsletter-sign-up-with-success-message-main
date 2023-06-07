// Get references to the email input and error message elements
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

// Add an event listener to the email input for real-time validation
emailInput.addEventListener("input", function () {
  // Get the trimmed value of the email input
  const email = emailInput.value.trim();

  // Check if the email is valid
  if (validateEmail(email)) {
    // If the email is valid, remove the red class from the input and hide the error message
    emailInput.classList.remove("red");
    emailError.style.display = "none";
  } else {
    // If the email is not valid, add the red class to the input and show the error message
    emailInput.classList.add("red");
    emailError.style.display = "block";
  }
});

// Function to validate the email using a regular expression
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
