let dragParam = {
    selected: null,
    pointerX: 0,
    pointerY: 0,
    elemX: 0,
    elemY: 0
}
let openStack = [];     // open windows stack
let langSwitch = document.getElementById('lang');


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

        // close previous window on small screen
        if (window.innerWidth <= 600) {
            if (openStack.length > 0) openStack[0].close();
        }
        
        // update stack and move the window foreground
        updateWindowsStack(selectedWindow);
        setZIndex();

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
        if(openStack.includes(openWindow)) openStack.splice(openStack.indexOf(openWindow), 1);
    })
}


/*  DISPLAY LANGUAGE  */

// toggle visibility of elements
function toggleDisplayLang() {
    for (const elem of document.querySelectorAll(".EN, .FR")) {
        if (elem.classList.contains(langSwitch.textContent)) elem.style.display = "none";
        else elem.style.display = "block";
    }
}

// switch display language (meant to be used with json source file)
langSwitch.addEventListener('click', () => {
    langSwitch.textContent = langSwitch.textContent == "EN" ? "FR" : "EN";
    toggleDisplayLang();
})


/*  MISC  */

// greeting message depending on current time
for (let elem of document.querySelectorAll("[id^='greeting']")) {
    let currentTime = new Date().getHours();
    if (currentTime < 6 || currentTime > 21) elem.textContent = elem.id.endsWith('EN') ? "Greetings, fellow nighthowl," : "Salutations, être nocturne,";
    else if (currentTime < 12) elem.textContent = elem.id.endsWith('EN') ? "Hello, good morning," : "Bien le bonjour,";
    else if (currentTime < 17) elem.textContent = elem.id.endsWith('EN') ? "Hello, good afternoon," : "Bien le bonjour,";
    else elem.textContent = elem.id.endsWith('EN') ? "Hi, good evening," : "Bien le bonsoir,";
}


/*  ON LOAD  */

// initiate display language
toggleDisplayLang();

// open About window on load
updateWindowsStack(document.getElementById("about_window"));
document.getElementById("about_window").show();
