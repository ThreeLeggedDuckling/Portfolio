let selected = null;
let x_pointer = 0;
let y_pointer = 0;
let x_elem = 0;
let y_elem = 0;

function _drag_init(elem) {
    selected = elem;    // garde en mémoire élément
    x_elem = x_pointer - selected.offsetLeft;
    y_elem = y_pointer - selected.offsetTop;
}

function _move_elem(e) {
    x_pointer = event.clientX;
    y_pointer = event.clientY;
    if (selected !== null) {
        selected.style.left = (x_pointer - x_elem) + 'px';
        selected.style.top = (y_pointer - y_elem) + 'px';
    }
}

// destruction objet stockant élément
function _destroy() {
    selected = null;
}

// assemblage
function drag() {
    _drag_init(this.parentElement);
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}



let dialogs = document.getElementsByClassName('dialog-box');
for (const d of dialogs) {
    d.firstElementChild.onmousedown = drag;
}