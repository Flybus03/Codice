/* TODO: fixa sta merda che non si capisce niente */

const openRegister = document.getElementById('openRegister');
const closeRegister = document.getElementById('closeRegister');

const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');

const openVerificaEmail = document.getElementById('openVerificaEmail');
const closeVerificaEmail = document.getElementById('closeVerificaEmail');



const verificaEmail = document.getElementById('verificaEmail');
const formRegister = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');
const formPrimoLogin = document.getElementById('formPrimoLogin');

const home = document.getElementById('home');

const forgotPassword = document.getElementById('forgotPassword');

openRegister.addEventListener('click', () => {
    formRegister.classList.add('show');
    home.classList.add('blur');
});

closeRegister.addEventListener('click', () => {
    formRegister.classList.remove('show');
    home.classList.remove('blur');
});

openLogin.addEventListener('click', () => {
    formLogin.classList.add('show');
    home.classList.add('blur');
});

closeLogin.addEventListener('click', () => {
    formLogin.classList.remove('show');
    home.classList.remove('blur');
});

openVerificaEmail.addEventListener('click', () => {
    verificaEmail.classList.add('show');
    formRegister.classList.remove('show');
    home.classList.add('blur');
});

closeVerificaEmail.addEventListener('click', () => {
    verificaEmail.classList.remove('show');
    home.classList.remove('blur');
});


Date.prototype.toDateInputValue = (function(){
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('birthdate').max = new Date().toDateInputValue();