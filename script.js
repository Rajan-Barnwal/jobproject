document.getElementById("signUpForm").addEventListener("submit", function(event) {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;
    var signUpError = document.getElementById("signUpError");

    // Clear previous error message
    signUpError.innerText = "";

    // Basic email validation
    if (!isValidEmail(email)) {
        signUpError.innerText = "Invalid email address";
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Basic password validation
    if (password.length < 6) {
        signUpError.innerText = "Password must be at least 6 characters long";
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If both email and password are valid, allow form submission
    return true;
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
