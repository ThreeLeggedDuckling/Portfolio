let dragParam = {
    selected: null,
    pointerX: 0,
    pointerY: 0,
    elemX: 0,
    elemY: 0
}
let openStack = [];     // open windows stack


/*  WINDOW STACK MANAGEMENT  */

// manage windows position in stack
function updateWindowsStack(openWindow) {
    if (openStack.includes(openWindow)) openStack.splice(openStack.indexOf(openWindow), 1);
    openStack.unshift(openWindow);
}

// set windows depth according to their position in the stack
function setZIndex(windows = openStack, maxDepth = 1000, depthStep = 20) {
    for (let i = 0; i < windows.length; i++) {
        windows[i].style.zIndex = maxDepth - (i * depthStep);
    }
}


/*  DRAG  */

// get initial values of drag parameters
function _drag_init(elem) {
    dragParam.selected = elem;    // garde en mémoire élément
    dragParam.elemX = dragParam.pointerX - dragParam.selected.offsetLeft;
    dragParam.elemY = dragParam.pointerY - dragParam.selected.offsetTop;
}

// modify position values
function _move_elem(e) {
    dragParam.pointerX = e.clientX;
    dragParam.pointerY = e.clientY;
    // if pointer on window
    if (!Object.is(dragParam.selected, null)) {
        dragParam.selected.style.left = (dragParam.pointerX - dragParam.elemX) + 'px';
        dragParam.selected.style.top = (dragParam.pointerY - dragParam.elemY) + 'px';
    }
}

// reset dragParam.selected
function _destroy() {
    dragParam.selected = null;
}

function drag() {
    _drag_init(this.parentElement);
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}


/*  WINDOW BEHAVIOUR  */

// window opening
for (const elem of document.getElementsByClassName('icon')) {
    elem.addEventListener('click', () => {
        // get corresponding window
        let selectedWindow = document.getElementById(elem.id.replace(/nav|icon/, 'window'));

        // update stack and move the window foreground
        updateWindowsStack(selectedWindow);
        setZIndex();

        // close previous windows on small screen
        if (window.innerWidth <= 600) {
            while (openStack.length > 1) {
                openStack.pop().close();
            }
        }

        // open window
        selectedWindow.show();
    })
}

// add interactivity
for (let openWindow of document.getElementsByTagName('dialog')) {
    // bring front on click
    openWindow.addEventListener('click', () => {
        updateWindowsStack(openWindow);
        setZIndex();
    })

    // make draggable when mouse on window header
    openWindow.firstElementChild.onmousedown = drag;

    // remove from stack on close
    openWindow.addEventListener('close', () => {
        openStack.splice(openStack.indexOf(openWindow), 1);
    })
}






















/*  message accueil */
let langBtn = document.getElementById('lang');
let time = new Date().getHours();
if (time < 6 || time > 21) {
    if (langBtn.textContent == "EN") greeting.textContent = 'Greetings, fellow nighthowl.';
    else greeting.textContent = 'Salutations, être nocturne.';
} else if (time < 12) {
    if (langBtn.textContent == "EN") greeting.textContent = 'Hello, good morning!';
    else greeting.textContent = 'Bien le bonjour!';
} else if (time < 16) {
    if (langBtn.textContent == "EN") greeting.textContent = 'Hello, good afternoon!';
    else greeting.textContent = 'Bien le bonjour!';
} else {
    if (langBtn.textContent == "EN") greeting.textContent = 'Hi, good evening!';
    else greeting.textContent = 'Bien le bonsoir!';
}

/*  gestion langues  */
function displayLang() {
    for (const elem of document.querySelectorAll(".EN, .FR")) {
        if (elem.classList.contains(langBtn.textContent)) elem.style.display = "none";
        else elem.style.display = "block";
    }
}
displayLang();

langBtn.addEventListener('click', () => {
    langBtn.textContent = langBtn.textContent == "EN" ? "FR" : "EN";
    displayLang();
})