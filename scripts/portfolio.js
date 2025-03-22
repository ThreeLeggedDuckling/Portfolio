const folders = [e_root,e_csharp, e_js, e_php];
let lastSeen;
let lastInteract;

portfolio_window.addEventListener('click', (e) => {
    // comportement dossiers
    if (folders.includes(e.target)) {
        let folderContent = e.target.nextElementSibling;
        let visibility = folderContent.style.display;
        folderContent.style.display = (visibility == "" || visibility == "block") ? "none" : "block";
    }

    // affichage détail
    if (!folders.includes(e.target) && Array.from(explorer.getElementsByTagName('p')).includes(e.target)) {
        if (window.innerWidth < 600) detail.style.display = "block";
        for (const elem of detail.children) {
            elem.style.display = "block";
            elem.firstElementChild.style.display = "block";
        }

        if (typeof lastSeen !== "undefined") {
            for (const elem of document.getElementsByClassName(lastSeen)) {
                elem.style.display = "none";
            }
        }
        for (const elem of document.getElementsByClassName(e.target.id)) {
            elem.style.display = "block";
        }

        lastSeen = e.target.id;
    }

    // reset lors fermeture fenêtre
    if (e.target.className === "close") {
        if (window.innerWidth < 600) detail.style.display = "none";
        for (const elem of detail.children) {
            elem.style.display = "none";
            elem.firstElementChild.style.display = "none";
        }
    }

})
