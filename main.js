let slashEyes = document.querySelector(".fa-eye-slash");
let showEye = document.getElementById("show-password");
let passwordInput = document.getElementById("password");
let passwordErrorMessage = document.getElementById("password-error");
let signUpBtn = document.getElementById("sign-up");
let userNameInput = document.getElementById("user-name");
let gmailInput = document.getElementById("email");
// Show Password

showEye.style.display = 'none';
slashEyes.addEventListener("click", () => {
    // slashEyes.className = "fa fa-eye";
    slashEyes.style.display = 'none';
    showEye.style.display = 'inline';
    passwordInput.setAttribute("type", "text");
});

// Hide Password
showEye.addEventListener("click", () => {
    slashEyes.style.display = 'inline';
    showEye.style.display = 'none';
    passwordInput.setAttribute("type", "password");
});

// Password Validation
function checkIfPasswordIsValid() {
    if (passwordInput.value.length < 8) {
        passwordErrorMessage.style.display = 'inline';
    };
    if (passwordInput.value.length > 8) {
        passwordErrorMessage.style.display = 'none';
    };
};
// Check If Inputs Is Empty 
signUpBtn.addEventListener('click', () => {
    if (userNameInput.value === "" || gmailInput.value === "" || passwordInput.value === "" || passwordInput.value.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill Data !!',
        });
    };
    if (userNameInput.value !== "" && gmailInput.value !== "" && passwordInput.value !== "" && passwordInput.value.length >= 8) {
        Swal.fire(
            'Good job!',
            'Your Data Is Valid!',
            'success'
        );
    };
});