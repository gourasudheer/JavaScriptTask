document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isFormValid = true;

    // this Clear previous error messages
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // after enter email input
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "First letter Lowercase and Please enter a valid email ending with @gmail.com.";
        document.getElementById("emailError").style.display = "block";
        isFormValid = false;
    }

    // after enter password
    if (!validatePassword(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a digit, and a special character.";
        document.getElementById("passwordError").style.display = "block";
        isFormValid = false;
    }

    // If the form is valid, submit it
    if (isFormValid) {
        alert("Form submitted successfully!");
    }
});

// Function to validate email
function validateEmail(email) {
    let emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
}

// Function to validate password
function validatePassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
