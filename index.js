const openRegister = document.getElementById('openRegister');
const closeRegister = document.getElementById('closeRegister');
const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const formRegister = document.getElementById('formRegister');
const home = document.getElementById('home');


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