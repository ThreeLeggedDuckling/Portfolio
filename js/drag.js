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

let dialogs = document.getElementsByTagName('dialog');
for (const d of dialogs) {
    d.firstElementChild.onmousedown = drag;
}