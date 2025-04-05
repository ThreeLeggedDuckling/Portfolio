const rfolders = [edu_tab, exp_tab, skills_tab];
let rLastSeen = edu_panel.id;

resume_window.addEventListener('click', (e) => {

    // affichange sections
    if (rfolders.includes(e.target) || rfolders.includes(e.target.parentElement)) {
        let clicked = rfolders.includes(e.target) ? e.target.id : e.target.parentElement.id;

        if (clicked !== rLastSeen) {
            document.getElementById(rLastSeen.replace('tab', 'panel')).style.display = "none";
            rLastSeen = clicked;
            document.getElementById(rLastSeen.replace('tab', 'panel')).style.display = "block";
        }
    }

    // reset à fermeture
    if (e.target.className === "close" && rLastSeen !== edu_panel.id) {
        document.getElementById(rLastSeen.replace('tab', 'panel')).style.display = "none";
        rLastSeen = edu_panel.id;
        document.getElementById(rLastSeen.replace('tab', 'panel')).style.display = "block";
    }

})