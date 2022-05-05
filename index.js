//************* Réussi ! *************/

// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)



//--------------- Variables
const nav = document.querySelector("#navbar");
let actualScroll = 0;


//--------------- Fonctions



//--------------- Evenements
window.addEventListener("scroll", () => {
    if (window.scrollY > actualScroll) {
        nav.style.top = "-60px";
    } else {
        nav.style.top = "0px"; 
    }
    actualScroll = window.scrollY; 
});

