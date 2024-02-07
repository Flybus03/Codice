const controllaPrenotazione = document.getElementById('checkBook');
const errore = document.getElementById('errore');
const prenotazioneEffettuata = document.getElementById('prenotazioneOK');
const prenotazioneErrore = document.getElementById('prenotazioneErrore');
const home = document.getElementById('home');
const body = document.getElementById('body');
const close1 = document.getElementById('ok1');
const close2 = document.getElementById('ok2');

controllaPrenotazione.addEventListener('click', () => {
    prenotazioneEffettuata.classList.add('show');
    home.classList.add('blur');
    body.classList.add('overflow-hidden');
});

close1.addEventListener('click', () => {
    prenotazioneEffettuata.classList.remove('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
});

close2.addEventListener('click', () => {
    prenotazioneErrore.classList.remove('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
});


errore.addEventListener('click', () => {
    prenotazioneErrore.classList.add('show');
    home.classList.remove('blur');
    body.classList.remove('overflow-hidden');
});
