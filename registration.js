const signUpButton = document.querySelector('.sign-up-button');
const registrationLogin = document.querySelector('.registration-login');
const registrationPassword = document.querySelector('.registration-password');

signUpButton.addEventListener('click', () => {
    if (registrationLogin.value && registrationPassword.value){
        alert("Subskrypcja została wysłana");
    }
    else{
        alert("Podaj login i hasło");
    }
})
