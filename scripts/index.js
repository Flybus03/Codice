const openRegister = document.getElementById('openRegister');
const closeRegister = document.getElementById('closeRegister');

const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');

const verificaMail = document.getElementById('verificaMail');
const closeVerificaEmail = document.getElementById('closeVerificaEmail');

const formRegister = document.getElementById('formRegister');
const formLogin = document.getElementById('formLogin');
const formPrimoLogin = document.getElementById('formPrimoLogin');

const home = document.getElementById('home');
const body = document.getElementById('body');

const goToLogin = document.getElementById('goToLogin');
const goToRegister = document.getElementById('goToRegister');
const openFirstLogin = document.getElementById('openFirstLogin');

const forgotPassword = document.getElementById('forgotPassword');

const primoLoginButton = document.getElementById('primoLoginButton');

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


openFirstLogin.addEventListener('click', () => {
    verificaMail.classList.remove('show');
    formPrimoLogin.classList.add('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});


Date.prototype.toDateInputValue = (function(){
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('regBirthdate').max = new Date().toDateInputValue();


goToLogin.addEventListener('click', () => {
    formRegister.classList.remove('show');
    formLogin.classList.add('show');
});

goToRegister.addEventListener('click', () => {
    formLogin.classList.remove('show');
    formRegister.classList.add('show');
});

primoLoginButton.addEventListener('click', () => {
    formPrimoLogin.classList.remove('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
    window.location.href = "home.html";
});


forgotPassword.addEventListener('click', () => {
    formLogin.classList.remove('show');
    formPrimoLogin.classList.add('show');
});

/* LOGIN */
const accediButton = document.getElementById('verifyLogin');

accediButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password
    };

    fetch("http://localhost:6060/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        if (data.error) {
            alert(data.error);
        }
    });
    window.location.href = "home.html";
});


/* REGISTER */
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const name = document.getElementById('regNome').value;
    const surname = document.getElementById('regCognome').value;
    const birthdate = document.getElementById('regBirthdate').value;
    const phone = document.getElementById('regTelephone').value;

    const data = {
        nome: name,
        cognome: surname,
        email: email,
        telefono: phone,
        dataNascita: birthdate,
        ruolo: "Ospite"
    };

    fetch("http://localhost:6060/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        if (data.error) {
            alert(data.error);
        }
    });
    verificaMail.classList.add('show');
    formRegister.classList.remove('show');
});

