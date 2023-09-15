function saveForm(formType) {
    var valid = true;
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;
    var confirmPasswordValue = document.getElementById('password_confirmation').value;

    if (formType === 'email') {
        valid = checkValidEmail(emailValue);
    } else if (formType === 'password') {
        valid = checkPasswordMatch(passwordValue, confirmPasswordValue);
    }

    if (valid) {
        alert('Save successful!');
        clearFields(formType);
    } else {
        alert('Please complete the required fields or fix validation errors.');
    }
}

function clearFields(formType) {
    document.getElementById(formType).value = '';
    if (formType === 'password') {
        document.getElementById('password_confirmation').value = '';
    }
}