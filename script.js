// Validation for sign-up form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;

    // Basic email validation
    if (!isValidEmail(email)) {
        alert("Invalid email address");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Basic password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        event.preventDefault(); // Prevent form submission
        return false;
    }
    if(password!=password1){
        alert("Password mismatch");
        event.preventDefault();
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
