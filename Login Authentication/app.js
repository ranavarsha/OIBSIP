// Array to store user credentials
const users = [];

// Function to display error messages
function displayError(message1) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message1;
  errorDiv.style.display = "block";
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 3000);
}
// Function to display error messages in login page
function displayErrorLogin(message3) {
  const errorDiv = document.getElementById("error-text");
  errorDiv.textContent = message3;
  errorDiv.style.display = "block";
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 3000);
}
// Function to display success messages in login page
function displaySuccessMail() {
  const errorDiv = document.getElementById("success-text");
  errorDiv.textContent = "A reset email have been set to your mail.";
  errorDiv.style.display = "block";
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 3000);
}

// Function to display success messages
function displaySuccess(message2) {
  const successDiv = document.getElementById("success-message");
  successDiv.textContent = message2;
  successDiv.style.display = "block";
  setTimeout(() => {
    successDiv.style.display = "none";
    window.location.href = "#login-section";
  }, 3000);
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Function to validate password
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// Function to sign up a new user
function signUp(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;

  // Validate email format

  if (!isValidEmail(email)) {
    displayError("Please enter a valid email address.");
    return;
  }

  // Validate password
  if (!validatePassword(password)) {
    displayError(
      "Error: Password must be at least 8 characters long, include a number, an uppercase and lowercase letter, and a special character."
    );
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    displayError("Error: Passwords do not match.");
    return;
  }

  // Check if the email already exists
  const emailExists = users.some((user) => user.email === email);
  if (emailExists) {
    displayError("Error: Email already in use.");

    return;
  }

  // Add the new user to the array
  users.push({ email, password });
  // alert("Sign up successful!");
  displaySuccess(
    `Registration was successful, proceed to Login Page...."Loading....97%" `
  );
  // Clear the input fields
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-confirm-password").value = "";
}

// Function to log in a user
function logIn(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Find the user in the array
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    // alert("Login successful!");
    // Redirect to a new window upon successful login
    window.open("dashboard.html", "_blank");
  } else {
    displayErrorLogin("Error: Invalid email or password.");
  }
}
