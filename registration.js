const signUpButton = document.querySelector('.sign-up-button');
const registrationLogin = document.querySelector('.registration-login');
const registrationPassword = document.querySelector('.registration-password');
let registrationProgress = document.querySelector('.registration-progress');
const passwordRegs = [
    /(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9]{12,})/,
    /(?=.*[A-Z])([a-zA-Z0-9]{8,})/,
    /\S/
];

let passwordStrength;

const passwordChecker = (password) => {
    passwordStrength = 0;
    passwordRegs.forEach((regex)=>{
        if (regex.test(password)){
            passwordStrength++;
        };
    });
    registrationProgress.value = passwordStrength;
}

const buttonEnable = () =>{
    signUpButton.disabled = true;
    if (registrationPassword.value && registrationLogin.value){
        signUpButton.disabled = false;
    }
}

registrationPassword.addEventListener('keyup', () => {passwordChecker(event.target.value), buttonEnable()});
registrationLogin.addEventListener('keyup', () => {buttonEnable()});
signUpButton.addEventListener('click', () => {
        alert("Zarejestrowano nowego użytkownika");
})
