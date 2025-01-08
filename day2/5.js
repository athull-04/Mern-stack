// script.js

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const progressBar = document.getElementById('progressBar');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return regex.test(email);
}

function updateProgressBar() {
    const password = passwordInput.value;

    let strength = 0;

    if (password.length >= 8) strength += 25; // Length check
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength += 25; // Uppercase & lowercase check
    if (/\d/.test(password) && /[!@#$%^&*]/.test(password)) strength += 50; // Number & special character check

    progressBar.style.width = `${strength}%`;

    if (strength <= 25) {
        progressBar.style.backgroundColor = 'red';
        passwordError.textContent = 'Weak password';
    } else if (strength <= 75) {
        progressBar.style.backgroundColor = 'orange';
        passwordError.textContent = 'Moderate password';
    } else {
        progressBar.style.backgroundColor = 'green';
        passwordError.textContent = 'Strong password';
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

// Event Listeners
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener('input', () => {
    updateProgressBar();
});

confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

   // Validate all fields before submitting
   const isEmailValid = validateEmail(emailInput.value);
   const isConfirmValid = validateConfirmPassword();

   if (isEmailValid && isConfirmValid) {
       alert("Registration successful!");
       // Here you can handle form submission to the server
   }
});
