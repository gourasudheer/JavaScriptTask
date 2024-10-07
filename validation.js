function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const department = document.getElementById("department").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
   const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const departmentError = document.getElementById("department-error" );
    const agreeError = document.getElementById("agree-error");
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    departmentError.textContent = "";
    agreeError.textContent = "";
    let isValid = true;
    if (name === "" || /\d/.test(name)) {
    nameError.textContent =
    "Please enter your name properly.";
    isValid = false;
    }
    if (address === "") {
    addressError.textContent =
   "Please enter your address.";
    isValid = false;
    }
    if (email === "" || !email.includes("@")) {
    emailError.textContent =
    "Please enter a valid email address.";
    isValid = false;
    }
    const hasuppercase =/[A-Z]/.test(password);
    const haslowercase =/[a-z]/.test(password);
    if (password === "" || password.length < 6) {
    passwordError.textContent =
    "Please enter a password with at least 6 characters.";
    isValid = false;
    }
    else if(!hasuppercase || !haslowercase){
        password.textContent="password must have uppaercase and lowercase.";
        isValid = false;
    }
    if (department === "") {
    subjectError.textContent =
    "Please select your course.";
    isValid = false;
    }
    if (!agree) {
        agreeError.textContent =
        "Please agree to the above information.";
        isValid = false;
        }
        return isValid;
}   
