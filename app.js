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

// Get references to the main card container, success card container, and dismiss button
const mainCardContainer = document.querySelector(".card-container");
const successCardContainer = document.querySelector(".card-container.success");
const dismissButton = document.querySelector(".card-container.success .btn");

// Get reference to the subscribe button
const subscribeButton = document.querySelector(".btn");

// Add an event listener to the subscribe button for form submission
subscribeButton.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the trimmed value of the email input
  const email = emailInput.value.trim();

  // Check if the email is valid
  if (validateEmail(email)) {
    // If the email is valid, add the "hide" class to the main card container and remove the "hide" class from the success card container
    mainCardContainer.classList.add("hide");
    successCardContainer.classList.remove("hide");
  } else {
    // If the email is not valid, add the "red" class to the input and show the error message
    emailInput.classList.add("red");
    emailError.style.display = "block";
  }
});

// Add an event listener to the dismiss button to toggle back to the previous state
dismissButton.addEventListener("click", function (event) {
  // Prevent the default button behavior
  event.preventDefault();

  // Remove the "hide" class from the main card container and add the "hide" class to the success card container
  mainCardContainer.classList.remove("hide");
  successCardContainer.classList.add("hide");
});
