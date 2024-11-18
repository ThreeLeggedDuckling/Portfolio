// normalement je devrais faire une version séparée pour chaque langue mais juste comme ça ...

let frDisplay = document.getElementsByClassName('fr');
let enDisplay = document.getElementsByClassName('en');
let showFr = true;
displayLanguage();

let languageSelect = document.getElementById('lang');
languageSelect.addEventListener('click', () => {
    showFr = !showFr;
    displayLanguage();
});

function displayLanguage() {
    if (showFr) {
        for (const elem of frDisplay) {
            elem.style.contentVisibility = 'visible';
        }
        for (const elem of enDisplay) {
            elem.style.contentVisibility = 'hidden';
        }
    } else {
        for (const elem of frDisplay) {
            elem.style.contentVisibility = 'hidden';
        }
        for (const elem of enDisplay) {
            elem.style.contentVisibility = 'visible';
        }
    }
}

/** code HTML lié

    <nav>
        <p id="about_nav" class="icon">About</p>
        <p id="resume_nav" class="icon">Resume</p>
        <p id="portfolio_nav" class="icon">Portfolio</p>
        <p id="contact_nav" class="icon">Contact</p>
        <p id="lang">
            <span class="fr">FR</span>
            <span class="en">EN</span>
            <!-- idéalement devrait faire une version pour chaque langue -->
        </p>
    </nav>

    <dialog id="about_window" class="dialog-box">
        <header>
            <h1 class="fr">A propos</h1>
            <h1 class="en">About</h1>
        </header>
        <main>
            <p class="fr">Bien le <span id="greetingFR"></span> !</p>
            <p class="en">Good <span id="greetingEN"></span> !</p>
        </main>
        <footer>
            <button class="close">close</button>
        </footer>
    </dialog>

    <dialog id="resume_window" class="dialog-box">
        <header>
            <h1 class="fr">Mon cv</h1>
            <h1 class="en">Resume</h1>
        </header>
        <main>
            <p class="fr">Bien le bonjour</p>
            <p class="en">Good day partner</p>
        </main>
        <footer>
            <button class="close">close</button>
        </footer>
    </dialog>

    <dialog id="portfolio_window" class="dialog-box">
        <header>
            <h1 class="fr">Portfolio</h1>
            <h1 class="en">Portfolio</h1>
        </header>
        <main>
            <p class="fr">Bien le bonjour</p>
            <p class="en">Good day partner</p>
        </main>
        <footer>
            <button class="close">close</button>
        </footer>
    </dialog>

    <dialog id="contact_window" class="dialog-box">
        <header>
            <h1 class="fr">fenêtre 4</h1>
            <h1 class="en">window 4</h1>
        </header>
        <main>
            <p class="fr">Bien le bonjour</p>
            <p class="en">Good day partner</p>
        </main>
        <footer>
            <button class="close">close</button>
        </footer>
    </dialog>
 */