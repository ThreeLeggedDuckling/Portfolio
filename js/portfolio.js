const portfolio = document.getElementById('portfolio_window');
const rootfolder = document.getElementById('root');
const subfolders = document.getElementById('subfolders');
const backfolder = document.getElementById('backend');
const frontfolder = document.getElementById('frontend');
const nBack = document.querySelectorAll('#list>p:not(.back)');
const nFront = document.getElementsByClassName('front');

portfolio.addEventListener('click', (e) => {
    if (e.target == rootfolder) {
        let visibility = subfolders.style.contentVisibility;
        subfolders.style.contentVisibility = (visibility == "" || visibility == "hidden") ? "visible" : "hidden";
    }

    if (e.target == backfolder) {
        for (const p of nBack) {
            p.style.contentVisibility = "hidden";
        }
        for (const b of document.getElementsByClassName('back')) {
            b.style.contentVisibility = "visible";
        }
    }
})