// Validation for sign-up form
// document.getElementById("signUpForm").addEventListener("submit", function(event) {
//     var username = document.getElementById("signUpUsername").value;
//     var email = document.getElementById("signUpEmail").value;
//     var password = document.getElementById("signUpPassword").value;

//     // Basic email validation
//     if (!isValidEmail(email)) {
//         document.getElementById("signUpError").innerText = "Invalid email address";
//         event.preventDefault(); // Prevent form submission
//         return false;
//     }

//     // Basic password validation
//     if (password.length < 6) {
//         document.getElementById("signUpError").innerText = "Password must be at least 6 characters long";
//         event.preventDefault(); // Prevent form submission
//         return false;
//     }

//     // If both email and password are valid, allow form submission
//     return true;
// });

// // Function to validate email format
// function isValidEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;
    var confirmPassword = document.getElementById("signUpConfirmPassword").value;

    var errorMessage = "";

    // Basic email validation
    if (!isValidEmail(email)) {
        errorMessage = "Invalid email address";
    }

    // Basic password validation
    else if (password.length < 6) {
        errorMessage = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    else if (password !== confirmPassword) {
        errorMessage = "Passwords do not match";
    }

    // Display error message if there is any
    if (errorMessage) {
        document.getElementById("signUpError").innerText = errorMessage;
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If all validations pass, allow form submission
    return true;
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

