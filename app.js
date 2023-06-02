// Get the necessary elements
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const submitButton = document.querySelector(".btn");

// Function to validate the email address
function validateEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  const isValidEmail = emailRegex.test(emailValue);

  if (!isValidEmail) {
    emailInput.classList.add("red"); // Add the "red" class to the email input
    emailError.style.display = "block";
  } else {
    emailInput.classList.remove("red"); // Remove the "red" class from the email input if it was previously added
    emailError.style.display = "none";
    // Submit the form or perform other actions
    // Here you can add the code to submit the form or perform any other actions when the email is valid
  }
}

// Event listener for form submission
submitButton.addEventListener("click", validateEmail);
