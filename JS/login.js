// Login form Validation
// Declare Variables
const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector(".success-message");
const loginButton = document.querySelector("#login-button");

// Display a custom Validation Message.
function showError(input, message) {
    input.setCustomValidity(message);
}

// Clear the custom Validity Message
function clearError(input) {
    input.setCustomValidity("");
}

// Validate the Email Field
function validateEmail() {
    clearError(emailInput);

    if (emailInput.validity.valueMissing) {
        showError(emailInput, "Please enter your email");
        return false;
    }

    if (emailInput.validity.typeMismatch) {
        showError(emailInput, "Please enter a valid email address");
        return false;
    }
    return true;
}

// Validate the Password Field
function validatePassword() {
    clearError(passwordInput);

    if (passwordInput.validity.valueMissing) {
        showError(passwordInput, "Please enter your password");
        return false;
    }
    return true;
}

// Validate the Entire Form
function validateForm() {
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    return emailValid && passwordValid;
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm()) {
        loginForm.reportValidity();
        return;
    }

    // Else, send a success message and submit the form to the backend.
    loginButton.disabled = true;
    loginButton.textContent = "Logging in....";
    successMessage.textContent = "Login was Successful";
});

// The Password Icon toggle Button
// Declare Variables
const togglePassword = document.querySelector("#togglePassword");
const passwordIcon = document.querySelector(".password-icon");

// Function to click the toggle password button
function togglePasswordBtn() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.style.maskImage = 'url("../svg/hide.svg")';
    } else {
        passwordInput.type = "password";
        passwordIcon.style.maskImage = 'url("../svg/view.svg")';
    }
}

// Activate the click event
togglePassword.addEventListener("click", togglePasswordBtn);