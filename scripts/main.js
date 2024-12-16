/*  ouverture fenêtres  */
for (const elem of document.getElementsByClassName('icon')) {
    elem.addEventListener('click', () => {

        if (window.innerWidth > 600) {
            /*  mise en avant   */
            let lastFocus = document.getElementsByClassName('foreground');
            for (const elem of lastFocus) {
                elem.classList.remove('foreground');
            }
            document.getElementById(elem.id.replace(/nav|icon/, 'window')).classList.add('foreground');
        }
        else {
            /*  fermeture fenêtre précédente  */
            let lastWindow = document.getElementsByTagName('dialog');
            for (const w of lastWindow) {
                if (w.open) w.close();
            }
        }

        document.getElementById(elem.id.replace(/nav|icon/, 'window')).show();

    })
}

/*  message accueil */
let time = new Date().getHours();
if (time < 6 || time > 21) {
    if (greeting.className == "EN") greeting.textContent = 'Greetings, fellow nighthowl.';
    else greeting.textContent = 'Salutations, être nocturne.';
} else if (time < 12) {
    if (greeting.className == "EN") greeting.textContent = 'Hello, good morning!';
    else greeting.textContent = 'Bien le bonjour!';
} else if (time < 16) {
    if (greeting.className == "EN") greeting.textContent = 'Hello, good afternoon!';
    else greeting.textContent = 'Bien le bonjour!';
} else {
    if (greeting.className == "EN") greeting.textContent = 'Hi, good evening!';
    else greeting.textContent = 'Bien le bonsoir!';
}