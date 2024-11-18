// ouverture "fenêtres"
let icons = document.getElementsByClassName('icon');
for (const i of icons) {
    i.addEventListener('click', () => {
        document.getElementById(i.id.replace(/nav|icon/, 'window')).show();
    })
}

// message accueil selon heure
let greeting = document.getElementById('greeting');
let time = new Date().getHours();
if (time < 6 || time > 21) {
    greeting.textContent = greeting.className == 'en' ? 'fellow nighthowl' : 'la belle nuit';
} else if (time < 12) {
    greeting.textContent = greeting.className === 'en' ? 'good morning' : 'le bonjour';
} else if (time < 16) {
    greeting.textContent = greeting.className === 'en' ? 'good afternoon' : 'la belle après-midi';
} else {
    greeting.textContent = greeting.className === 'en' ? 'good evening' : 'la belle soirée';
}