let langBtn = document.querySelector('#lang ~ .dropped p');

langBtn.addEventListener('click', () => {
    lang.textContent = langBtn.textContent;
    langBtn.textContent = langBtn.textContent == "EN" ? "FR" : "EN";
})