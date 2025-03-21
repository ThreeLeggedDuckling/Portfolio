/*  gestion langue  */
let langBtn = document.getElementById('lang');
langBtn.addEventListener('click', () => {
    langBtn.textContent = langBtn.textContent == "EN" ? "FR" : "EN";

    for (const elem of document.querySelectorAll(".EN, .FR")) {
        if (elem.classList.contains(langBtn.textContent)) elem.style.display = "none";
        else elem.style.display = "block";
    }
    
})

//     /*  reste chipotages en json
//     for (const d of document.getElementsByTagName('dialog')) {
//         d.close();
//         if (d.id == 'portfolio_window') {
//             if (window.innerWidth < 600) {
//                 infoDisplay.style.display = "none";
//             } else {
//                 for (const elem of infoDisplay.children) {
//                     // console.log('elem :>> ', elem);
//                     if (window.innerWidth > 600) {
//                         elem.style.display = "none";
//                     }
//                 }
//             }
//         }
//     }
//     */