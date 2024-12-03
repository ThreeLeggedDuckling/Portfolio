

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
    // click "My projects"
    if (e.target == rootfolder) {
        let visible = subfolders.style.display;
        subfolders.style.display = (visible == "" || visible == "none") ? "block" : "none";

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
            for (const elem of infoDisplay.children) {
                elem.style.display = "block";
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