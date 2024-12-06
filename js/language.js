let langBtn = document.querySelector('#lang ~ .dropped p');

langBtn.addEventListener('click', () => {
    lang.textContent = langBtn.textContent;
    langBtn.textContent = langBtn.textContent == "EN" ? "FR" : "EN";

    for (const d of document.getElementsByTagName('dialog')) {
        d.close();
        /* if (d.id = 'portfolio_window')
            Faute de l'enfer qui a ruiné ma vie.
            JS je te hais, ton créateur mérite le bûcher.
        */
        if (d.id == 'portfolio_window') {
            if (window.innerWidth < 600) {
                infoDisplay.style.display = "none";
            } else {
                for (const elem of infoDisplay.children) {
                    console.log('elem :>> ', elem);
                    if (window.innerWidth > 600) {
                        elem.style.display = "none";
                    }
                }
            }
        }
    }
})