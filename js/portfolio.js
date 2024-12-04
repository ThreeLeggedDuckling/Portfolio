const portfolio = document.getElementById('portfolio_window');
const rootfolder = document.getElementById('root');
const subfolders = document.getElementById('subfolders');
const backfolder = document.getElementById('backend');
const frontfolder = document.getElementById('frontend');
const projectList = document.getElementById('list');
const infoDisplay = document.getElementById('infos');

const nBack = projectList.querySelectorAll('p:not(.back)');
const nFront = projectList.querySelectorAll('p:not(.front)');

portfolio.addEventListener('click', (e) => {
    // click folder
    if ([rootfolder, backfolder, frontfolder].includes(e.target)) {

        // effacer choix précédent
        if (typeof folderChoice !== 'undefined') {
            folderChoice.classList.remove('selectedDisplay');
        }

        // nouveau choix
        folderChoice = e.target;
        folderChoice.classList.add('selectedDisplay');
    }

    if (Array.from(projectList.children).includes(e.target)) {

        // effacer choix précédent
        if (typeof projectChoice !== 'undefined') {
            projectChoice.classList.remove('selectedDisplay');
        }

        // nouveau choix
        projectChoice = e.target;
        projectChoice.classList.add('selectedDisplay');
    }

    // click "My projects"
    if (e.target == rootfolder) {
        
        // (dés)-affichage subfolders
        if (window.innerWidth > 600) {
            let visible = subfolders.style.display;
            subfolders.style.display = (visible == "" || visible == "none") ? "block" : "none";
        }

        // afficher projets
        for (const p of document.querySelectorAll('#list>p')) {
            p.style.display = "block";
        }
    }

    // click "Backend"
    if (e.target == backfolder) {
        for (const p of nBack) {
            p.style.display = "none";
        }
        for (const p of document.getElementsByClassName('back')) {
            p.style.display = "block";
        }
    }

    // click "Frontend"
    if (e.target == frontfolder) {
        for (const p of nFront) {
            p.style.display = "none";
        }
        for (const p of document.getElementsByClassName('front')) {
            p.style.display = "block";
        }
    }

    // click projet
    if (Array.from(projectList.children).includes(e.target))
    {
        fetch("../data.json")
        .then(res => res.json())
        .then(data =>  {
            if (window.innerWidth < 600) {
                infoDisplay.style.display = "block";
            }
            for (const elem of infoDisplay.children) {
                if (window.innerWidth > 600) {
                    elem.style.display = "block";
                }
                let contentfield = elem.lastElementChild;
                let contentdata = data.projects[e.target.id.substring(4)][contentfield.id.substring(2)];

                if (contentfield.id.substring(2) != "links") {
                    contentfield.textContent = contentdata;
                } else {

                    contentfield.innerHTML = "";
                    for (const k of Object.keys(contentdata)) {
                        let nA = document.createElement('a');
                        nA.textContent = k;
                        nA.href = contentdata[k];
                        contentfield.append(nA);
                    }
                    
                }

            }

        })
    }

})