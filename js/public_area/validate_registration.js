const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#password_confirmation').value;

    if (!checkValidEmail(email)) {
        return;
    }

    if (!checkPasswordMatch(password, confirmPassword)) {
        return;
    }

    alert("Registration successful!");
    checkCredentialsAndRedirect(email, password);
});





