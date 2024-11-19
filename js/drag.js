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
        nX = pointerX - elemX;
        ny = pointerY - elemY;
        
        selected.style.left = nX > document.body.offsetWidth ? document.body.offsetWidth + 'px' : nX + 'px';
        selected.style.top = (pointerY - elemY) + 'px';
        
        // selected.style.left = (pointerX - elemX) + 'px';
        // selected.style.top = (pointerY - elemY) + 'px';
        

        // campling
        // const vW = window.innerWidth;
        // const vH = window.innerHeight;
        // newX = Math.min(Math.max(x_pointer - x_elem, 50 - selected.offsetWidth), vW - 50);
        // newY = Math.min(Math.max(y_pointer - y_elem, 50 - selected.offsetHeight), vH - 50);



        // selected.style.left = newX + 'px';
        // selected.style.top = newY + 'px';
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