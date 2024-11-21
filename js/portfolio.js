const portfolio = document.getElementById('portfolio_window');
const rootfolder = document.getElementById('root');
const subfolders = document.getElementById('subfolders');
const backfolder = document.getElementById('backend');
const frontfolder = document.getElementById('frontend');

portfolio.addEventListener('click', (e) => {
    if (e.target == rootfolder) {
        let visibility = subfolders.style.contentVisibility;
        subfolders.style.contentVisibility = (visibility == "" || visibility == "hidden") ? "visible" : "hidden";
    }
})