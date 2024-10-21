document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// New Password field - disable copy
const newPassword = document.getElementById('new-password');
const copyError = document.getElementById('copy-error');
newPassword.addEventListener('copy', function(e) {
    e.preventDefault();
    copyError.style.display = 'inline';
});
newPassword.addEventListener('cut', function(e) {
    e.preventDefault();
    copyError.style.display = 'inline';
});
newPassword.addEventListener('input', function() {
    copyError.style.display = 'none';
});

// Confirm Password field - disable paste
const confirmPassword = document.getElementById('confirm-password');
const pasteError = document.getElementById('paste-error');
confirmPassword.addEventListener('paste', function(e) {
    e.preventDefault();
    pasteError.style.display = 'inline';
});
confirmPassword.addEventListener('input', function() {
    pasteError.style.display = 'none';
});