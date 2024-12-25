// Validation for sign-up form
document.getElementById("signUpForm").addEventListener("submit", function(event) {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;

    // Basic email validation
    if (!isValidEmail(email)) {
        document.getElementById("signUpError").innerText = "Invalid email address";
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Basic password validation
    if (password.length < 6) {
        document.getElementById("signUpError").innerText = "Password must be at least 6 characters long";
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

// Get the button
var mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block"; // Show button
  } else {
    mybutton.style.display = "none"; // Hide button
  }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
