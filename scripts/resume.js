const resume = document.getElementById("resume_window");
// resume.getElementsByTagName("main").onclick(console.log('resume :>> ', resume));

// ajouter MutationObserver()

if (resume.open) {
    fetch("../assets/content/content.json")
    .then(res => res.json())
    .then(data =>  {
        let lang = document.getElementById('lang').textContent;
        
        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('#resume_window fieldset')[i].firstElementChild.textContent = data.resume.sections[lang][i];
            // console.log('data.resume.sections.lang[i] :>> ', data.resume.sections[lang][i]);
        }
        
        
    })
    
}