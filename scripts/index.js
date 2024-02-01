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
const body = document.getElementById('body');

const goToLogin = document.getElementById('goToLogin');
const goToRegister = document.getElementById('goToRegister');
const openFirstLogin = document.getElementById('openFirstLogin');

const forgotPassword = document.getElementById('forgotPassword');

const goToPrenota = document.getElementById('goToPrenota');

openRegister.addEventListener('click', () => {
    formRegister.classList.add('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});

closeRegister.addEventListener('click', () => {
    formRegister.classList.remove('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
});

openLogin.addEventListener('click', () => {
    formLogin.classList.add('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});

closeLogin.addEventListener('click', () => {
    formLogin.classList.remove('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
});

openVerificaEmail.addEventListener('click', () => {
    verificaEmail.classList.add('show');
    formRegister.classList.remove('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});

/* TODO: questo si apre dopo che l'utente ha confermato la mail inserendo la password temporanea*/
openFirstLogin.addEventListener('click', () => {
    verificaEmail.classList.remove('show');
    formLogin.classList.add('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});


Date.prototype.toDateInputValue = (function(){
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('birthdate').max = new Date().toDateInputValue();


goToLogin.addEventListener('click', () => {
    formRegister.classList.remove('show');
    formLogin.classList.add('show');
});

goToRegister.addEventListener('click', () => {
    formLogin.classList.remove('show');
    formRegister.classList.add('show');
});

/* TODO: sistema il recupero della password */
forgotPassword.addEventListener('click', () => {
    formLogin.classList.remove('show');
    verificaEmail.classList.add('show');
});

/* TODO: pk non va sto cazzo di bottone????? */
goToPrenota.addEventListener('click', () => {
    window.location.href = 'prenotazione.html';
});
