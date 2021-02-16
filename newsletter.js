const newsletterButton = document.querySelector('.newsletter-button');
const newsletterInputEmail = document.querySelector('.newsletter-input-email');
const newsletterInputName = document.querySelector('.newsletter-input-text');
const reg = /(.)+@(.)+\.([A-Z])+/i;

newsletterButton.addEventListener('click', () => {
    if ((reg.test(newsletterInputEmail.value))&& newsletterInputName.value ){
        alert("Subskrypcja została wysłana");
    }
    else if (reg.test(newsletterInputEmail.value)===false){
        alert("Podaj poprawny adres e-mail");
    }
    else{
        alert("Podaj poprawne imię");
    }
})
