/*  VERSION DYNAMIQUE    (pas finie)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 625) {
            console.log('enough :>> ', window.innerWidth);
        } else {
            console.log('too small :>> ', window.innerWidth);
        }
    })
*/

// variable drag
let selected = null;
let pointerX = 0;
let pointerY = 0;
let elemX = 0;
let elemY = 0;

function _drag_init(elem) {
    selected = elem;    // garde en mémoire élément
    elemX = pointerX - selected.offsetLeft;
    elemY = pointerY - selected.offsetTop;
}

function _move_elem(e) {
    pointerX = e.clientX;
    pointerY = e.clientY;
    if (selected !== null) {
        selected.style.left = (pointerX - elemX) + 'px';
        selected.style.top = (pointerY - elemY) + 'px';
        // trouver comment empêcher redimension extrimité droite
        // ... bypassed par taille prédéfinie
    }
}

// destruction objet mémoire
function _destroy() {
    selected = null;
}

// assemblage
function drag() {
    _drag_init(this.parentElement);
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}

let lastFocus;
let dialogs = document.getElementsByTagName('dialog');
// condition display width
if (window.innerWidth > 625) {
    for (const d of dialogs) {

        // mise en avant
        d.addEventListener('click', () => {
            if (typeof lastFocus !== 'undefined' && lastFocus !== d) {
                lastFocus.classList.remove('foreground');
            }
            lastFocus = d;
            lastFocus.classList.add('foreground');
        })
    
        // mobilité
        d.firstElementChild.onmousedown = drag;

    }
}