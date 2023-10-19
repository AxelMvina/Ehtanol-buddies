const passwordInput = document.getElementById('loginPassword');
const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.src = "Screenshots/icons8-visible-48.png";
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.src = 'Screenshots/icons8-oeil-fermé-50.png';
    }
});